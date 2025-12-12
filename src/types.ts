export type ViewMode = 'month-5day' | 'month-7day' | 'timeline';

export interface Assessment {
  subject: string;
  type: string;
  label: string;
  color: string;
}

export interface DayInfo {
  date: string;
  week: string | null;
  isInset: boolean;
  assessments: Assessment[];
}

export interface Data {
  generatedAt: string;
  sourceUrl?: string;
  filename?: string;
  types: Record<string, string>;
  schedule: DayInfo[];
}

export interface Filters {
  subjects: string[];
  types: string[];
}
