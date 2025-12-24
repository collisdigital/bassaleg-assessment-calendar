import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TimelineView } from './TimelineView';
import { createMockDay, createMockAssessment } from '../test/test-utils';
import { DayInfo } from '../types';

describe('TimelineView', () => {
  const mockOnAssessmentClick = vi.fn();
  const mockScrollIntoView = vi.fn();
  const mockTypeColors = { Exam: '#FF0000', Mock: '#00FF00' };

  beforeEach(() => {
    Element.prototype.scrollIntoView = mockScrollIntoView;
    mockOnAssessmentClick.mockClear();
    mockScrollIntoView.mockClear();

    vi.useFakeTimers({ toFake: ['Date'] });
    vi.setSystemTime(new Date('2024-01-15T12:00:00Z'));
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders nothing if schedule is empty', () => {
    render(
      <TimelineView
        schedule={[]}
        typeColors={mockTypeColors}
        onAssessmentClick={mockOnAssessmentClick}
      />
    );

    expect(screen.getByText(/No assessments found/i)).toBeInTheDocument();
  });

  it('renders days with assessments', () => {
    const schedule: DayInfo[] = [
      createMockDay('2024-01-15', [createMockAssessment('Maths', 'Exam')]),
      createMockDay('2024-01-16', [createMockAssessment('English', 'Mock')])
    ];

    render(
      <TimelineView
        schedule={schedule}
        typeColors={mockTypeColors}
        onAssessmentClick={mockOnAssessmentClick}
      />
    );

    expect(screen.getByText(/Mon, Jan 15/i)).toBeInTheDocument();
    expect(screen.getByText('Maths')).toBeInTheDocument();
    expect(screen.getByText(/Tue, Jan 16/i)).toBeInTheDocument();
    expect(screen.getByText('English')).toBeInTheDocument();
  });

  it('highlights today correctly', () => {
    const todayStr = '2024-01-15';
    const schedule = [createMockDay(todayStr, [createMockAssessment('History', 'Exam')])];

    render(
      <TimelineView
        schedule={schedule}
        typeColors={mockTypeColors}
        onAssessmentClick={mockOnAssessmentClick}
      />
    );

    const dayDate = screen.getByText(/Mon, Jan 15/i);
    const dayContainer = dayDate.closest('div.flex.flex-col.md\\:flex-row');

    expect(dayContainer).toHaveClass('bg-blue-50');
    expect(dayContainer).toHaveClass('border-blue-200');
  });

  it('dims past events', () => {
    const pastStr = '2024-01-10';
    const schedule = [createMockDay(pastStr, [createMockAssessment('Biology', 'Exam')])];

    render(
      <TimelineView
        schedule={schedule}
        typeColors={mockTypeColors}
        onAssessmentClick={mockOnAssessmentClick}
      />
    );

    const dayDate = screen.getByText(/Wed, Jan 10/i);
    const dayContainer = dayDate.closest('div.flex.flex-col.md\\:flex-row');

    expect(dayContainer).toHaveClass('opacity-60');
    expect(dayContainer).toHaveClass('bg-gray-100');
  });

  it('handles click on assessment', async () => {
    // Configure userEvent
    const user = userEvent.setup();

    const assessment = createMockAssessment('Physics', 'Exam');
    const schedule = [createMockDay('2024-01-20', [assessment])];

    render(
      <TimelineView
        schedule={schedule}
        typeColors={mockTypeColors}
        onAssessmentClick={mockOnAssessmentClick}
      />
    );

    const button = screen.getByRole('button', { name: /Physics/ });
    await user.click(button);

    expect(mockOnAssessmentClick).toHaveBeenCalledTimes(1);
    expect(mockOnAssessmentClick).toHaveBeenCalledWith(assessment, '2024-01-20');
  });

  it('scrolls to the first future or current day', () => {
    const schedule: DayInfo[] = [
      createMockDay('2024-01-10', [createMockAssessment('Past', 'Exam')]),
      createMockDay('2024-01-15', [createMockAssessment('Today', 'Exam')]),
      createMockDay('2024-01-20', [createMockAssessment('Future', 'Exam')])
    ];

    render(
      <TimelineView
        schedule={schedule}
        typeColors={mockTypeColors}
        onAssessmentClick={mockOnAssessmentClick}
      />
    );

    expect(mockScrollIntoView).toHaveBeenCalled();
  });

  it('skips empty days unless it is today', () => {
      const schedule = [
          createMockDay('2024-01-14', []), // Past empty
          createMockDay('2024-01-15', []), // Today empty
          createMockDay('2024-01-16', [])  // Future empty
      ];

      render(<TimelineView schedule={schedule} typeColors={mockTypeColors} onAssessmentClick={mockOnAssessmentClick} />);

      expect(screen.queryByText(/Jan 14/)).not.toBeInTheDocument();
      expect(screen.getByText(/Mon, Jan 15/i)).toBeInTheDocument();
      expect(screen.queryByText(/Jan 16/)).not.toBeInTheDocument();
  });
});
