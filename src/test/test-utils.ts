import { AppData, YearData, Assessment, DayInfo } from '../types';

/**
 * Creates a mock YearData object for testing.
 */
export function createMockYearData(overrides: Partial<YearData> = {}): YearData {
  const defaultData: YearData = {
    name: 'Test Year',
    filename: 'test-data.xlsx',
    sourceUrl: 'http://example.com/sheet',
    types: {
      'Exam': '#EF4444',
      'Mock': '#F59E0B',
      'NEA': '#3B82F6',
    },
    schedule: [],
  };

  return { ...defaultData, ...overrides };
}

/**
 * Creates a mock AppData object with specified years.
 */
export function createMockAppData(years: Record<string, YearData> = {}): AppData {
  return {
    generatedAt: '2024-01-01T00:00:00.000Z',
    years
  };
}

/**
 * Creates a mock DayInfo object.
 */
export function createMockDay(dateStr: string, assessments: Assessment[] = []): DayInfo {
  return {
    date: dateStr,
    week: 'Week A',
    isInset: false,
    assessments,
  };
}

/**
 * Creates a mock Assessment object.
 */
export function createMockAssessment(
  subject: string,
  type = 'Exam'
): Assessment {
  return {
    subject,
    type,
    label: `${subject} (${type})`,
  };
}
