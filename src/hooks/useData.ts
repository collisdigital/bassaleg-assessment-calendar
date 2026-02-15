import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import rawData from '../data.json';
import { AppData, YearData } from '../types';

// Support data injection for E2E testing
const appData = (typeof window !== 'undefined' && window.APP_DATA)
  ? window.APP_DATA
  : (rawData as unknown as AppData);

function createSlug(str: string): string {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export function useAppMetadata() {
  return {
    generatedAt: appData.generatedAt
  };
}

export function useAllYears() {
  return useMemo(() => {
    if (!appData.years) return [];
    return Object.entries(appData.years).map(([id, data]) => ({
      id,
      name: data.name
    })).sort((a, b) => a.id.localeCompare(b.id));
  }, []);
}

export function useData(yearId: string) {
  const [searchParams, setSearchParams] = useSearchParams();

  // Retrieve the specific year data
  const yearData: YearData | undefined = appData.years[yearId];

  // Extract all unique subjects and types for the filter options
  const allSubjects = useMemo(() => {
    if (!yearData) return [];
    const subjects = new Set<string>();
    yearData.schedule.forEach(day => {
      day.assessments.forEach(a => subjects.add(a.subject));
    });
    return Array.from(subjects).sort();
  }, [yearData]);

  const allTypes = useMemo(() => {
    if (!yearData) return [];
    return Object.keys(yearData.types).sort();
  }, [yearData]);

  // Read state from URL
  const selectedSubjects = useMemo(() => {
    const param = searchParams.get('lesson');
    if (!param) return [];
    // Split by space (which is how multiple values are encoded in one param if we use '+')
    // URLSearchParams decodes '+' to space automatically.
    const slugs = param.split(' ');
    // Map slugs back to original subjects
    return allSubjects.filter(subject => slugs.includes(createSlug(subject)));
  }, [searchParams, allSubjects]);

  const selectedTypes = useMemo(() => {
    const param = searchParams.get('type');
    if (!param) return [];
    const slugs = param.split(' ');
    return allTypes.filter(type => slugs.includes(createSlug(type)));
  }, [searchParams, allTypes]);

  // Setters wrapper to update URL
  const setSelectedSubjects = (subjects: string[]) => {
    const newParams = new URLSearchParams(searchParams);
    if (subjects.length > 0) {
      newParams.set('lesson', subjects.map(createSlug).join(' '));
    } else {
      newParams.delete('lesson');
    }
    setSearchParams(newParams, { replace: true });
  };

  const setSelectedTypes = (types: string[]) => {
    const newParams = new URLSearchParams(searchParams);
    if (types.length > 0) {
      newParams.set('type', types.map(createSlug).join(' '));
    } else {
      newParams.delete('type');
    }
    setSearchParams(newParams, { replace: true });
  };

  const clearAllFilters = () => {
    const newParams = new URLSearchParams(searchParams);
    newParams.delete('lesson');
    newParams.delete('type');
    setSearchParams(newParams, { replace: true });
  };

  const typeColors = useMemo(() => {
    if (!yearData) return {};
    return yearData.types;
  }, [yearData]);

  const filteredSchedule = useMemo(() => {
    if (!yearData) return [];
    return yearData.schedule.map(day => {
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
  }, [yearData, selectedSubjects, selectedTypes]);

  return {
    yearData, // Expose raw year data if needed (e.g. checks)
    schedule: filteredSchedule,
    allSubjects,
    allTypes,
    selectedSubjects,
    setSelectedSubjects,
    selectedTypes,
    setSelectedTypes,
    clearAllFilters,
    typeColors,
    filename: yearData?.filename,
    sourceUrl: yearData?.sourceUrl,
    generatedAt: appData.generatedAt // Global generatedAt
  };
}
