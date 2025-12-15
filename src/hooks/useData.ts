import { useState, useMemo, useEffect } from 'react';
import rawData from '../data.json';
import { Data } from '../types';

const data = rawData as Data;

function createSlug(str: string): string {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export function useData() {
  // Extract all unique subjects and types for the filter options
  const allSubjects = useMemo(() => {
    const subjects = new Set<string>();
    data.schedule.forEach(day => {
      day.assessments.forEach(a => subjects.add(a.subject));
    });
    return Array.from(subjects).sort();
  }, []);

  const allTypes = useMemo(() => {
    // We can use the types map from the data, or extract from assessments
    return Object.values(data.types).sort();
  }, []);

  const [selectedSubjects, setSelectedSubjects] = useState<string[]>(() => {
    if (typeof window === 'undefined') return [];
    const params = new URLSearchParams(window.location.search);
    const param = params.get('lesson');
    if (!param) return [];

    // Split by space (which is how multiple values are encoded in one param if we use '+')
    // URLSearchParams decodes '+' to space automatically.
    const slugs = param.split(' ');

    // Map slugs back to original subjects
    return allSubjects.filter(subject => slugs.includes(createSlug(subject)));
  });

  const [selectedTypes, setSelectedTypes] = useState<string[]>(() => {
    if (typeof window === 'undefined') return [];
    const params = new URLSearchParams(window.location.search);
    const param = params.get('type');
    if (!param) return [];

    const slugs = param.split(' ');
    return allTypes.filter(type => slugs.includes(createSlug(type)));
  });

  // Sync state to URL
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const params = new URLSearchParams(window.location.search);

    // Update 'lesson' (subjects)
    if (selectedSubjects.length > 0) {
      const slug = selectedSubjects.map(createSlug).join(' ');
      params.set('lesson', slug);
    } else {
      params.delete('lesson');
    }

    // Update 'type'
    if (selectedTypes.length > 0) {
      const slug = selectedTypes.map(createSlug).join(' ');
      params.set('type', slug);
    } else {
      params.delete('type');
    }

    const queryString = params.toString();
    const newUrl = queryString
      ? `${window.location.pathname}?${queryString}`
      : window.location.pathname;

    const currentSearch = window.location.search;
    const newSearch = queryString ? `?${queryString}` : '';

    // Only update if changed to avoid loops/redundant calls
    if (currentSearch !== newSearch) {
      window.history.replaceState(null, '', newUrl);
    }
  }, [selectedSubjects, selectedTypes]);

  const typeColors = useMemo(() => {
    const map: Record<string, string> = {};
    for (const [color, type] of Object.entries(data.types)) {
        // Convert ARGB to Hex if needed (assuming color in types is raw from ExcelJS logic)
        // In download-and-parse, normalizeColor just returns argb string.
        // We need to ensure it's a valid CSS color.
        // Excel ARGB is usually 8 hex chars.
        let hex = color;
        if (color.length === 8) {
            hex = '#' + color.substring(2);
        } else if (color.length === 6) {
             hex = '#' + color;
        }
        map[type] = hex;
    }
    return map;
  }, []);

  const filteredSchedule = useMemo(() => {
    return data.schedule.map(day => {
      // Filter assessments within the day
      const filteredAssessments = day.assessments.filter(assessment => {
        const subjectMatch = selectedSubjects.length === 0 || selectedSubjects.includes(assessment.subject);
        const typeMatch = selectedTypes.length === 0 || selectedTypes.includes(assessment.type);
        return subjectMatch && typeMatch;
      });

      return {
        ...day,
        assessments: filteredAssessments
      };
    });
  }, [selectedSubjects, selectedTypes]);

  return {
    schedule: filteredSchedule,
    allSubjects,
    allTypes,
    selectedSubjects,
    setSelectedSubjects,
    selectedTypes,
    setSelectedTypes,
    typeColors,
    filename: data.filename,
    sourceUrl: data.sourceUrl
  };
}
