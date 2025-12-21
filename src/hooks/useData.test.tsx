/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/display-name */
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { createMockAppData, createMockYearData, createMockDay, createMockAssessment } from '../test/test-utils';
import React from 'react';

describe('useData Hook', () => {

  beforeEach(() => {
    vi.resetModules();
  });

  async function loadUseData(mockAppData: any) {
    vi.doMock('../data.json', () => ({
      default: mockAppData,
    }));
    const module = await import('./useData');
    return module.useData;
  }

  const createWrapper = (initialEntry = '/year-10') => ({ children }: { children: React.ReactNode }) => (
    <MemoryRouter initialEntries={[initialEntry]}>
      {children}
    </MemoryRouter>
  );

  it('should return empty lists if year not found', async () => {
    const useData = await loadUseData(createMockAppData());
    const { result } = renderHook(() => useData('year-10'), { wrapper: createWrapper() });

    expect(result.current.allSubjects).toEqual([]);
    expect(result.current.schedule).toEqual([]);
    expect(result.current.yearData).toBeUndefined();
  });

  it('should return all subjects and types from data', async () => {
    const yearData = createMockYearData({
        schedule: [
            createMockDay('2024-01-01', [
                createMockAssessment('Maths', 'Exam'),
                createMockAssessment('English', 'Mock')
            ])
        ],
        types: { '#FF0000': 'Exam', '#00FF00': 'Mock' }
    });
    const useData = await loadUseData(createMockAppData({ 'year-10': yearData }));

    const { result } = renderHook(() => useData('year-10'), { wrapper: createWrapper() });

    expect(result.current.allSubjects).toEqual(['English', 'Maths']);
    expect(result.current.allTypes).toEqual(['Exam', 'Mock']);
  });

  it('should initialize filters from URL parameters', async () => {
     const yearData = createMockYearData({
         schedule: [createMockDay('2024-01-01', [createMockAssessment('Maths', 'Exam')])],
         types: { '#FF0000': 'Exam' }
    });
    const useData = await loadUseData(createMockAppData({ 'year-10': yearData }));

    // URL: /year-10?type=exam&lesson=maths
    const { result } = renderHook(() => useData('year-10'), {
        wrapper: createWrapper('/year-10?type=exam&lesson=maths')
    });

    expect(result.current.selectedTypes).toContain('Exam');
    expect(result.current.selectedSubjects).toContain('Maths');
  });

  it('should update filters', async () => {
    const yearData = createMockYearData({
        schedule: [createMockDay('2024-01-01', [createMockAssessment('Maths', 'Exam')])],
        types: { '#FF0000': 'Exam' }
    });
    const useData = await loadUseData(createMockAppData({ 'year-10': yearData }));

    const { result } = renderHook(() => useData('year-10'), { wrapper: createWrapper() });

    act(() => {
      result.current.setSelectedTypes(['Exam']);
    });

    expect(result.current.selectedTypes).toEqual(['Exam']);
  });

  it('should filter schedule based on selection', async () => {
    const yearData = createMockYearData({
       schedule: [
           createMockDay('2024-01-01', [
               createMockAssessment('Maths', 'Exam'),
               createMockAssessment('English', 'Mock')
           ])
       ],
       types: { '#FF0000': 'Exam', '#00FF00': 'Mock' }
   });
   const useData = await loadUseData(createMockAppData({ 'year-10': yearData }));

   const { result } = renderHook(() => useData('year-10'), { wrapper: createWrapper() });

   act(() => {
       result.current.setSelectedSubjects(['Maths']);
   });

   // Check result
   const day = result.current.schedule[0];
   expect(day.assessments).toHaveLength(1);
   expect(day.assessments[0].subject).toBe('Maths');
 });

 it('should handle special characters in subjects for URL slugs', async () => {
    const yearData = createMockYearData({
       schedule: [createMockDay('2024-01-01', [createMockAssessment('Science & Tech', 'Exam')])],
       types: { '#FF0000': 'Exam' }
   });
   const useData = await loadUseData(createMockAppData({ 'year-10': yearData }));

   const { result } = renderHook(() => useData('year-10'), { wrapper: createWrapper() });

   act(() => {
       result.current.setSelectedSubjects(['Science & Tech']);
   });

   // Since we are mocking, we can't easily check window.location or router state directly from the hook result
   // without a custom spy component, but we can verify the 'selectedSubjects' state updated correctly
   // which implies the URL round-trip worked (since the hook reads from URL).
   expect(result.current.selectedSubjects).toContain('Science & Tech');
 });
});
