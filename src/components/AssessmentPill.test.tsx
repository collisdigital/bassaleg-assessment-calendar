import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AssessmentPill } from './AssessmentPill';

describe('AssessmentPill', () => {
  it('renders correctly with supplied color', () => {
    const assessment = {
      subject: 'Math',
      type: 'Exam',
      label: 'Math Exam',
    };
    const color = '#FF0000';
    render(<AssessmentPill assessment={assessment} color={color} />);
    const pill = screen.getByRole('button');
    expect(pill).toHaveStyle({ backgroundColor: '#FF0000' });
  });
});
