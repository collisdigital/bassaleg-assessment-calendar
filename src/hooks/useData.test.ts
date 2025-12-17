import { describe, it, expect, vi, beforeEach, afterAll } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { createMockData, createMockDay, createMockAssessment } from '../test/test-utils';

describe('useData Hook', () => {
  const originalLocation = window.location;
  const originalHistory = window.history;

  beforeEach(() => {
    vi.resetModules(); // Ensure we get a fresh module registry for each test

    // Reset window.location
    Object.defineProperty(window, 'location', {
      configurable: true,
      writable: true,
      value: {
        search: '',
        pathname: '/',
        assign: vi.fn(),
        reload: vi.fn(),
        toString: () => 'http://localhost/',
      } as unknown as Location,
    });

    // Reset window.history
    Object.defineProperty(window, 'history', {
      configurable: true,
      writable: true,
      value: {
        replaceState: vi.fn(),
        pushState: vi.fn(),
        state: null,
        length: 1,
        go: vi.fn(),
        back: vi.fn(),
        forward: vi.fn(),
        scrollRestoration: 'auto',
      } as unknown as History,
    });
  });

  afterAll(() => {
    Object.defineProperty(window, 'location', {
      configurable: true,
      writable: true,
      value: originalLocation
    });
    Object.defineProperty(window, 'history', {
      configurable: true,
      writable: true,
      value: originalHistory
    });
    vi.restoreAllMocks();
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async function loadUseData(mockData: any) {
    vi.doMock('../data.json', () => ({
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      default: mockData,
    }));
    const module = await import('./useData');
    return module.useData;
  }

  it('should return empty lists if schedule is empty', async () => {
    const useData = await loadUseData(createMockData({ schedule: [], types: {} }));
    const { result } = renderHook(() => useData());

    expect(result.current.allSubjects).toEqual([]);
    expect(result.current.allTypes).toEqual([]);
    expect(result.current.schedule).toEqual([]);
  });

  it('should return all subjects and types from data', async () => {
    const useData = await loadUseData(createMockData({
        schedule: [
            createMockDay('2024-01-01', [
                createMockAssessment('Maths', 'Exam'),
                createMockAssessment('English', 'Mock')
            ])
        ],
        types: { '#FF0000': 'Exam', '#00FF00': 'Mock' }
    }));

    const { result } = renderHook(() => useData());

    expect(result.current.allSubjects).toEqual(['English', 'Maths']);
    expect(result.current.allTypes).toEqual(['Exam', 'Mock']);
  });

  it('should initialize filters from URL parameters', async () => {
    const useData = await loadUseData(createMockData({
         schedule: [createMockDay('2024-01-01', [createMockAssessment('Maths', 'Exam')])],
         types: { '#FF0000': 'Exam' }
    }));

    // ?type=exam&lesson=maths
    window.location.search = '?type=exam&lesson=maths';

    const { result } = renderHook(() => useData());

    expect(result.current.selectedTypes).toContain('Exam');
    expect(result.current.selectedSubjects).toContain('Maths');
  });

  it('should update URL when filters change', async () => {
    const useData = await loadUseData(createMockData({
        schedule: [createMockDay('2024-01-01', [createMockAssessment('Maths', 'Exam')])],
        types: { '#FF0000': 'Exam' }
   }));

    const { result } = renderHook(() => useData());

    act(() => {
      result.current.setSelectedTypes(['Exam']);
    });

    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(window.history.replaceState).toHaveBeenCalledWith(
        null,
        '',
        expect.stringContaining('type=exam')
    );
  });

  it('should filter schedule based on selection', async () => {
     const useData = await loadUseData(createMockData({
        schedule: [
            createMockDay('2024-01-01', [
                createMockAssessment('Maths', 'Exam'),
                createMockAssessment('English', 'Mock')
            ])
        ],
        types: { '#FF0000': 'Exam', '#00FF00': 'Mock' }
    }));

    const { result } = renderHook(() => useData());

    act(() => {
        result.current.setSelectedSubjects(['Maths']);
    });

    // Check result
    const day = result.current.schedule[0];
    expect(day.assessments).toHaveLength(1);
    expect(day.assessments[0].subject).toBe('Maths');
  });

  it('should handle special characters in subjects for URL slugs', async () => {
     const useData = await loadUseData(createMockData({
        schedule: [createMockDay('2024-01-01', [createMockAssessment('Science & Tech', 'Exam')])],
        types: { '#FF0000': 'Exam' }
    }));

    const { result } = renderHook(() => useData());

    act(() => {
        result.current.setSelectedSubjects(['Science & Tech']);
    });

    // Slug should be science-tech
    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(window.history.replaceState).toHaveBeenCalledWith(
        null,
        '',
        expect.stringContaining('lesson=science-tech')
    );
  });
});
