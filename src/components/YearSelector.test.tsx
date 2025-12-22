import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { YearSelector } from './YearSelector';

// Mock the data to ensure we test for the expected years (10, 11, 12)
vi.mock('../data.json', () => ({
  default: {
    years: {
      'year-10': { name: 'Year 10' },
      'year-11': { name: 'Year 11' },
      'year-12': { name: 'Year 12' }
    }
  }
}));

describe('YearSelector', () => {
  it('renders all configured years', () => {
    render(
      <MemoryRouter>
        <YearSelector />
      </MemoryRouter>
    );

    expect(screen.getByText('Year 10')).toBeInTheDocument();
    expect(screen.getByText('Year 11')).toBeInTheDocument();
    expect(screen.getByText('Year 12')).toBeInTheDocument();
  });
});
