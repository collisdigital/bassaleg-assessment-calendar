#!/usr/bin/env -S uv run python
"""
Split all documents from raw-step3-admonitions/ into docs/ structure.
Maps input files to appropriate output folders based on naming convention.
"""

import re
import sys
import json
from pathlib import Path
from typing import List, Dict

# Import cleanup functions
sys.path.insert(0, str(Path(__file__).parent))
from cleanup_markdown import fix_broken_urls, remove_pandoc_attributes, fix_double_brackets

# Ensure UTF-8 encoding for stdout
sys.stdout.reconfigure(encoding='utf-8')

def slugify(text: str) -> str:
    """Convert heading to filename."""
    if not text:
        return 'untitled'
    text = re.sub(r'[^\w\s-]', '', text.lower())
    text = re.sub(r'[-\s]+', '-', text)
    return text.strip('-')


def bold_keywords(text: str) -> str:
    """Bold RFC 2119 keywords if not already bolded."""
    keywords = ['MUST NOT', 'MUST', 'REQUIRED', 'SHALL NOT', 'SHALL',
                'SHOULD NOT', 'SHOULD', 'RECOMMENDED', 'MAY', 'OPTIONAL']
    # Process longer keywords first to avoid partial matches
    for kw in keywords:
        # Only bold if not already surrounded by **
        text = re.sub(rf'(?<!\*)\b{kw}\b(?!\*)', f'**{kw}**', text)
    return text


def remove_images(text: str) -> str:
    """Remove image references."""
    return re.sub(r'!\[([^\]]*)\]\([^)]*\)', '', text)


def remove_grid_tables(text: str) -> str:
    """
    Remove Pandoc grid tables that weren't converted.
    These are tables with +---+ borders that slipped through conversion.
    """
    lines = text.split('\n')
    result = []
    in_grid_table = False
    i = 0

    while i < len(lines):
        line = lines[i]

        # Detect start of grid table
        if re.match(r'^\+[-=]+\+', line):
            in_grid_table = True
            # Skip this line and continue
            i += 1
            continue

        # If we're in a grid table
        if in_grid_table:
            # Check if line is part of grid table (starts with | or +)
            if line.strip().startswith(('|', '+')):
                # Skip grid table lines
                i += 1
                continue
            else:
                # End of grid table, back to normal content
                in_grid_table = False

        # Normal content line
        result.append(line)
        i += 1

    return '\n'.join(result)


def process_content(content: str) -> str:
    """Apply formatting rules."""
    content = remove_images(content)
    content = bold_keywords(content)
    # Clean up Pandoc artifacts
    content = fix_broken_urls(content)
    content = remove_pandoc_attributes(content)
    content = fix_double_brackets(content)
    content = remove_grid_tables(content)  # Remove unconverted grid tables
    # Remove empty bracket lines (artifacts from image/table removal)
    content = re.sub(r'^\[\]\s*$', '', content, flags=re.MULTILINE)
    # Consolidate multiple blank lines
    content = re.sub(r'\n{3,}', '\n\n', content)
    return content.strip()


def extract_sections(raw_file: Path) -> List[Dict]:
    """Extract sections with full content."""
    content = raw_file.read_text(encoding='utf-8')
    lines = content.split('\n')

    # Find main content start
    start_idx = 0
    for i, line in enumerate(lines):
        if re.match(r'^#\s+(PURPOSE|INTRODUCTION)', line, re.IGNORECASE):
            start_idx = i
            break

    sections = []
    current = {'heading': '', 'content': [], 'level': 0}

    for line in lines[start_idx:]:
        match = re.match(r'^(#{1,6})\s+(.+)$', line)
        if match:
            # Save previous section
            if current['heading']:
                current['content'] = '\n'.join(current['content'])
                sections.append(current)

            # Start new section
            level = len(match.group(1))
            heading = match.group(2).strip()
            heading = re.sub(r'\s*\{#[^}]+\}\s*', '', heading)  # Remove anchors
            current = {'heading': heading, 'content': [], 'level': level}
        else:
            current['content'].append(line)

    # Add last section
    if current['heading']:
        current['content'] = '\n'.join(current['content'])
        sections.append(current)

    return sections


