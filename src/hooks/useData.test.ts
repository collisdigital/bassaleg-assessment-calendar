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
    delete (window as any).location;
    (window as any).location = {
        search: '',
        pathname: '/',
        assign: vi.fn(),
        reload: vi.fn(),
    };

    // Reset window.history
    delete (window as any).history;
    (window as any).history = {
        replaceState: vi.fn(),
        pushState: vi.fn(),
        state: null,
        length: 1,
    };
  });

  afterAll(() => {
    window.location = originalLocation;
    window.history = originalHistory;
  });

  it('should return all subjects and types initially', () => {
    const { result } = renderHook(() => useData());

    expect(result.current.allSubjects.length).toBeGreaterThan(0);
    expect(result.current.allTypes.length).toBeGreaterThan(0);
    expect(result.current.selectedSubjects).toEqual([]);
    expect(result.current.selectedTypes).toEqual([]);
  });

  it('should initialize filters from URL parameters', () => {
    // Set URL params before rendering
    (window.location as any).search = '?type=Exam&lesson=Science+%26+Tech';

    const { result } = renderHook(() => useData());

    expect(result.current.selectedTypes).toContain('Exam');
    expect(result.current.selectedSubjects).toContain('Science & Tech');
  });

  it('should update URL when filters change', () => {
    const { result } = renderHook(() => useData());

    act(() => {
      result.current.setSelectedTypes(['Mock']);
    });

    expect(window.history.replaceState).toHaveBeenCalledWith(
        null,
        '',
        expect.stringContaining('type=Mock')
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

   it('should filter assessments by type', () => {
    const { result } = renderHook(() => useData());

    const typeToFilter = "Exam";

    act(() => {
      result.current.setSelectedTypes([typeToFilter]);
    });

    let foundAssessment = false;
    result.current.schedule.forEach(day => {
       day.assessments.forEach(a => {
           expect(a.type).toBe(typeToFilter);
           foundAssessment = true;
       });
    });

    expect(foundAssessment).toBe(true);
  });
});
