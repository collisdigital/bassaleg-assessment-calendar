import { Data, Assessment, DayInfo } from '../types';

/**
 * Creates a mock Data object for testing.
 */
export function createMockData(overrides: Partial<Data> = {}): Data {
  const defaultData: Data = {
    generatedAt: '2024-01-01T00:00:00.000Z',
    filename: 'test-data.xlsx',
    sourceUrl: 'http://example.com/sheet',
    types: {
      'FFFF0000': 'Exam',
      'FF00FF00': 'Mock',
      'FF0000FF': 'NEA',
    },
    schedule: [],
  };

  return { ...defaultData, ...overrides };
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
    color: 'FFFF0000'
  };
}
