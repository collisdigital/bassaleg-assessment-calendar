/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

// Mock scrollIntoView
Element.prototype.scrollIntoView = vi.fn();

describe('Filter Reset Bug', () => {
  beforeEach(() => {
    vi.resetModules();
    vi.mock('../data.json', () => ({
        default: {
            years: {
                'year-10': {
                    name: 'Year 10',
                    types: { '#FF0000': 'Exam' },
                    schedule: [
                        {
                            date: '2025-01-01',
                            week: '1',
                            isInset: false,
                            assessments: [{ subject: 'Maths', type: 'Exam', color: '#FF0000', label: 'Test' }]
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

      // Verify "Clear All" button is present (FilterBar)
      // Note: FilterBar shows "Clear All" if filters > 0
      const clearBtn = await screen.findByText('Clear All');
      expect(clearBtn).toBeInTheDocument();

      // Click Clear All
      await user.click(clearBtn);

      // Expect "Clear All" to disappear.
      // If the bug exists, one filter will remain (e.g. 'lesson=maths'), so "Clear All" will still be visible.
      // We expect it to NOT be in document.
      expect(screen.queryByText('Clear All')).not.toBeInTheDocument();
  });
});
