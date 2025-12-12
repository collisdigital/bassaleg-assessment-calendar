#!/usr/bin/env -S uv run python
"""
Convert Pandoc simple tables (non-grid) to mkdocs format.
Reads from raw/, outputs to raw-step1-simple-tables/
"""

import re
from pathlib import Path
from typing import List, Optional, Tuple

import sys
# Ensure UTF-8 encoding for stdout on Wi
sys.stdout.reconfigure(encoding='utf-8')

def extract_simple_table(lines: List[str], start_idx: int) -> Optional[Tuple[List[str], int]]:
    """
    Extract a simple Pandoc table.
    Format:
      --------
      Header1  Header2
      -------- --------
      Data1    Data2
      --------

    Returns (table_lines, end_idx) or None.
    """
    if start_idx >= len(lines):
        return None

    # Simple table starts with dashes
    if not re.match(r'^\s+-{3,}\s*$', lines[start_idx]):
        return None

    table_lines = [lines[start_idx]]
    i = start_idx + 1

    # Collect all lines until we hit a non-table line or another separator followed by blank
    while i < len(lines):
        line = lines[i]

        table_lines.append(line)

        # Check if this is the closing separator
        if i > start_idx + 2 and re.match(r'^\s+-{3,}\s*$', line):
            # Check if next line is blank or non-table
            if i + 1 >= len(lines) or not lines[i + 1].strip() or not re.match(r'^\s+\S', lines[i + 1]):
                return table_lines, i + 1

        i += 1

    return None


def parse_simple_table(table_lines: List[str]) -> Optional[List[List[str]]]:
    """
    Parse simple table into rows and columns.
    Returns list of rows (each row is list of cells).
    """
    if len(table_lines) < 4:  # Need at least top border, header, sep, bottom border
        return None

    # Find separator lines (lines with mostly dashes)
    separator_indices = []
    for i, line in enumerate(table_lines):
        if re.match(r'^\s+-{3,}', line):
            separator_indices.append(i)

    if len(separator_indices) < 2:
        return None

    # The header separator (second separator line) defines column positions
    header_sep = table_lines[separator_indices[1]]

    # Find column boundaries by looking for gaps in the separator
    col_positions = []
    in_dash = False
    start = 0

    for i, char in enumerate(header_sep):
        if char == '-':
            if not in_dash:
                start = i
                in_dash = True
        else:
            if in_dash:
                col_positions.append((start, i))
                in_dash = False

    if in_dash:
        col_positions.append((start, len(header_sep)))

    if not col_positions:
        return None

    rows = []

    # Extract header (between first and second separator)
    header_lines = table_lines[separator_indices[0] + 1:separator_indices[1]]
    if header_lines:
        header = []
        for start, end in col_positions:
            cell_content = []
            for line in header_lines:
                if len(line) > start:
                    # Extract up to end position or line length, whichever is shorter
                    cell_text = line[start:min(end, len(line))].strip()
                    if cell_text:
                        cell_content.append(cell_text)
            header.append(' '.join(cell_content) if cell_content else '')
        rows.append(header)

    # Extract data rows (between header separator and closing separator)
    if len(separator_indices) >= 3:
        # Has closing separator
        data_lines = table_lines[separator_indices[1] + 1:separator_indices[-1]]
    else:
        # No clear closing separator
        data_lines = table_lines[separator_indices[1] + 1:]

    # Group data lines into rows (separated by blank lines or all columns have content)
    current_row_cells = [[] for _ in col_positions]

    for line in data_lines:
        if not line.strip():
            # Blank line - save current row if it has content
            if any(cells for cells in current_row_cells):
                row = [' '.join(cells).strip() for cells in current_row_cells]
                if any(row):
                    rows.append(row)
                current_row_cells = [[] for _ in col_positions]
            continue

        # Extract cells from this line
        for col_idx, (start, end) in enumerate(col_positions):
            if len(line) > start:
                # Extract up to end position or line length, whichever is shorter
                cell_text = line[start:min(end, len(line))].strip()
                if cell_text:
                    current_row_cells[col_idx].append(cell_text)

    # Don't forget last row
    if any(cells for cells in current_row_cells):
        row = [' '.join(cells).strip() for cells in current_row_cells]
        if any(row):
            rows.append(row)

    return rows if len(rows) >= 2 else None


def create_mkdocs_table(rows: List[List[str]]) -> str:
    """Create mkdocs markdown table from rows."""
    if not rows or len(rows) < 2:
        return ''

    lines = []

    # Header
    header = rows[0]
    lines.append('| ' + ' | '.join(header) + ' |')

    # Separator
    lines.append('| ' + ' | '.join(['---' for _ in header]) + ' |')

    # Data rows
    for row in rows[1:]:
        # Pad row if needed
        while len(row) < len(header):
            row.append('')
        lines.append('| ' + ' | '.join(row[:len(header)]) + ' |')

    return '\n'.join(lines)


def is_data_table(rows: List[List[str]]) -> bool:
    """
    Determine if this is a data table vs callout table.

    Data tables have:
    - 3+ columns with headers and data
    - May have decorative images in first column

    Callout tables have:
    - 2 columns (image + content)
    - Image in first column, text in second
    """
    if not rows:
        return False

    # If table has 3+ columns, it's a data table
    # Even if it has an image icon in the first column
    num_cols = len(rows[0]) if rows else 0
    if num_cols >= 3:
        return True

    # For 2-column tables, check if images are present
    # If yes, it's likely a callout table, not a data table
    for row in rows:
        for cell in row:
            if '![' in cell:
                return False

    return True


def process_file(input_path: Path, output_path: Path):
    """Process a single file."""
    content = input_path.read_text(encoding='utf-8')
    lines = content.split('\n')

    output = []
    i = 0
    conversions = 0
    skipped = 0

    while i < len(lines):
        result = extract_simple_table(lines, i)

        if result:
            table_lines, end_idx = result
            rows = parse_simple_table(table_lines)

            if rows and is_data_table(rows):
                # Convert to mkdocs table
                mkdocs_table = create_mkdocs_table(rows)
                if mkdocs_table:
                    output.append(mkdocs_table)
                    output.append('')
                    conversions += 1
                    i = end_idx
                    continue
            else:
                # Keep original (might be callout table or malformed)
                output.extend(lines[i:end_idx])
                skipped += 1
                i = end_idx
                continue

        output.append(lines[i])
        i += 1

    output_path.write_text('\n'.join(output), encoding='utf-8')

    if conversions > 0 or skipped > 0:
        print(f"  Simple tables converted: {conversions}, skipped: {skipped}")


def main():
    raw_dir = Path('raw')
    output_dir = Path('raw-step1-simple-tables')
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
