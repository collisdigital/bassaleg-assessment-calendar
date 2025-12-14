import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CalendarGrid } from './CalendarGrid';
import { DayInfo } from '../types';

describe('CalendarGrid', () => {
    it('renders without crashing', () => {
        const mockSchedule: DayInfo[] = [];
        render(<CalendarGrid schedule={mockSchedule} viewMode="month-7day" onAssessmentClick={() => {}} />);
        // Should show at least the header days
        expect(screen.getByText('Mon')).toBeDefined();
    });
});
