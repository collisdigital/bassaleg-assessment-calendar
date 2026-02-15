export type ViewMode = 'month-5day' | 'month-7day' | 'timeline';

export interface Assessment {
  subject: string;
  type: string;
  label: string;
}

export interface DayInfo {
  date: string;
  week: string | null;
  isInset: boolean;
  assessments: Assessment[];
}

export interface YearData {
  name: string;
  sourceUrl?: string;
  filename?: string;
  types: Record<string, string>; // Type -> Color (Hex)
  schedule: DayInfo[];
}

export interface AppData {
  generatedAt: string;
  years: Record<string, YearData>;
}

export interface Filters {
  subjects: string[];
  types: string[];
}

declare global {
  interface Window {
    APP_DATA?: AppData;
  }
}
