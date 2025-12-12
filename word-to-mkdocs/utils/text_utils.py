#!/usr/bin/env -S uv run python
"""
Shared text utilities for markdown conversion.

Provides sentence case conversion while preserving proper nouns.
"""

# Proper nouns to preserve (case-sensitive)
PROPER_NOUNS = {
    # Technologies & Platforms
    'Azure', 'DevOps', 'Git', 'GitHub', 'SQL', 'T-SQL', 'Microsoft', 'Visual Studio',
    'RESTful', 'API', 'APIs', 'JSON', 'XML', 'FHIR', 'HTTP', 'HTTPS', 'OAuth', 'JWT',
    'OWASP', 'IIS', '.NET', 'C#', 'Blazor', 'Python', 'PostgreSQL', 'GCP', 'MAUI',
    'Scrum', 'Agile', 'PowerShell', 'Windows', 'Linux', 'macOS', 'Docker', 'Kubernetes',

    # Microsoft Products
    'Excel', 'Word', 'Teams', 'SharePoint', 'Outlook', 'OneDrive',

    # Azure Services
    'Azure Boards', 'Azure Repos', 'Azure Pipelines', 'Azure Test Plans',
    'Azure Artifacts', 'Azure SQL', 'Active Directory',

    # Development Tools
    'NuGet', 'npm', 'Webpack', 'Babel', 'TypeScript', 'JavaScript', 'React', 'Vue',
    'Angular', 'Node.js', 'Express', 'ASP.NET', 'Entity Framework', 'Razor',

    # Standards & Protocols
    'SSL', 'TLS', 'TCP', 'IP', 'DNS', 'SMTP', 'FTP', 'SSH', 'SOAP', 'REST',
    'OpenAPI', 'Swagger', 'GraphQL',

    # Coding Concepts
    'SOLID', 'DRY', 'YAGNI', 'KISS', 'MVC', 'MVVM', 'ORM', 'CRUD', 'LINQ',
    'IoC', 'DI',

    # Organizations
    'CANISC', 'NHS', 'GDPR',

    # File formats
    'PDF', 'CSV', 'YAML', 'TOML', 'INI',
}

# Acronyms that should stay uppercase
ACRONYMS = {
    'API', 'APIs', 'SQL', 'T-SQL', 'HTTP', 'HTTPS', 'REST', 'RESTful', 'JSON', 'XML',
    'FHIR', 'OAuth', 'JWT', 'OWASP', 'IIS', 'GCP', 'MAUI', 'SOLID', 'DRY', 'YAGNI',
    'KISS', 'MVC', 'MVVM', 'ORM', 'CRUD', 'LINQ', 'IoC', 'DI', 'SSL', 'TLS', 'TCP',
    'IP', 'DNS', 'SMTP', 'FTP', 'SSH', 'SOAP', 'CANISC', 'NHS', 'GDPR', 'PDF', 'CSV',
    'YAML', 'TOML', 'INI', 'URL', 'URI', 'IDE', 'CI', 'CD', 'UDF',
}


def to_sentence_case(text: str) -> str:
    """
    Convert text to sentence case while preserving proper nouns.

    Examples:
        "FOLLOW OUR NAMING RULES" -> "Follow our naming rules"
        "USE AZURE DEVOPS" -> "Use Azure DevOps"
        "T-SQL CODING STANDARD" -> "T-SQL coding standard"

    Args:
        text: The text to convert

    Returns:
        The text converted to sentence case with proper nouns preserved
    """
    # Split into words
    words = text.split()

    if not words:
        return text

    result = []
    for i, word in enumerate(words):
        # Remove any trailing punctuation for matching
        word_clean = word.rstrip('.,;:!?')
        trailing_punct = word[len(word_clean):]

        # Check if this is a proper noun (case-insensitive match for the word itself)
        is_proper_noun = False
        preserved_word = None

        # Check for exact matches in PROPER_NOUNS
        for proper_noun in PROPER_NOUNS:
            if word_clean.upper() == proper_noun.upper():
                preserved_word = proper_noun
                is_proper_noun = True
                break

        if is_proper_noun:
            # Use the proper noun with correct casing
            result.append(preserved_word + trailing_punct)
        elif i == 0:
            # First word: capitalize first letter, lowercase rest
            result.append(word_clean.capitalize() + trailing_punct)
        else:
            # Other words: lowercase unless it's an acronym
            if word_clean.upper() in ACRONYMS:
                result.append(word_clean.upper() + trailing_punct)
            else:
                result.append(word_clean.lower() + trailing_punct)

    return ' '.join(result)
