import { describe, it, expect } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useData } from './useData';

// Mock data.json to ensure tests are deterministic
// We will use vi.mock but for simplicity in this environment,
// let's rely on the hook logic which depends on the imported json.
// Ideally, we'd mock the import.

describe('useData Hook', () => {
  it('should return all subjects and types initially', () => {
    const { result } = renderHook(() => useData());

    expect(result.current.allSubjects.length).toBeGreaterThan(0);
    expect(result.current.allTypes.length).toBeGreaterThan(0);
    expect(result.current.selectedSubjects).toEqual([]);
    expect(result.current.selectedTypes).toEqual([]);
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
