#!/usr/bin/env -S uv run python
"""
Improved table-to-admonition converter.
Handles both grid tables (+---+) and dash-separated tables (----).
Properly reconstructs markdown links that are split across multiple lines.
"""

import re
import sys
from pathlib import Path
from typing import Optional, Tuple, List

# Import cleanup functions
sys.path.insert(0, str(Path(__file__).parent))
from cleanup_markdown import fix_broken_urls, remove_pandoc_attributes, fix_double_brackets

# Ensure UTF-8 encoding for stdout
sys.stdout.reconfigure(encoding='utf-8')

def detect_admonition_type(alt_text: str) -> Tuple[str, str]:
    """Determine admonition type and title from image alt text."""
    # Normalize the alt text by removing extra spaces
    normalized = re.sub(r'\s+', '', alt_text.lower())

    if 'practicestoavoid' in normalized or 'badpractice' in normalized:
        return 'danger', 'Examples of practices to avoid'
    elif 'furtherreading' in normalized or 'information' in normalized:
        return 'info', 'Further reading and information'
    elif 'practicaltip' in normalized or 'tip' in normalized:
        return 'tip', 'Practical tips'
    elif 'goodpractice' in normalized or 'example' in normalized:
        return 'example', 'Examples of good practice'
    else:
        # Return normalized alt text as title
        clean_title = re.sub(r'\s+', ' ', alt_text).strip()
        return 'note', clean_title


def reconstruct_markdown_links(text: str) -> str:
    """
    Reconstruct markdown links that may be split across lines.
    Handles cases like:
    - "[Link text](https://example.com" + "/path)" -> "[Link text](https://example.com/path)"
    """
    # Fix broken URLs within markdown links
    # Remove spaces around URLs that were clearly broken
    text = re.sub(r'\]\(https://([^\)]+?)\s+([^\)]+?)\)', r'](https://\1\2)', text)

    # Fix URLs that are broken mid-domain or mid-path (no space)
    # e.g., "https://learn.micr" + "osoft.com" becomes "https://learn.microsoft.com"
    text = re.sub(r'https://([a-zA-Z0-9\-\.]+?)\s+([a-zA-Z0-9])', r'https://\1\2', text)

    # Continue fixing broken URLs recursively
    while True:
        new_text = re.sub(r'(https://[^\s\)]+?)\s+([a-zA-Z0-9/\-_\.%&=\?#])', r'\1\2', text)
        if new_text == text:
            break
        text = new_text

    return text


def extract_alt_text_from_image(text: str) -> Optional[str]:
    """
    Extract alt text from image markdown, handling split cases.
    e.g., "![Further reading and information](./media/image1.png){width=...}"
    or split: "![Fur" + "ther rea" + "ding and i" + "nfor" + "mati" + "on](...)"
    or with space: "! [Fur ther...]" (from grid table column extraction)
    """
    # Try to find the complete image markdown first (with optional space after !)
    match = re.search(r'!\s*\[([^\]]+)\]', text)
    if match:
        # Normalize spaces in alt text
        alt_text = re.sub(r'\s+', ' ', match.group(1)).strip()
        return alt_text

    # If not found, look for the pattern manually
    # Pattern: "!" followed by optional space, then "[" ... "]("
    if '!' in text and '[' in text and '](' in text:
        # Find the ! and then the [
        excl_pos = text.find('!')
        bracket_start = text.find('[', excl_pos)
        bracket_end = text.find('](', bracket_start)

        if bracket_start > -1 and bracket_end > bracket_start:
            alt_text = text[bracket_start+1:bracket_end]
            # Normalize spaces
            alt_text = re.sub(r'\s+', ' ', alt_text).strip()
            return alt_text

    return None


def clean_image_and_attributes(text: str) -> str:
    """
    Remove image markdown and all associated attributes.
    Handles: ![alt](url){width="..." height="..."}
    Also handles attributes that come after the closing brace.
    """
    # Remove complete image markdown with attributes
    text = re.sub(r'!\[[^\]]*\]\([^)]+\)\{[^}]*\}', '', text)

    # Remove image markdown without braces
    text = re.sub(r'!\[[^\]]*\]\([^)]+\)', '', text)

    # Remove standalone width/height attributes
    text = re.sub(r'width="[^"]*"', '', text)
    text = re.sub(r'height="[^"]*"', '', text)
    text = re.sub(r'\{width=[^}]*\}', '', text)
    text = re.sub(r'\{height=[^}]*\}', '', text)

    # Clean up extra horizontal whitespace, but preserve newlines
    text = re.sub(r'[^\S\n]+', ' ', text)

    return text.strip()


