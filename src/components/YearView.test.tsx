/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { YearView } from './YearView';
import * as useDataHook from '../hooks/useData';
import { createMockDay, createMockAssessment } from '../test/test-utils';

// Mock scrollIntoView
const mockScrollIntoView = vi.fn();
Element.prototype.scrollIntoView = mockScrollIntoView;

describe('YearView', () => {
  // Mock useData hook
  const mockUseData = vi.spyOn(useDataHook, 'useData');

  const defaultMockData = {
      schedule: [
          createMockDay('2024-02-14', [createMockAssessment('Maths', 'Exam')])
      ],
      allSubjects: ['Maths', 'English'],
      allTypes: ['Exam', 'Mock'],
      selectedSubjects: [] as string[],
      setSelectedSubjects: vi.fn(),
      selectedTypes: [] as string[],
      setSelectedTypes: vi.fn(),
      typeColors: { 'Exam': '#FF0000', 'Mock': '#00FF00' },
      filename: 'Test Calendar',
      sourceUrl: 'http://test.com',
      generatedAt: '2024-02-13T12:00:00Z', // Yesterday relative to 2024-02-14
      yearData: { types: {}, schedule: [] } // Required for the check in YearView
  };

  const originalInnerWidth = window.innerWidth;

  beforeEach(() => {
    mockUseData.mockReturnValue(defaultMockData as any);
    mockScrollIntoView.mockClear();
    vi.clearAllMocks();

    // Set system time to match the mock day so it's visible in default view (current month)
    vi.useFakeTimers({ toFake: ['Date'] });
    vi.setSystemTime(new Date('2024-02-14T12:00:00Z'));

    // Reset width
    window.innerWidth = 1024;
  });

  afterEach(() => {
      vi.useRealTimers();
      window.innerWidth = originalInnerWidth;
  });

  const renderYearView = () => render(
      <MemoryRouter initialEntries={['/year-10']}>
          <Routes>
              <Route path="/:yearId" element={<YearView />} />
          </Routes>
      </MemoryRouter>
  );

  it('renders with correct title', () => {
    renderYearView();
    expect(screen.getByRole('heading', { name: 'Test Calendar' })).toBeInTheDocument();
    expect(screen.getByText('2025-2026 Academic Year')).toBeInTheDocument();
  });

  it('renders last updated text in footer', () => {
    renderYearView();
    // Since generatedAt is yesterday relative to system time
    expect(screen.getByText('(last updated yesterday)', { exact: false })).toBeInTheDocument();
  });

  it('switches between Timeline and Calendar views', async () => {
    const user = userEvent.setup();
    renderYearView();

    const select = screen.getByRole('combobox');
    expect(select).toHaveValue('month-5day');

    await user.selectOptions(select, 'timeline');

    expect(select).toHaveValue('timeline');
  });

  it('shows filter warning on mount if in Timeline view with filters active', () => {
      // Force mobile width to default to timeline view
      window.innerWidth = 500;

      mockUseData.mockReturnValue({
          ...defaultMockData,
          selectedSubjects: ['Maths'],
      } as any);

      renderYearView();

      expect(screen.getByText('Filters Active')).toBeInTheDocument();
  });

  it('does not show filter warning in Calendar view even if filters active', () => {
      // Desktop default is Calendar
      window.innerWidth = 1024;

      mockUseData.mockReturnValue({
          ...defaultMockData,
          selectedSubjects: ['Maths'],
      } as any);
      renderYearView();

      expect(screen.queryByText('Filters Active')).not.toBeInTheDocument();
  });

  it('opens mobile menu', async () => {
      const user = userEvent.setup();
      renderYearView();

      const menuBtn = screen.getByRole('button', { name: /Open main menu/i });
      await user.click(menuBtn);

      expect(screen.getByText('Filters & Options')).toBeInTheDocument();
  });

  it('handles assessment click to open modal', async () => {
      const user = userEvent.setup();
      renderYearView();

      const assessmentText = screen.getByText('Maths:', { exact: false });
      const btn = assessmentText.closest('button');

      if (!btn) throw new Error('Button not found');
      await user.click(btn);

      const dialog = screen.getByRole('dialog');
      expect(dialog).toBeInTheDocument();
      expect(screen.getByText('Assessment Details')).toBeInTheDocument();
  });
});
