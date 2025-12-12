#!/usr/bin/env -S uv run python
"""
Complete end-to-end Word to mkdocs conversion workflow.
Keeps raw/ pristine, uses intermediate folders for each step.
"""

import subprocess
import shutil
from pathlib import Path
import sys
import io

# Ensure UTF-8 encoding for stdout on Windows
sys.stdout.reconfigure(encoding='utf-8')

def run_command(cmd, description):
    """Run a command and report status."""
    print(f"\n{'='*80}")
    print(f"Step: {description}")
    print(f"{'='*80}")

    result = subprocess.run(cmd, shell=True, capture_output=True, text=True)

    if result.returncode != 0:
        print(f"❌ Error: {result.stderr}")
        return False

    if result.stdout:
        print(result.stdout)

    print(f"✓ {description} completed")
    return True


def clean_workspace():
    """Clean all generated folders."""
    print("\n" + "="*80)
    print("Cleaning workspace...")
    print("="*80)

    folders_to_clean = [
        'raw',
        'raw-step1-simple-tables',
        'raw-step2-grid-tables',
        'raw-step3-admonitions',
        'docs',
        'raw-tables-converted',
        'raw-clean'
    ]

    for folder in folders_to_clean:
        path = Path(folder)
        if path.exists():
            shutil.rmtree(path)
            print(f"  Removed {folder}/")

    # Recreate necessary folders
    Path('raw').mkdir(exist_ok=True)
    print("\n✓ Workspace cleaned")


def step1_generate_raw_from_docx():
    """Step 1: Generate raw markdown from Word documents using Pandoc."""
    print("\n" + "="*80)
    print("STEP 1: Generate Raw Markdown from .docx")
    print("="*80)

    docx_files = list(Path('import').glob('*.docx'))

    if not docx_files:
        print("❌ No .docx files found in import/")
        return False

    success_count = 0
    for docx_file in sorted(docx_files):
        filename = docx_file.stem
        output_file = Path('raw') / f'{filename}.md'

        print(f"\nConverting {filename}...")
        result = subprocess.run(
            ['pandoc', str(docx_file), '-o', str(output_file), '--extract-media=.'],
            capture_output=True,
            text=True
        )

        if result.returncode == 0:
            size = output_file.stat().st_size
            print(f"  ✓ {size:,} bytes")
            success_count += 1
        else:
            print(f"  ❌ Error: {result.stderr[:200]}")

    print(f"\n✓ Step 1 Complete: {success_count}/{len(docx_files)} files converted")
    return success_count == len(docx_files)


def step2_convert_simple_tables():
    """Step 2: Convert Pandoc simple tables to mkdocs format."""
    print("\n" + "="*80)
    print("STEP 2: Convert Simple Pandoc Tables")
    print("="*80)

    Path('raw-step1-simple-tables').mkdir(exist_ok=True)

    result = subprocess.run(
        ['uv', 'run', 'python', 'utils/convert_simple_tables.py'],
        capture_output=True,
        text=True
    )

    print(result.stdout)
    if result.returncode != 0:
        print(f"❌ Error: {result.stderr}")
        return False

    print("\n✓ Step 2 Complete: Simple tables converted")
    return True


def step3_convert_grid_tables():
    """Step 3: Convert Pandoc grid tables to mkdocs format."""
    print("\n" + "="*80)
    print("STEP 3: Convert Grid Tables")
    print("="*80)

    Path('raw-step2-grid-tables').mkdir(exist_ok=True)

    result = subprocess.run(
        ['uv', 'run', 'python', 'utils/convert_grid_tables_to_mkdocs.py'],
        capture_output=True,
        text=True
    )

    print(result.stdout)
    if result.returncode != 0:
        print(f"❌ Error: {result.stderr}")
        return False

    print("\n✓ Step 3 Complete: Grid tables converted")
    return True


def step4_convert_to_admonitions():
    """Step 4: Convert callout tables to admonitions."""
    print("\n" + "="*80)
    print("STEP 4: Convert Callout Tables to Admonitions")
    print("="*80)

    Path('raw-step3-admonitions').mkdir(exist_ok=True)

    result = subprocess.run(
        ['uv', 'run', 'python', 'utils/table_to_admonition_v4.py'],
        capture_output=True,
        text=True
    )

    print(result.stdout)
    if result.returncode != 0:
        print(f"❌ Error: {result.stderr}")
        return False

    print("\n✓ Step 4 Complete: Admonitions created")
    return True


