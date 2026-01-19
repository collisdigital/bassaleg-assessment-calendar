/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { YearView } from './YearView';
import * as useDataHook from '../hooks/useData';
import { createMockDay, createMockAssessment } from '../test/test-utils';

// Mock scrollIntoView
const mockScrollIntoView = vi.fn();
Element.prototype.scrollIntoView = mockScrollIntoView;

// Mock window.scrollTo
window.scrollTo = vi.fn();

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
      clearAllFilters: vi.fn(),
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
  });

  it('renders last updated text in footer', () => {
    renderYearView();
    // Since generatedAt is yesterday relative to system time
    expect(screen.getByText('Last updated yesterday', { exact: false })).toBeInTheDocument();
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

  it('navigates to next and previous months in calendar view', async () => {
    const user = userEvent.setup();
    renderYearView();

    const header = screen.getByRole('banner');
    expect(within(header).getByText('February 2024')).toBeInTheDocument();

    const nextBtn = within(header).getByRole('button', { name: /Next Month/i });
    await user.click(nextBtn);
    expect(within(header).getByText('March 2024')).toBeInTheDocument();

    const prevBtn = within(header).getByRole('button', { name: /Previous Month/i });
    await user.click(prevBtn); // Back to Feb
    await user.click(prevBtn); // Back to Jan
    expect(within(header).getByText('January 2024')).toBeInTheDocument();
  });

  it('jumps to today in calendar view', async () => {
    const user = userEvent.setup();
    renderYearView();

    const header = screen.getByRole('banner');
    const nextBtn = within(header).getByRole('button', { name: /Next Month/i });
    await user.click(nextBtn);
    expect(within(header).getByText('March 2024')).toBeInTheDocument();

    const todayBtn = within(header).getByRole('button', { name: /Today/i });
    await user.click(todayBtn);
    expect(within(header).getByText('February 2024')).toBeInTheDocument();
  });

  it('jumps to today in timeline view', async () => {
      const user = userEvent.setup();
      renderYearView();

      // Switch to Timeline
      const select = screen.getByRole('combobox');
      await user.selectOptions(select, 'timeline');

      // Click Jump to Today button (Calendar icon)
      // There are two buttons (desktop and mobile), click the first one
      const jumpBtns = screen.getAllByTitle('Jump to Today');
      await user.click(jumpBtns[0]);

      expect(mockScrollIntoView).toHaveBeenCalled();
  });

  it('redirects to home if year data is invalid', () => {
      mockUseData.mockReturnValue({
          ...defaultMockData,
          yearData: undefined
      } as any);

      renderYearView();

      // Should redirect, so YearView content shouldn't be rendered
      expect(screen.queryByRole('heading', { name: 'Test Calendar' })).not.toBeInTheDocument();
  });

  it('closes mobile menu when view is changed', async () => {
    const user = userEvent.setup();
    // Force mobile width
    window.innerWidth = 500;
    renderYearView();

    // Open mobile menu
    const menuBtn = screen.getByRole('button', { name: /Open main menu/i });
    await user.click(menuBtn);

    // Find the view selector in the mobile menu
    // We search for the text "Filters & Options" which is in the header, then traverse up to the overlay container
    const mobileHeader = screen.getByText('Filters & Options').closest('.flex');
    const mobileMenu = mobileHeader?.parentElement;
    if (!mobileMenu) throw new Error('Mobile menu not found');

    const select = within(mobileMenu).getByRole('combobox');
    await user.selectOptions(select, 'timeline');

    // Menu should be closed (Filters & Options should not be visible)
    expect(screen.queryByText('Filters & Options')).not.toBeInTheDocument();
  });

  it('closes mobile menu when a filter is selected', async () => {
    const user = userEvent.setup();
    window.innerWidth = 500;
    renderYearView();

    // Open mobile menu
    const menuBtn = screen.getByRole('button', { name: /Open main menu/i });
    await user.click(menuBtn);

    // Find a filter button in the mobile menu
    const mobileHeader = screen.getByText('Filters & Options').closest('.flex');
    const mobileMenu = mobileHeader?.parentElement;
    if (!mobileMenu) throw new Error('Mobile menu not found');

    const mathsFilter = within(mobileMenu).getByRole('button', { name: 'Maths' });
    await user.click(mathsFilter);

    // Menu should be closed
    expect(screen.queryByText('Filters & Options')).not.toBeInTheDocument();
  });

  it('closes mobile menu when a Type filter is selected', async () => {
    const user = userEvent.setup();
    window.innerWidth = 500;
    renderYearView();

    const menuBtn = screen.getByRole('button', { name: /Open main menu/i });
    await user.click(menuBtn);

    const mobileHeader = screen.getByText('Filters & Options').closest('.flex');
    const mobileMenu = mobileHeader?.parentElement;
    if (!mobileMenu) throw new Error('Mobile menu not found');

    const examFilter = within(mobileMenu).getByRole('button', { name: 'Exam' });
    await user.click(examFilter);

    expect(screen.queryByText('Filters & Options')).not.toBeInTheDocument();
  });

  it('closes mobile menu when Clear All filters is clicked', async () => {
    const user = userEvent.setup();
    window.innerWidth = 500;
    
    // Setup data with active filters so Clear All appears
    mockUseData.mockReturnValue({
        ...defaultMockData,
        selectedSubjects: ['Maths'],
    } as any);
    
    renderYearView();

    const menuBtn = screen.getByRole('button', { name: /Open main menu/i });
    await user.click(menuBtn);

    const mobileHeader = screen.getByText('Filters & Options').closest('.flex');
    const mobileMenu = mobileHeader?.parentElement;
    if (!mobileMenu) throw new Error('Mobile menu not found');

    const clearBtn = within(mobileMenu).getByText('Clear All');
    await user.click(clearBtn);

    expect(screen.queryByText('Filters & Options')).not.toBeInTheDocument();
  });
});
