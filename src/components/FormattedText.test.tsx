import { render, screen } from '@testing-library/react';
import { FormattedText } from './FormattedText';
import { describe, it, expect } from 'vitest';

describe('FormattedText', () => {
  it('renders plain text correctly', () => {
    render(<FormattedText text="Hello World" />);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });

  it('renders bold text', () => {
    render(<FormattedText text="Hello **Bold** World" />);
    const strong = screen.getByText('Bold');
    expect(strong.tagName).toBe('STRONG');
    expect(screen.getByText('Hello', { exact: false })).toBeInTheDocument();
    expect(screen.getByText('World', { exact: false })).toBeInTheDocument();
  });

  it('renders italic text', () => {
    render(<FormattedText text="Hello _Italic_ World" />);
    const em = screen.getByText('Italic');
    expect(em.tagName).toBe('EM');
  });

  it('renders nested formatting (bold inside italic)', () => {
    render(<FormattedText text="_Italic **Bold**_" />);
    const em = screen.getByText((_, element) => element?.tagName === 'EM');
    const strong = screen.getByText('Bold');

    expect(strong.tagName).toBe('STRONG');
    expect(em).toContainElement(strong);
  });

  it('renders nested formatting (italic inside bold)', () => {
    render(<FormattedText text="**Bold _Italic_**" />);
    const strong = screen.getByText((_, element) => element?.tagName === 'STRONG');
    const em = screen.getByText('Italic');

    expect(em.tagName).toBe('EM');
    expect(strong).toContainElement(em);
  });

  it('renders mixed formatting', () => {
    render(<FormattedText text="**Bold** and _Italic_" />);
    expect(screen.getByText('Bold').tagName).toBe('STRONG');
    expect(screen.getByText('Italic').tagName).toBe('EM');
    expect(screen.getByText('and')).toBeInTheDocument();
  });

  it('handles incomplete tags gracefully', () => {
    render(<FormattedText text="**Bold _Unclosed" />);
    // Should render "**Bold " then "_Unclosed" or similar depending on greedy match
    // Actually our parser looks for PAIRS.
    // **Bold _Unclosed
    // It sees ** but no closing **?
    // Wait, regex `\*\*(.*?)\*\*` finds pairs.
    // If no closing `**`, no match.
    // So it should render plain text.
    expect(screen.getByText('**Bold _Unclosed')).toBeInTheDocument();
  });
});
