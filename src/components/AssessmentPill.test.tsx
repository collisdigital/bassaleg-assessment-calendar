import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AssessmentPill } from './AssessmentPill';

describe('AssessmentPill', () => {
  it('renders correctly with ARGB 8-char color', () => {
    const assessment = {
      subject: 'Math',
      type: 'Exam',
      label: 'Math Exam',
      color: 'FFFF0000' // Red
    };
    render(<AssessmentPill assessment={assessment} />);
    const pill = screen.getByRole('button');
    // Expect #FF0000
    expect(pill).toHaveStyle({ backgroundColor: '#FF0000' });
  });

  it('renders correctly with Hex 7-char color (including hash)', () => {
    const assessment = {
      subject: 'Math',
      type: 'Exam',
      label: 'Math Exam',
      color: '#FF0000'
    };
    render(<AssessmentPill assessment={assessment} />);
    const pill = screen.getByRole('button');
    // We expect it to be #FF0000.
    expect(pill).toHaveStyle({ backgroundColor: '#FF0000' });
  });
});
