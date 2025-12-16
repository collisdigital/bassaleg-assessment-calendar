import { describe, it, expect, vi, beforeEach, afterAll } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useData } from './useData';

// Mock data.json to ensure tests are deterministic
// We will use vi.mock but for simplicity in this environment,
// let's rely on the hook logic which depends on the imported json.
// Ideally, we'd mock the import.

// We mock window.location and history
const originalLocation = window.location;
const originalHistory = window.history;

describe('useData Hook', () => {
  beforeEach(() => {
    // Reset window.location
    Object.defineProperty(window, 'location', {
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
      writable: true,
      value: originalLocation
    });
    Object.defineProperty(window, 'history', {
      writable: true,
      value: originalHistory
    });
  });

  it('should return all subjects and types initially', () => {
    const { result } = renderHook(() => useData());

    expect(result.current.allSubjects.length).toBeGreaterThan(0);
    expect(result.current.allTypes.length).toBeGreaterThan(0);
    expect(result.current.selectedSubjects).toEqual([]);
    expect(result.current.selectedTypes).toEqual([]);
  });

  it('should initialize filters from URL parameters with combined slugs', () => {
    // Set URL params before rendering
    // "Exam" -> "exam", "Science & Tech" -> "science-tech"
    // format: ?type=exam&lesson=science-tech
    window.location.search = '?type=exam&lesson=science-tech';

    const { result } = renderHook(() => useData());

    expect(result.current.selectedTypes).toContain('Exam');
    expect(result.current.selectedSubjects).toContain('Science & Tech');
  });

  it('should initialize multiple filters from combined space-separated slugs', () => {
      // ?type=exam+mock
      // URLSearchParams decodes + to space.
      window.location.search = '?type=exam+mock';

      const { result } = renderHook(() => useData());

      expect(result.current.selectedTypes).toContain('Exam');
      expect(result.current.selectedTypes).toContain('Mock');
  });

  it('should update URL when filters change', () => {
    const { result } = renderHook(() => useData());

    act(() => {
      result.current.setSelectedTypes(['Mock']);
    });

    // "Mock" -> "mock"
    expect(window.history.replaceState).toHaveBeenCalledWith(
        null,
        '',
        expect.stringContaining('type=mock')
    );
  });

  it('should update URL with combined parameters', () => {
     const { result } = renderHook(() => useData());

     act(() => {
         result.current.setSelectedTypes(['Mock', 'Exam']);
     });

     // "Mock" -> "mock", "Exam" -> "exam" -> "mock exam" (encoded as mock+exam or mock%20exam)
     // URLSearchParams.toString() encodes space as +
     expect(window.history.replaceState).toHaveBeenCalledWith(
         null,
         '',
         expect.stringMatching(/type=mock\+exam|type=exam\+mock/)
     );
  });

  it('should filter assessments by subject', () => {
    const { result } = renderHook(() => useData());

    // Pick a subject that definitely exists, e.g., "Maths / Numeracy"
    const subjectToFilter = "Maths / Numeracy";
    if (!result.current.allSubjects.includes(subjectToFilter)) {
        // Fallback if data changed
        return;
    }

    act(() => {
      result.current.setSelectedSubjects([subjectToFilter]);
    });

    // Check a day that we know has Maths
    // We iterate through all days and ensure ONLY Maths assessments are present
    let foundAssessment = false;
    result.current.schedule.forEach(day => {
       day.assessments.forEach(a => {
           expect(a.subject).toBe(subjectToFilter);
           foundAssessment = true;
       });
    });

    // Ensure we actually found something to make the test valid
    expect(foundAssessment).toBe(true);
  });
});
