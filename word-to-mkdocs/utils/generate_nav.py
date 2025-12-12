#!/usr/bin/env -S uv run python
"""
Generate mkdocs.yml navigation from docs/ folder structure.
"""

from pathlib import Path
import yaml
import json
import sys

# Import shared sentence case conversion logic
sys.path.insert(0, str(Path(__file__).parent))
from text_utils import to_sentence_case

# Ensure UTF-8 encoding for stdout
sys.stdout.reconfigure(encoding='utf-8')

def title_from_filename(filename):
    """Convert filename to title using sentence case."""
    # Remove .md extension
    title = filename.replace('.md', '')
    # Replace hyphens with spaces
    title = title.replace('-', ' ')
    # Convert to sentence case with proper noun preservation
    title = to_sentence_case(title)
    return title


def load_nav_order(folder: Path) -> dict:
    """Load navigation order from .nav-order.json if it exists."""
    order_file = folder / '.nav-order.json'
    if order_file.exists():
        with open(order_file, 'r', encoding='utf-8') as f:
            return json.load(f)
    return {}


def generate_nav():
    """Generate navigation structure."""
    docs_dir = Path('docs')
    nav = [{'Home': 'index.md'}]

    # Define document order and titles
    doc_order = [
        ('using-source-control', 'Using Source Control'),
        ('t-sql-coding-standard', 'T-SQL Coding Standard'),
        ('restful-api-standards', 'RESTful API Standards'),
        ('organising-your-solution', 'Organising Your Solution'),
        ('general-coding-standards', 'General Coding Standards'),
        ('azure-devops-handbook', 'Azure DevOps Handbook'),
        ('software-development-handbook', 'Software Development Handbook'),
        ('software-subscriptions', 'Software Subscriptions'),
        ('testing-lost-updates', 'Testing for Lost Updates'),
        ('test-summary-report', 'Test Summary Report'),
        ('coding-standard-template', 'Coding Standard Template'),
    ]

    for folder_name, section_title in doc_order:
        folder = docs_dir / folder_name
        if not folder.exists():
            continue

        # Load navigation order metadata
        nav_order = load_nav_order(folder)

        # Get all markdown files in folder
        md_files = list(folder.glob('*.md'))

        if not md_files:
            continue

        # Sort files by order metadata if available, otherwise by filename
        if nav_order:
            md_files.sort(key=lambda p: nav_order.get(p.name, 999))
        else:
            md_files.sort(key=lambda p: p.name)

        # Create section
        section = {section_title: []}

        for md_file in md_files:
            rel_path = f'{folder_name}/{md_file.name}'
            file_title = title_from_filename(md_file.stem)
            section[section_title].append({file_title: rel_path})

        nav.append(section)

    return nav


def main():
    nav = generate_nav()

    # Write to docs/.nav.yml file
    output_file = Path('docs/.nav.yml')

    with open(output_file, 'w', encoding='utf-8') as f:
        f.write("nav:\n")
        yaml_content = yaml.dump(nav, default_flow_style=False, sort_keys=False, indent=2)
        # Indent all lines by 2 spaces for proper YAML structure
        indented_content = '\n'.join('  ' + line if line else line for line in yaml_content.split('\n'))
        f.write(indented_content.rstrip() + '\n')

    print(f"✓ Navigation written to {output_file}")

if __name__ == '__main__':
    main()
