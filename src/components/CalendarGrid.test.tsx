import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CalendarGrid } from './CalendarGrid';
import { createMockDay, createMockAssessment } from '../test/test-utils';

describe('CalendarGrid', () => {
  const mockOnAssessmentClick = vi.fn();
  const mockTypeColors = { Exam: '#FF0000' };
  // 2024-02-14 is a Wednesday.
  const initialDate = new Date('2024-02-14T12:00:00Z');
  // We need a specific month object for props
  const currentMonth = new Date(2024, 1, 1); // February 2024

  beforeEach(() => {
    mockOnAssessmentClick.mockClear();
    vi.useFakeTimers({ toFake: ['Date'] });
    vi.setSystemTime(initialDate);
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders correct days for the month (7-day view)', () => {
    render(
      <CalendarGrid
        schedule={[]}
        viewMode="month-7day"
        currentMonth={currentMonth}
        typeColors={mockTypeColors}
        onAssessmentClick={mockOnAssessmentClick}
      />
    );

    expect(screen.getByText('Mon')).toBeInTheDocument();
    expect(screen.getByText('Sun')).toBeInTheDocument();
  });

  it('renders assessments on correct days', () => {
    // Feb 14 2024 is Wed.
    const schedule = [
      createMockDay('2024-02-14', [createMockAssessment('Valentine Math', 'Exam')])
    ];

    render(
      <CalendarGrid
        schedule={schedule}
        viewMode="month-7day"
        currentMonth={currentMonth}
        typeColors={mockTypeColors}
        onAssessmentClick={mockOnAssessmentClick}
      />
    );

    expect(screen.getAllByText(/Valentine Math/).length).toBeGreaterThan(0);
  });

  it('handles 5-day view (hides weekends)', () => {
    render(
      <CalendarGrid
        schedule={[]}
        viewMode="month-5day"
        currentMonth={currentMonth}
        typeColors={mockTypeColors}
        onAssessmentClick={mockOnAssessmentClick}
      />
    );

    expect(screen.getByText('Mon')).toBeInTheDocument();
    expect(screen.getByText('Fri')).toBeInTheDocument();
    expect(screen.queryByText('Sat')).not.toBeInTheDocument();
    expect(screen.queryByText('Sun')).not.toBeInTheDocument();
  });

  it('highlights today', () => {
    render(
      <CalendarGrid
        schedule={[]}
        viewMode="month-7day"
        currentMonth={currentMonth}
        typeColors={mockTypeColors}
        onAssessmentClick={mockOnAssessmentClick}
      />
    );

    const todayHighlight = screen.getByText('14', { selector: '.bg-blue-600.text-white' });
    expect(todayHighlight).toBeInTheDocument();
  });

  it('triggers onAssessmentClick when pill is clicked', async () => {
      const user = userEvent.setup();
      const assessment = createMockAssessment('Physics', 'Exam');
      const schedule = [createMockDay('2024-02-14', [assessment])];

      render(
        <CalendarGrid
            schedule={schedule}
            viewMode="month-7day"
            currentMonth={currentMonth}
            typeColors={mockTypeColors}
            onAssessmentClick={mockOnAssessmentClick}
        />
      );

      const button = screen.getByRole('button', { name: /Physics/ });
      await user.click(button);

      expect(mockOnAssessmentClick).toHaveBeenCalledWith(assessment, '2024-02-14');
  });
});
