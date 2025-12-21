import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { YearSelector } from './YearSelector';

describe('YearSelector', () => {
  it('renders all configured years', () => {
    render(
      <MemoryRouter>
        <YearSelector />
      </MemoryRouter>
    );

    expect(screen.getByText('Year 10')).toBeInTheDocument();
    expect(screen.getByText('Year 11')).toBeInTheDocument();
  });
});
