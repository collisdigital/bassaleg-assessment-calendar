#!/usr/bin/env -S uv run python
"""
Convert Pandoc grid tables to mkdocs-compatible tables.
This is for DATA tables (not callout boxes).
"""

import re
import sys
from pathlib import Path
from typing import List, Optional, Tuple

# Ensure UTF-8 encoding for stdout
sys.stdout.reconfigure(encoding='utf-8')

def extract_data_grid_table(lines: List[str], start_idx: int) -> Optional[Tuple[List[List[str]], int]]:
    """
    Extract a Pandoc grid table and parse it into rows/cells.
    Returns (table_data, end_idx) or None.

    Table format:
    +-----+-----+
    | A   | B   |
    +=====+=====+
    | C   | D   |
    +-----+-----+
    """
    if start_idx >= len(lines):
        return None

    # Must start with +---+
    if not re.match(r'^\+[-=]+\+', lines[start_idx]):
        return None

    # Extract the entire table
    table_lines = [lines[start_idx]]
    i = start_idx + 1

    while i < len(lines):
        line = lines[i]

        # Table continues if line starts with | or +
        if not line.strip().startswith(('|', '+')):
            break

        table_lines.append(line)

        # Check if this is the closing border
        if i > start_idx + 2 and re.match(r'^\+[-=]+\+', line):
            # Check if next line is non-table
            if i + 1 >= len(lines) or not lines[i + 1].strip().startswith(('|', '+')):
                # Now parse the table
                table_data = parse_grid_table_data(table_lines)
                if table_data:
                    return table_data, i + 1
                return None

        i += 1

    return None


def parse_grid_table_data(table_lines: List[str]) -> Optional[List[List[str]]]:
    """
    Parse grid table lines into structured data.
    Returns list of rows, where each row is list of cells.
    """
    # Find column positions from first border line
    border_line = table_lines[0]
    col_positions = [m.start() for m in re.finditer(r'\+', border_line)]

    if len(col_positions) < 2:
        return None

    rows = []
    current_row = ['' for _ in range(len(col_positions) - 1)]

    for line in table_lines[1:]:
        # Skip border lines
        if re.match(r'^\+[-=]+\+', line):
            # If we have accumulated content, save the row
            if any(cell.strip() for cell in current_row):
                rows.append([cell.strip() for cell in current_row])
                current_row = ['' for _ in range(len(col_positions) - 1)]
            continue

        # Parse content lines
        if line.startswith('|'):
            # Extract cell content based on column positions
            for col_idx in range(len(col_positions) - 1):
                start_pos = col_positions[col_idx]
                end_pos = col_positions[col_idx + 1]

                if len(line) > end_pos:
                    cell_content = line[start_pos:end_pos].strip('| \t')
                    if cell_content:
                        # Append to existing cell content (for multi-line cells)
                        if current_row[col_idx]:
                            current_row[col_idx] += ' ' + cell_content
                        else:
                            current_row[col_idx] = cell_content

    # Don't forget the last row
    if any(cell.strip() for cell in current_row):
        rows.append([cell.strip() for cell in current_row])

    return rows if rows else None


def create_mkdocs_table(table_data: List[List[str]]) -> str:
    """
    Create mkdocs-compatible markdown table from structured data.
    """
    if not table_data or len(table_data) < 2:
        return ''

    # First row is header
    header = table_data[0]
    data_rows = table_data[1:]

    # Build mkdocs table
    lines = []

    # Header row
    lines.append('| ' + ' | '.join(header) + ' |')

    # Separator row
    lines.append('| ' + ' | '.join(['---' for _ in header]) + ' |')

    # Data rows - replace newlines with <br> for multi-line cells
    for row in data_rows:
        cleaned_row = []
        for cell in row:
            # Clean up spacing
            cell = re.sub(r'\s+', ' ', cell)
            cleaned_row.append(cell)
        lines.append('| ' + ' | '.join(cleaned_row) + ' |')

    return '\n'.join(lines)


def is_callout_table(table_data: List[List[str]]) -> bool:
    """
    Determine if this is a callout table (which should become an admonition)
    vs a data table (which should remain a table).

    Callout tables typically have:
    - 2 columns (image + content)
    - Image in first column of most/all rows
    - Descriptive text in second column
    - Few rows (usually 1-5)

    Data tables have:
    - 3+ columns with headers
    - Numeric or structured data
    - Images may be decorative icons in first column
    """
    if not table_data or len(table_data) == 0:
        return False

    # If table has 3+ columns, it's likely a data table (not a callout)
    # Even if it has an image icon in the first column
    num_cols = len(table_data[0]) if table_data else 0
    if num_cols >= 3:
        return False

    # For 2-column tables, check if images are present
    has_image = False
    for row in table_data:
        for cell in row:
            if '![' in cell or '! [' in cell:
                has_image = True
                break
        if has_image:
            break

    return has_image


def process_file(input_path: Path, output_path: Path):
    """Process a markdown file to convert grid tables."""
    content = input_path.read_text(encoding='utf-8')
    lines = content.split('\n')

    output = []
    i = 0
    conversions = 0
    skipped_callouts = 0

    while i < len(lines):
        # Try to extract grid table
        result = extract_data_grid_table(lines, i)

        if result:
            table_data, end_idx = result

            # Check if this is a callout table (skip those for now)
            if is_callout_table(table_data):
                # Keep original table, will be converted by admonition converter
                output.extend(lines[i:end_idx])
                skipped_callouts += 1
                i = end_idx
                continue

            # Convert to mkdocs table
            mkdocs_table = create_mkdocs_table(table_data)
            if mkdocs_table:
                output.append(mkdocs_table)
                output.append('')  # Blank line after table
                conversions += 1
                i = end_idx
                continue

        # Keep original line
        output.append(lines[i])
        i += 1

    output_path.write_text('\n'.join(output), encoding='utf-8')

    print(f"  Data tables converted: {conversions}")
    print(f"  Callout tables skipped: {skipped_callouts}")


def main():
    raw_dir = Path('raw-step1-simple-tables')
    output_dir = Path('raw-step2-grid-tables')
    output_dir.mkdir(exist_ok=True)

    total_conversions = 0

    for raw_file in sorted(raw_dir.glob('*.md')):
        print(f"\nProcessing: {raw_file.name}")
        output_file = output_dir / raw_file.name
        process_file(raw_file, output_file)

    print(f"\n✓ Processed {len(list(raw_dir.glob('*.md')))} files")
    print(f"✓ Output in: {output_dir}")


if __name__ == '__main__':
    main()