def extract_dash_table(lines: List[str], start_idx: int) -> Optional[Tuple[str, int]]:
    """Extract dash-separated table.
    Handles Pandoc simple tables with format:
    -----
    content
    ----- -----
    (blank)
    -----
    Returns (table_text, end_idx) or None.
    """
    if start_idx >= len(lines):
        return None

    # Must start with CONTINUOUS dashes (at least 20), not a column separator
    # Column separator has pattern: ---- ---- (with space/gap)
    # Top border has pattern: -------- (continuous)
    line = lines[start_idx]
    if not re.match(r'^\s*-{20,}\s*$', line):
        return None

    # Additionally check that it's not a column separator (has no large gaps)
    if re.match(r'^\s*-+\s{2,}-+', line):
        return None

    table_lines = [lines[start_idx]]
    i = start_idx + 1
    found_column_separator = False
    found_content = False

    # Collect until we find the complete table structure
    while i < len(lines):
        line = lines[i]

        # If we encounter a markdown heading, this table is malformed - stop here
        if re.match(r'^#{1,6}\s+', line):
            return None

        # If we encounter a grid table before finding a column separator, this isn't a simple table
        if not found_column_separator and re.match(r'^\+[-=]+\+', line):
            return None

        # Check if this is a column separator line (dashes with gap)
        if re.match(r'^\s*-+\s+-+', line):
            # Column separator must come after some content
            if not found_content:
                return None
            table_lines.append(line)
            found_column_separator = True
            i += 1
            continue

        # After column separator, look for closing border
        if found_column_separator:
            # If we encounter a markdown heading after column separator, stop - table is incomplete
            if re.match(r'^#{1,6}\s+', line):
                return None

            # Check if this is the closing border
            if re.match(r'^\s*-{20,}\s*$', line) and not re.match(r'^\s*-+\s{2,}-+', line):
                # Found closing dash line
                table_lines.append(line)
                return '\n'.join(table_lines), i + 1

            # Continue collecting content (including blank lines)
            table_lines.append(line)
            i += 1
            continue

        # Before column separator, collect content
        if line.strip():  # Only count non-empty lines as content
            found_content = True
        table_lines.append(line)
        i += 1

    return None


def parse_dash_table(table_text: str) -> Tuple[Optional[str], Optional[str]]:
    """Parse dash-separated table.
    Handles two-column format where columns are separated by whitespace.
    Returns (alt_text, content) or (None, None).
    """
    lines = table_text.split('\n')

    # Find the column separator line to determine column positions
    separator_line = None
    for line in lines:
        if re.match(r'^\s*-+\s+-+', line):
            separator_line = line
            break

    if separator_line:
        # Two-column table - find the gap position
        match = re.search(r'(-+)\s+(-+)', separator_line)
        if match:
            # The gap between the two dash groups indicates column boundary
            gap_start = match.start(1) + len(match.group(1))
            gap_end = match.start(2)
            split_pos = (gap_start + gap_end) // 2

            # Split content into left and right columns
            left_parts = []
            right_parts_structured = []
            prev_right_empty = True

            for line in lines:
                # Skip dash lines
                if re.match(r'^\s*-+', line):
                    continue

                if len(line) > split_pos:
                    left = line[:split_pos].strip()
                    right = line[split_pos:].strip()
                    if left:
                        left_parts.append(left)

                    # Track right column with empty line detection
                    # Check if line has actual content (not just whitespace)
                    if right and right.strip():
                        right_parts_structured.append(right)
                        prev_right_empty = False
                    else:
                        # Empty line in right column - mark paragraph break
                        if not prev_right_empty:
                            right_parts_structured.append(None)
                            prev_right_empty = True

            left_content = ' '.join(left_parts)

            # Reconstruct right content preserving paragraph breaks
            right_paragraphs = []
            current_paragraph = []

            for item in right_parts_structured:
                if item is None:
                    if current_paragraph:
                        right_paragraphs.append(' '.join(current_paragraph))
                        current_paragraph = []
                else:
                    current_paragraph.append(item)

            if current_paragraph:
                right_paragraphs.append(' '.join(current_paragraph))

            right_content = '\n'.join(right_paragraphs)

            # Extract alt text from left column
            alt_text = extract_alt_text_from_image(left_content)
            if not alt_text:
                return None, None

            # Content is in right column
            content = clean_image_and_attributes(right_content)
            content = reconstruct_markdown_links(content)

            # Remove > blockquote markers
            content = re.sub(r'(^|\s)>\s+', r'\1', content)
            content = content.strip()

            return alt_text, content

    # Fallback: single column or simple format
    content_lines = []
    for line in lines:
        if not re.match(r'^\s*-{20,}', line):
            content_lines.append(line.strip())

    full_content = ' '.join(content_lines)

    alt_text = extract_alt_text_from_image(full_content)
    if not alt_text:
        return None, None

    content = clean_image_and_attributes(full_content)
    content = reconstruct_markdown_links(content)

    # Remove > blockquote markers
    content = re.sub(r'(^|\s)>\s+', r'\1', content)
    content = content.strip()

    return alt_text, content


