#!/usr/bin/env -S uv run python
"""
Clean up Pandoc markdown artifacts and malformed links.

Fixes:
- Pandoc attribute syntax like {.underline}, {#id}, etc.
- Double square brackets [[ and ]] in links
- Broken URLs with spaces (e.g., "ht tps://", "https:/ /")
"""

import re
from pathlib import Path
import sys


def fix_broken_urls(text: str) -> str:
    """Fix URLs that have been broken across lines with spaces."""
    # Fix common URL breakage patterns
    # Pattern 1: "ht tps://" -> "https://"
    text = re.sub(r'ht\s+tps://', 'https://', text)

    # Pattern 2: "htt ps://" -> "https://"
    text = re.sub(r'htt\s+ps://', 'https://', text)

    # Pattern 3: "http ://" -> "http://"
    text = re.sub(r'http\s+://', 'http://', text)

    # Pattern 4: "https:/ /" -> "https://"
    text = re.sub(r'https:/\s+/', 'https://', text)

    # Pattern 5: "http:/ /" -> "http://"
    text = re.sub(r'http:/\s+/', 'http://', text)

    # Pattern 6: Remove spaces within URLs in markdown links
    # This is more aggressive - removes spaces between ]( and ) in markdown links
    def fix_link_url(match):
        link_text = match.group(1)
        url = match.group(2)
        # Remove spaces from the URL
        url_fixed = re.sub(r'\s+', '', url)
        return f'[{link_text}]({url_fixed})'

    # Match markdown links: [text](url)
    text = re.sub(r'\[([^\]]+)\]\(([^)]+)\)', fix_link_url, text)

    return text


def remove_pandoc_attributes(text: str) -> str:
    """Remove Pandoc attribute syntax like {.underline}, {#id}, {key=value}."""
    # Remove attribute blocks that follow text in square brackets
    # Pattern: ]{.class} or ] {#id} or ]{key=value} (with optional space before {)
    text = re.sub(r'\]\s*\{[^}]+\}', ']', text)

    # Also remove standalone attribute blocks (less common but possible)
    # Pattern: {.class} or {#id} or {key=value}
    text = re.sub(r'\{[.#][^}]+\}', '', text)
    text = re.sub(r'\{[a-zA-Z_-]+=[^}]+\}', '', text)

    return text


def fix_double_brackets(text: str) -> str:
    """Fix double square brackets and corrupted bracket patterns in markdown links."""
    # Fix opening double brackets: [[ -> [
    text = re.sub(r'\[\[', '[', text)

    # Fix closing double brackets: ]] -> ]
    text = re.sub(r'\]\]', ']', text)

    # Fix corrupted patterns from Pandoc attribute removal:
    # Pattern 1: [text] ](url) -> [text](url) - extra ] and space before (
    text = re.sub(r'\]\s*\]\s*\(', r'](', text)

    # Pattern 2: [text] (url) -> [text](url) - space between ] and (
    text = re.sub(r'\]\s+\(', r'](', text)

    return text


def clean_markdown_content(text: str) -> str:
    """Apply all markdown cleanup operations."""
    # Order matters: fix URLs first, then attributes, then brackets
    text = fix_broken_urls(text)
    text = remove_pandoc_attributes(text)
    text = fix_double_brackets(text)

    return text


def process_file(input_path: Path, output_path: Path):
    """Process a single markdown file."""
    content = input_path.read_text(encoding='utf-8')
    cleaned = clean_markdown_content(content)
    output_path.write_text(cleaned, encoding='utf-8')


def main():
    """Process all markdown files in a directory."""
    if len(sys.argv) < 3:
        print("Usage: cleanup_markdown.py <input_dir> <output_dir>")
        sys.exit(1)

    input_dir = Path(sys.argv[1])
    output_dir = Path(sys.argv[2])

    if not input_dir.exists():
        print(f"❌ Input directory not found: {input_dir}")
        sys.exit(1)

    # Create output directory
    output_dir.mkdir(parents=True, exist_ok=True)

    # Process all markdown files
    md_files = sorted(input_dir.glob('*.md'))

    for md_file in md_files:
        output_file = output_dir / md_file.name
        process_file(md_file, output_file)
        print(f"  Cleaned: {md_file.name}")

    print(f"\n✓ Cleaned {len(md_files)} files")
    print(f"✓ Output in: {output_dir}")


if __name__ == '__main__':
    main()
