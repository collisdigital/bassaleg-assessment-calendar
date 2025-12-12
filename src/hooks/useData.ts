import { useState, useMemo } from 'react';
import rawData from '../data.json';
import { Data } from '../types';

const data = rawData as Data;

export function useData() {
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

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
    typeColors
  };
}