def group_sections_for_files(sections: List[Dict]) -> Dict[str, List[Dict]]:
    """Group sections into files intelligently."""
    files = {}
    current_file_key = None
    current_file_sections = []
    split_level2 = False  # Whether to split level 2 headings into separate files

    for section in sections:
        heading = section['heading']
        level = section['level']

        if level == 1:
            # Check if this is a section where level-2 headings should be split
            # Match sections named "STANDARDS", "GUIDANCE", or ending with "STANDARDS"
            # (e.g., "DESIGN STANDARDS", "SECURITY STANDARDS")
            # But exclude sections like "THE NEED FOR GUIDANCE"
            heading_upper = heading.upper().strip()
            if (heading_upper == 'STANDARDS' or
                heading_upper == 'GUIDANCE' or
                (heading_upper.endswith(' STANDARDS') and not heading_upper.startswith('THE '))):
                split_level2 = True
                # Don't create a file for this heading itself, just track mode
                continue
            else:
                split_level2 = False
                # Save previous file
                if current_file_sections:
                    files[current_file_key] = current_file_sections

                # Start new file for this level-1 heading
                current_file_key = heading
                current_file_sections = [section]

        elif level == 2:
            if split_level2:
                # Each level-2 under STANDARDS/GUIDANCE becomes its own file
                if current_file_sections:
                    files[current_file_key] = current_file_sections

                current_file_key = heading
                current_file_sections = [section]
            else:
                # Not in split mode, add to current file
                current_file_sections.append(section)

        else:  # level 3+
            # Add to current file
            current_file_sections.append(section)

    # Save last file
    if current_file_sections:
        files[current_file_key] = current_file_sections

    return files


def write_files(output_dir: Path, grouped_files: Dict[str, List[Dict]]):
    """Write grouped sections to files and save order metadata."""
    output_dir.mkdir(parents=True, exist_ok=True)

    # Track file order - dict preserves insertion order in Python 3.7+
    file_order = {}
    order_index = 0

    for file_key, sections in grouped_files.items():
        filename = slugify(file_key) + '.md'
        filepath = output_dir / filename

        # Record the order
        file_order[filename] = order_index
        order_index += 1

        with open(filepath, 'w', encoding='utf-8') as f:
            # Determine base level from first section
            base_level = sections[0]['level']

            for section in sections:
                # Calculate adjusted level
                level_diff = section['level'] - base_level
                adjusted_level = max(1, level_diff + 1)

                # Write heading
                f.write('#' * adjusted_level + ' ' + section['heading'] + '\n\n')

                # Write content
                content = process_content(section['content'])
                if content:
                    f.write(content + '\n\n')

        size_kb = filepath.stat().st_size / 1024
        print(f"    {filename:50s} ({len(sections):2d} sections, {size_kb:6.1f} KB)")

    # Save order metadata to .nav-order.json
    order_file = output_dir / '.nav-order.json'
    with open(order_file, 'w', encoding='utf-8') as f:
        json.dump(file_order, f, indent=2)
    print(f"    Saved navigation order to .nav-order.json")


def determine_output_folder(filename: str) -> str:
    """Map input filename to output folder name based on document content."""
    # Map based on filename patterns
    mapping = {
        'SDS-CS-1': 'using-source-control',
        'SDS-CS-3': 't-sql-coding-standard',
        'SDS-CS-4': 'restful-api-standards',
        'SDS-CS-5': 'organising-your-solution',
        'SDS-CS-6': 'general-coding-standards',
        'SDS-CS-7': 'azure-devops-handbook',
        'SDS-GDN-1': 'software-development-handbook',
        'SDS-GDN-4': 'software-subscriptions',
        'SDS-GDN-5': 'testing-lost-updates',
        'SDS-GDN-6': 'test-summary-report',
        'SDS-TEM-2': 'coding-standard-template',
    }

    for key, folder in mapping.items():
        if filename.startswith(key):
            return folder

    # Default fallback
    return slugify(filename)


def process_all_documents():
    """Process all documents from raw-step3-admonitions/."""
    input_dir = Path('raw-step3-admonitions')
    output_base = Path('docs')

    if not input_dir.exists():
        print(f"❌ Input directory not found: {input_dir}")
        return False

    # Ensure output directory exists
    output_base.mkdir(exist_ok=True)

    # Create index.md
    index_file = output_base / 'index.md'
    index_file.write_text('# Software Development Standards\n\nWelcome to the Software Development Standards documentation.\n', encoding='utf-8')
    print(f"  Created index.md")

    # Process each markdown file
    md_files = sorted(input_dir.glob('*.md'))

    if not md_files:
        print(f"❌ No markdown files found in {input_dir}")
        return False

    total_files_created = 0

    for raw_file in md_files:
        folder_name = determine_output_folder(raw_file.stem)
        output_dir = output_base / folder_name

        print(f"\n  Processing: {raw_file.name}")
        print(f"  Output to: {output_dir}/")

        sections = extract_sections(raw_file)
        print(f"    Extracted {len(sections)} sections")

        grouped = group_sections_for_files(sections)
        print(f"    Grouped into {len(grouped)} files")

        write_files(output_dir, grouped)
        total_files_created += len(grouped)

    print(f"\n✓ Processed {len(md_files)} source documents")
    print(f"✓ Created {total_files_created} output files")
    return True


def main():
    """Main entry point."""
    success = process_all_documents()
    sys.exit(0 if success else 1)


if __name__ == '__main__':
    main()