def step5_split_documents():
    """Step 5: Split documents into individual files."""
    print("\n" + "="*80)
    print("STEP 5: Split Documents")
    print("="*80)

    # Clear docs folder
    if Path('docs').exists():
        shutil.rmtree('docs')
    Path('docs').mkdir()

    result = subprocess.run(
        ['uv', 'run', 'python', 'utils/split_all_documents.py'],
        capture_output=True,
        text=True
    )

    print(result.stdout)
    if result.returncode != 0:
        print(f"❌ Error: {result.stderr}")
        return False

    print("\n✓ Step 5 Complete: Documents split")
    return True


def step6_fix_internal_links():
    """Step 6: Fix internal reference links."""
    print("\n" + "="*80)
    print("STEP 6: Fix Internal Links")
    print("="*80)

    result = subprocess.run(
        ['uv', 'run', 'python', 'utils/fix_internal_links.py'],
        capture_output=True,
        text=True
    )

    if result.returncode != 0:
        print(f"❌ Error: {result.stderr}")
        return False

    # Print the output from the script
    if result.stdout:
        print(result.stdout.strip())

    print("\n✓ Step 6 Complete: Internal links fixed")
    return True


def step7_convert_headings():
    """Step 7: Convert headings to sentence case."""
    print("\n" + "="*80)
    print("STEP 7: Convert Headings to Sentence Case")
    print("="*80)

    result = subprocess.run(
        ['uv', 'run', 'python', 'utils/convert_headings_to_sentence_case.py', 'docs'],
        capture_output=True,
        text=True
    )

    if result.returncode != 0:
        print(f"❌ Error: {result.stderr}")
        return False

    # Print the output from the script
    if result.stdout:
        print(result.stdout.strip())

    print("\n✓ Step 7 Complete: Headings converted to sentence case")
    return True


def step8_generate_navigation():
    """Step 8: Generate mkdocs.yml navigation."""
    print("\n" + "="*80)
    print("STEP 8: Generate Navigation")
    print("="*80)

    result = subprocess.run(
        ['uv', 'run', 'python', 'utils/generate_nav.py'],
        capture_output=True,
        text=True
    )

    if result.returncode != 0:
        print(f"❌ Error: {result.stderr}")
        return False

    # Print the output from generate_nav.py
    if result.stdout:
        print(result.stdout.strip())
    return True


def step9_build_site():
    """Step 9: Build mkdocs site."""
    print("\n" + "="*80)
    print("STEP 9: Build Site")
    print("="*80)

    result = subprocess.run(
        ['uv', 'run', 'mkdocs', 'build'],
        capture_output=True,
        text=True
    )

    # Show last 10 lines of output
    output_lines = result.stdout.split('\n')
    for line in output_lines[-10:]:
        if line.strip():
            print(line)

    if result.returncode != 0:
        print(f"❌ Build failed: {result.stderr}")
        return False

    print("\n✓ Step 9 Complete: Site built successfully")
    return True


def main():
    """Run complete conversion workflow."""
    print("\n" + "="*80)
    print("WORD TO MKDOCS COMPLETE CONVERSION WORKFLOW")
    print("="*80)

    # Optionally clean workspace
    if '--clean' in sys.argv:
        clean_workspace()

    # Run all steps
    steps = [
        (step1_generate_raw_from_docx, "Generate raw markdown from .docx"),
        (step2_convert_simple_tables, "Convert simple tables"),
        (step3_convert_grid_tables, "Convert grid tables"),
        (step4_convert_to_admonitions, "Convert to admonitions"),
        (step5_split_documents, "Split documents"),
        (step6_fix_internal_links, "Fix internal links"),
        (step7_convert_headings, "Convert headings to sentence case"),
        (step8_generate_navigation, "Generate navigation"),
        (step9_build_site, "Build site"),
    ]

    for i, (step_func, desc) in enumerate(steps, 1):
        if not step_func():
            print(f"\n❌ FAILED at Step {i}: {desc}")
            return False

    # Summary
    print("\n" + "="*80)
    print("✓ CONVERSION COMPLETE")
    print("="*80)

    # Count files
    md_files = list(Path('docs').rglob('*.md'))
    print(f"\n📊 Statistics:")
    print(f"  - Markdown files created: {len(md_files)}")
    print(f"  - Document sections: {len(list(Path('docs').iterdir())) - 1}")  # -1 for index.md

    print(f"\n🚀 Next steps:")
    print(f"  - Preview: mkdocs serve")
    print(f"  - Deploy: mkdocs gh-deploy")

    return True


if __name__ == '__main__':
    success = main()
    sys.exit(0 if success else 1)
