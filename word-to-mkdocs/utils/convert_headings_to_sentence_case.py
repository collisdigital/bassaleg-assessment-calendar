#!/usr/bin/env -S uv run python
"""
Convert all markdown headings to Sentence case while preserving proper nouns.

Sentence case: First word capitalized, rest lowercase except for proper nouns.
Example: "FOLLOW OUR NAMING RULES" -> "Follow our naming rules"
Example: "USE AZURE DEVOPS" -> "Use Azure DevOps"
"""

import re
from pathlib import Path
import sys

# Import shared sentence case conversion logic
from text_utils import to_sentence_case

# Ensure UTF-8 encoding for stdout
sys.stdout.reconfigure(encoding='utf-8')

def convert_heading(match):
    """Convert a markdown heading to sentence case."""
    hashes = match.group(1)
    heading_text = match.group(2).strip()

    # Convert to sentence case
    new_text = to_sentence_case(heading_text)

    return f'{hashes} {new_text}'


def process_file(file_path: Path) -> int:
    """Process a single markdown file and convert all headings to sentence case."""
    content = file_path.read_text(encoding='utf-8')

    # Match markdown headings: # Heading, ## Heading, etc.
    # Pattern: start of line, one or more #, space, heading text
    original_content = content
    content = re.sub(r'^(#{1,6})\s+(.+)$', convert_heading, content, flags=re.MULTILINE)

    # Only write if changed
    changes = 0
    if content != original_content:
        file_path.write_text(content, encoding='utf-8')
        changes = 1

    return changes


def main():
    """Process all markdown files in the docs directory."""
    if len(sys.argv) < 2:
        print("Usage: convert_headings_to_sentence_case.py <docs_dir>")
        sys.exit(1)

    docs_dir = Path(sys.argv[1])

    if not docs_dir.exists():
        print(f"❌ Directory not found: {docs_dir}")
        sys.exit(1)

    # Find all markdown files recursively
    md_files = sorted(docs_dir.rglob('*.md'))

    if not md_files:
        print(f"❌ No markdown files found in: {docs_dir}")
        sys.exit(1)

    total_changes = 0
    for md_file in md_files:
        changes = process_file(md_file)
        if changes:
            total_changes += 1
            print(f"  Converted: {md_file.relative_to(docs_dir)}")

    print(f"\n✓ Converted headings in {total_changes}/{len(md_files)} files to sentence case")


if __name__ == '__main__':
    main()
