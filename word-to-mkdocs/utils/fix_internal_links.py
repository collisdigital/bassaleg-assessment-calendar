#!/usr/bin/env -S uv run python
"""
Fix internal reference links that span across split markdown files.

When documents were split, internal links like [text](#heading) now point
to headings in other files. This script:
1. Builds a map of heading slugs to file paths
2. Updates internal links to point to the correct files
"""

import re
from pathlib import Path
from typing import Dict
import sys

# Ensure UTF-8 encoding for stdout
sys.stdout.reconfigure(encoding='utf-8')

def slugify_heading(text: str) -> str:
    """Convert heading text to anchor slug (matching mkdocs behavior)."""
    # Convert to lowercase
    text = text.lower()
    # Remove special characters, keep alphanumeric, spaces, and hyphens
    text = re.sub(r'[^\w\s-]', '', text)
    # Replace spaces with hyphens
    text = re.sub(r'[-\s]+', '-', text)
    # Remove leading/trailing hyphens
    return text.strip('-')


def extract_headings_from_file(file_path: Path) -> list:
    """Extract all headings from a markdown file."""
    content = file_path.read_text(encoding='utf-8')
    headings = []

    # Find all markdown headings
    for match in re.finditer(r'^(#{1,6})\s+(.+)$', content, re.MULTILINE):
        heading_text = match.group(2).strip()
        slug = slugify_heading(heading_text)
        headings.append((heading_text, slug))

    return headings


def build_heading_map(docs_dir: Path) -> Dict[str, str]:
    """
    Build a map of heading slugs to relative file paths.

    Returns:
        dict: {slug: relative_file_path}
    """
    heading_map = {}

    # Process all markdown files recursively
    for md_file in docs_dir.rglob('*.md'):
        if md_file.name == 'index.md':
            continue

        # Get relative path from docs dir
        rel_path = md_file.relative_to(docs_dir)

        # Extract headings from file
        headings = extract_headings_from_file(md_file)

        for heading_text, slug in headings:
            # Store the first occurrence (in case of duplicates)
            if slug not in heading_map:
                heading_map[slug] = str(rel_path)

    return heading_map


def fix_internal_links_in_file(file_path: Path, heading_map: Dict[str, str], docs_dir: Path) -> int:
    """
    Fix internal reference links in a markdown file.

    Returns:
        int: Number of links fixed
    """
    content = file_path.read_text(encoding='utf-8')
    original_content = content

    # Get the current file's directory relative to docs
    rel_path = file_path.relative_to(docs_dir)
    current_dir = rel_path.parent

    # Pattern to match internal links: [text](#anchor)
    def replace_link(match):
        link_text = match.group(1)
        anchor = match.group(2)

        # Check if this anchor exists in our heading map
        if anchor in heading_map:
            target_file = heading_map[anchor]
            target_path = Path(target_file)

            # If the target is in the same directory, use just filename
            # Otherwise, use relative path
            if target_path.parent == current_dir:
                new_link = f'[{link_text}]({target_path.name})'
            else:
                # Calculate relative path from current file to target
                # For simplicity, if in different sections, use absolute path from docs root
                new_link = f'[{link_text}](../{target_file})'

            return new_link
        else:
            # Keep original if we can't find the target
            return match.group(0)

    # Replace internal links
    content = re.sub(r'\[([^\]]+)\]\(#([a-z0-9-]+)\)', replace_link, content)

    # Count changes
    changes = 0
    if content != original_content:
        file_path.write_text(content, encoding='utf-8')
        changes = 1

    return changes


def main():
    """Fix internal reference links across all markdown files."""
    docs_dir = Path('docs')

    if not docs_dir.exists():
        print(f"❌ Docs directory not found: {docs_dir}")
        sys.exit(1)

    print("Building heading map...")
    heading_map = build_heading_map(docs_dir)
    print(f"  Found {len(heading_map)} unique headings")

    print("\nFixing internal links...")
    total_files_changed = 0

    for md_file in sorted(docs_dir.rglob('*.md')):
        if md_file.name == 'index.md':
            continue

        changes = fix_internal_links_in_file(md_file, heading_map, docs_dir)
        if changes:
            total_files_changed += 1
            rel_path = md_file.relative_to(docs_dir)
            print(f"  Fixed: {rel_path}")

    print(f"\n✓ Fixed internal links in {total_files_changed} files")


if __name__ == '__main__':
    main()
