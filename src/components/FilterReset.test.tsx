import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

// Mock scrollIntoView
Element.prototype.scrollIntoView = vi.fn();
// Mock scrollTo
window.scrollTo = vi.fn();

describe('Filter Reset Behavior', () => {
  beforeEach(() => {
    vi.resetModules();
    vi.mock('../data.json', () => ({
        default: {
            years: {
                'year-10': {
                    name: 'Year 10',
                    types: { 'Exam': '#FF0000' },
                    schedule: [
                        {
                            date: '2025-01-01',
                            week: '1',
                            isInset: false,
                            assessments: [{ subject: 'Maths', type: 'Exam', label: 'Test' }]
                        }
                    ]
                }
            }
        }
    }));
  });

  it('clears both Subject and Type filters when "Clear All" is clicked', async () => {
      const { YearView } = await import('./YearView');
      const user = userEvent.setup();

      // Start with both filters active
      render(
          <MemoryRouter initialEntries={['/year-10?lesson=maths&type=exam']}>
              <Routes>
                  <Route path="/:yearId" element={<YearView />} />
              </Routes>
          </MemoryRouter>
      );

      // Open filters menu
      const filtersToggle = screen.getByRole('button', { name: /Filters/i });
      await user.click(filtersToggle);

      // Verify "Clear All" button is present
      const clearBtn = await screen.findByText('Clear All');
      expect(clearBtn).toBeInTheDocument();

      // Verify buttons are selected (aria-pressed="true")
      const mathsBtn = screen.getByRole('button', { name: 'Maths' });
      const examBtn = screen.getByRole('button', { name: 'Exam' });
      expect(mathsBtn).toHaveAttribute('aria-pressed', 'true');
      expect(examBtn).toHaveAttribute('aria-pressed', 'true');

      // Click Clear All
      await user.click(clearBtn);

      // Verify buttons are NOT selected (aria-pressed="false")
      expect(mathsBtn).toHaveAttribute('aria-pressed', 'false');
      expect(examBtn).toHaveAttribute('aria-pressed', 'false');

      // Expect "Clear All" to disappear
      expect(screen.queryByText('Clear All')).not.toBeInTheDocument();
  });
});
