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

        const boldMatch = /\*\*(.*?)\*\*/.exec(remaining);
        const italicMatch = /_(.*?)_/.exec(remaining);

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

export function FormattedText({ text, className }: FormattedTextProps) {
  const parts = useMemo(() => parseMarkdown(text), [text]);
  return <span className={className}>{parts}</span>;
}