def extract_grid_table(lines: List[str], start_idx: int) -> Optional[Tuple[str, int]]:
    """Extract grid table (+---+).
    Returns (table_text, end_idx) or None.
    """
    if start_idx >= len(lines):
        return None

    if not re.match(r'^\+[-=]+\+', lines[start_idx]):
        return None

    table_lines = [lines[start_idx]]
    i = start_idx + 1

    while i < len(lines):
        line = lines[i]

        # Grid table lines must start with | or +
        if not line.strip().startswith(('|', '+')):
            # Hit a non-table line, table ended
            # Check if we have a complete table (at least 3 lines with a closing border)
            if len(table_lines) >= 3 and re.match(r'^\+[-=]+\+', table_lines[-1]):
                return '\n'.join(table_lines), i
            return None

        table_lines.append(line)

        # Check if this is a closing border (same pattern as opening)
        if i > start_idx + 2 and re.match(r'^\+[-=]+\+', line):
            # This could be a closing border - check if next line is blank or non-table
            if i + 1 >= len(lines) or not lines[i + 1].strip().startswith(('|', '+')):
                return '\n'.join(table_lines), i + 1

        i += 1

    return None


def parse_grid_table(table_text: str) -> Tuple[Optional[str], Optional[str]]:
    """Parse grid table (+---+).
    Returns (alt_text, content) or (None, None).

    Handles two cases:
    1. Image with alt text in column 1, content in column 2
    2. Image + additional text in column 1, content in column 2
       (e.g., image icon + "**SDS-CS-3** **T-SQL standard**")
    """
    lines = table_text.split('\n')

    # Find the first border line to determine column positions
    border_line = None
    for line in lines:
        if re.match(r'^\+[-=]+\+', line):
            border_line = line
            break

    if not border_line:
        return None, None

    # Find column boundaries from the border line
    # Border format: +------+-------+
    # The + characters mark column boundaries
    col_positions = [m.start() for m in re.finditer(r'\+', border_line)]

    if len(col_positions) < 3:
        return None, None

    # Column 1 is between first and second +
    # Column 2 is between second and third +
    col1_start = col_positions[0]
    col1_end = col_positions[1]
    col2_start = col_positions[1]
    col2_end = col_positions[2]

    left_parts = []
    right_parts = []

    # Track right column content with line breaks preserved
    # Each element in right_parts_structured is either text or None (empty line marker)
    right_parts_structured = []
    prev_right_empty = True  # Start assuming previous was empty

    for line in lines:
        # Skip border lines
        if re.match(r'^\+[-=]+\+', line):
            continue

        # Extract columns by position
        if len(line) > col2_end:
            # Extract columns and strip delimiters carefully
            # Only strip | and whitespace from the left (cell delimiter)
            # Only strip whitespace from the right (preserve \| escapes)
            left = line[col1_start:col1_end].lstrip('| \t').rstrip(' \t')
            right = line[col2_start:col2_end].lstrip('| \t').rstrip(' \t')

            if left:
                left_parts.append(left)

            # Track right column with empty line detection
            # Check if line has actual content (not just whitespace)
            if right and right.strip():
                right_parts_structured.append(right)
                prev_right_empty = False
            else:
                # Empty line in right column - mark paragraph break
                if not prev_right_empty:
                    right_parts_structured.append(None)  # Paragraph break marker
                    prev_right_empty = True

    # Join parts to reconstruct content
    left_content = ' '.join(left_parts)

    # Reconstruct right content preserving paragraph breaks
    # Group consecutive non-None items, join with spaces within group
    # Join groups with newlines
    right_paragraphs = []
    current_paragraph = []

    for item in right_parts_structured:
        if item is None:
            # Paragraph break
            if current_paragraph:
                right_paragraphs.append(' '.join(current_paragraph))
                current_paragraph = []
        else:
            current_paragraph.append(item)

    # Add final paragraph
    if current_paragraph:
        right_paragraphs.append(' '.join(current_paragraph))

    right_content = '\n'.join(right_paragraphs)

    # Extract title from left column
    # First, try to get alt text from image
    alt_text = extract_alt_text_from_image(left_content)

    # Also extract non-image text from left column
    # Remove image markdown to get remaining text
    text_without_image = re.sub(r'!\s*\[[^\]]*\]\([^)]*\)(\{[^}]*\})?', '', left_content)
    text_without_image = text_without_image.strip()

    # Use non-image text as title if available, otherwise use alt text
    if text_without_image:
        title = text_without_image
    elif alt_text:
        title = alt_text
    else:
        # No valid title found
        return None, None

    # The actual content is in the right column
    # Clean it and reconstruct links
    content = clean_image_and_attributes(right_content)
    content = reconstruct_markdown_links(content)

    # Remove > blockquote markers (from Pandoc grid table formatting)
    # Remove at start of string, after newlines, and standalone > characters
    content = re.sub(r'(^|\s)>\s+', r'\1', content)
    content = content.strip()

    return title, content


