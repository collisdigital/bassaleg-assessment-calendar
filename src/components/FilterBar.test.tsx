import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FilterBar } from './FilterBar';
import { YearData } from '../types';

describe('FilterBar', () => {
  const mockProps = {
    selectedSubjects: [],
    setSelectedSubjects: vi.fn(),
    selectedTypes: [],
    setSelectedTypes: vi.fn(),
    clearAllFilters: vi.fn(),
    allSubjects: ['Maths', 'English', 'Science'],
    allTypes: ['Exam', 'Mock'],
    typeColors: { 'Exam': '#FF0000', 'Mock': '#00FF00' },
    schedule: [],
    filename: '',
    sourceUrl: '',
    generatedAt: '2023-01-01T00:00:00.000Z',
    yearData: { types: {}, schedule: [] } as unknown as YearData
  };

  it('renders all filter options', () => {
    render(<FilterBar {...mockProps} />);

    expect(screen.getByText('Maths')).toBeInTheDocument();
    expect(screen.getByText('English')).toBeInTheDocument();
    expect(screen.getByText('Exam')).toBeInTheDocument();
    expect(screen.getByText('Mock')).toBeInTheDocument();
  });

  it('toggles subject selection', async () => {
    const user = userEvent.setup();
    render(<FilterBar {...mockProps} />);

    const mathsBtn = screen.getByRole('button', { name: 'Maths' });
    await user.click(mathsBtn);

    expect(mockProps.setSelectedSubjects).toHaveBeenCalledWith(['Maths']);
  });

  it('deselects subject if already selected', async () => {
    const user = userEvent.setup();
    const props = { ...mockProps, selectedSubjects: ['Maths'] };
    render(<FilterBar {...props} />);

    const mathsBtn = screen.getByRole('button', { name: 'Maths' });
    await user.click(mathsBtn);

    expect(mockProps.setSelectedSubjects).toHaveBeenCalledWith([]);
  });

  it('toggles type selection', async () => {
    const user = userEvent.setup();
    render(<FilterBar {...mockProps} />);

    const examBtn = screen.getByRole('button', { name: 'Exam' });
    await user.click(examBtn);

    expect(mockProps.setSelectedTypes).toHaveBeenCalledWith(['Exam']);
  });

  it('shows clear all button when filters are active', () => {
    const props = { ...mockProps, selectedSubjects: ['Maths'] };
    render(<FilterBar {...props} />);

    expect(screen.getByText('Clear All')).toBeInTheDocument();
  });

  it('clears all filters when clear all is clicked', async () => {
    const user = userEvent.setup();
    const props = { ...mockProps, selectedSubjects: ['Maths'] };
    render(<FilterBar {...props} />);

    const clearBtn = screen.getByText('Clear All');
    await user.click(clearBtn);

    expect(mockProps.clearAllFilters).toHaveBeenCalled();
  });
});
