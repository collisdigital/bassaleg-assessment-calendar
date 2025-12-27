import { useMemo, ReactNode } from 'react';

interface FormattedTextProps {
  text: string;
  className?: string;
}

// Recursive parser function
function parseMarkdown(input: string): ReactNode[] {
    const nodes: ReactNode[] = [];
    let remaining = input;
    let keyCounter = 0;

    while (remaining) {
        // Find next instance of ** or _
        // We look for the closing tag as well to ensure it's a valid pair.
        // We want to find the FIRST occurrence that has a valid closing tag.

        const boldMatch = /\*\*(.*?)\*\*/s.exec(remaining);
        const italicMatch = /_(.*?)_/s.exec(remaining);

        let bestMatch = null;
        let type = '';

        if (boldMatch && italicMatch) {
            if (boldMatch.index < italicMatch.index) {
                bestMatch = boldMatch;
                type = 'bold';
            } else {
                bestMatch = italicMatch;
                type = 'italic';
            }
        } else if (boldMatch) {
            bestMatch = boldMatch;
            type = 'bold';
        } else if (italicMatch) {
            bestMatch = italicMatch;
            type = 'italic';
        }

        if (bestMatch?.index !== undefined) {
            // Text before match
            if (bestMatch.index > 0) {
                nodes.push(remaining.slice(0, bestMatch.index));
            }

            // The matched content (recursively parsed)
            const content = bestMatch[1];
            const parsedContent = parseMarkdown(content);

            if (type === 'bold') {
                nodes.push(<strong key={`b-${keyCounter++}`}>{parsedContent}</strong>);
            } else {
                nodes.push(<em key={`i-${keyCounter++}`}>{parsedContent}</em>);
            }

            // Advance
            remaining = remaining.slice(bestMatch.index + bestMatch[0].length);
        } else {
            // No more formatting
            nodes.push(remaining);
            break;
        }
    }
    return nodes;
}

// Helper to strip markdown for plain text display
export function stripMarkdown(input: string): string {
  // Replace bold and italic markers with their content.
  // The 's' flag is used to handle multiline content, same as in the parser.
  return input
    .replace(/\*\*(.*?)\*\*/sg, '$1')
    .replace(/_(.*?)_/sg, '$1');
}

export function FormattedText({ text, className }: FormattedTextProps) {
  const parts = useMemo(() => parseMarkdown(text), [text]);
  return <span className={className}>{parts}</span>;
}