def extract_markdown_links(text: str) -> List[str]:
    """Extract all markdown links from text and format them properly."""
    links = []

    # Find all markdown links
    pattern = r'\[([^\]]+)\]\(([^\)]+)\)'
    matches = re.finditer(pattern, text)

    for match in matches:
        link_text = match.group(1).strip()
        link_url = match.group(2).strip()
        links.append(f'[{link_text}]({link_url})')

    return links


def create_admonition(admon_type: str, title: str, content: str) -> str:
    """Create admonition block with proper formatting while preserving content order."""
    if not content:
        return ''

    # Clean up Pandoc artifacts
    content = fix_broken_urls(content)
    content = remove_pandoc_attributes(content)
    content = fix_double_brackets(content)

    # Split content into lines and process each line to preserve order
    lines = [f'!!! {admon_type} "{title}"']

    content_lines = content.split('\n')

    for line in content_lines:
        line = line.strip()
        if not line:
            continue

        # Check if this line contains a markdown link
        if re.search(r'\[([^\]]+)\]\(([^\)]+)\)', line):
            # Line contains a link - keep it as-is
            if len(lines) > 1:  # Not the first item
                lines.append('')  # Blank line separator
            lines.append(f'    {line}')
        else:
            # Plain text line - check if it's a heading or regular text
            # Bold text like **Heading** is likely a section heading
            if len(lines) > 1:  # Not the first item
                lines.append('')  # Blank line separator
            lines.append(f'    {line}')

    return '\n'.join(lines)


def process_markdown(content: str) -> Tuple[str, int]:
    """Process markdown to convert callout tables to admonitions."""
    lines = content.split('\n')
    output = []
    i = 0

    conversions = 0

    while i < len(lines):
        # Try dash table first
        result = extract_dash_table(lines, i)
        if result:
            table_text, end_idx = result
            alt_text, content_text = parse_dash_table(table_text)

            if alt_text and content_text:
                admon_type, title = detect_admonition_type(alt_text)
                admonition = create_admonition(admon_type, title, content_text)
                if admonition:
                    output.append(admonition)
                    output.append('')
                    conversions += 1
                    i = end_idx
                    continue

        # Try grid table
        result = extract_grid_table(lines, i)
        if result:
            table_text, end_idx = result
            alt_text, content_text = parse_grid_table(table_text)

            if alt_text and content_text:
                admon_type, title = detect_admonition_type(alt_text)
                admonition = create_admonition(admon_type, title, content_text)
                if admonition:
                    output.append(admonition)
                    output.append('')
                    conversions += 1
                    i = end_idx
                    continue

        # Keep original line
        output.append(lines[i])
        i += 1

    return '\n'.join(output), conversions


def process_file(input_path: Path, output_path: Path):
    """Process a single markdown file."""
    print(f"Processing: {input_path.name}")

    content = input_path.read_text(encoding='utf-8')
    before_images = len(re.findall(r'!\[[^\]]*\]\([^)]+\)', content))

    processed, conversions = process_markdown(content)

    after_images = len(re.findall(r'!\[[^\]]*\]\([^)]+\)', processed))
    admonitions = len(re.findall(r'^!!!', processed, re.MULTILINE))

    output_path.write_text(processed, encoding='utf-8')

    print(f"  Images before: {before_images}")
    print(f"  Conversions: {conversions}")
    print(f"  Admonitions in output: {admonitions}")
    print(f"  Images after: {after_images}")


def main():
    raw_dir = Path('raw-step2-grid-tables')
    processed_dir = Path('raw-step3-admonitions')
    processed_dir.mkdir(exist_ok=True)

    total_conversions = 0

    for raw_file in sorted(raw_dir.glob('*.md')):
        output_file = processed_dir / raw_file.name
        process_file(raw_file, output_file)

        content = output_file.read_text(encoding='utf-8')
        count = len(re.findall(r'^!!!', content, re.MULTILINE))
        total_conversions += count
        print()

    print(f"✓ Processed {len(list(raw_dir.glob('*.md')))} files")
    print(f"✓ Total admonitions created: {total_conversions}")
    print(f"✓ Output in: {processed_dir}")


if __name__ == '__main__':
    main()
