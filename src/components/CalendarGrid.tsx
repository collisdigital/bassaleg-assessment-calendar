import { useState, useMemo } from 'react';
import { DayInfo, ViewMode } from '../types';
import { DayCell } from './DayCell';

import { Assessment } from '../types';

interface CalendarGridProps {
  schedule: DayInfo[];
  viewMode: ViewMode;
  onAssessmentClick: (assessment: Assessment, date: string) => void;
}

export function CalendarGrid({ schedule, viewMode, onAssessmentClick }: CalendarGridProps) {
  // Determine the date range from the schedule to set initial view
  // User request: Start with current month containing today

  const [currentMonth, setCurrentMonth] = useState(() => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1);
  });

  // Navigation
  const goToNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const goToPrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const goToToday = () => {
      setCurrentMonth(new Date(new Date().getFullYear(), new Date().getMonth(), 1));
  }

  // Optimization: Create a lookup map for schedule dates to avoid O(N*M) lookups
  // N = schedule items, M = days displayed (30-42)
  const scheduleMap = useMemo(() => {
    const map = new Map<string, DayInfo>();
    schedule.forEach(day => {
        // Assuming date is in ISO format YYYY-MM-DD...
        const dateStr = day.date.substring(0, 10);
        map.set(dateStr, day);
    });
    return map;
  }, [schedule]);

  // Calculate days to display
  const daysInMonth = useMemo(() => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();

    // First day of the month
    const firstDay = new Date(year, month, 1);
    // Day of week (0 = Sunday, 1 = Monday). We want Monday start.
    const startDayOfWeek = firstDay.getDay(); // 0-6
    const offset = startDayOfWeek === 0 ? 6 : startDayOfWeek - 1; // Shift to Monday=0, Sunday=6

    const days: { day: DayInfo | null, date: Date, isCurrentMonth: boolean }[] = [];

    // Previous Month padding
    const prevMonthLastDate = new Date(year, month, 0).getDate();
    for (let i = 0; i < offset; i++) {
        const d = new Date(year, month - 1, prevMonthLastDate - offset + 1 + i);
        days.push({ day: null, date: d, isCurrentMonth: false });
    }

    // Current Month
    const lastDate = new Date(year, month + 1, 0).getDate();
    for (let i = 1; i <= lastDate; i++) {
        const d = new Date(year, month, i);
        days.push({ day: null, date: d, isCurrentMonth: true });
    }

    // Next Month padding
    const remaining = 42 - days.length; // 6 rows * 7 days
    for (let i = 1; i <= remaining; i++) {
        const d = new Date(year, month + 1, i);
        days.push({ day: null, date: d, isCurrentMonth: false });
    }

    // Now map our actual schedule data to these dates
    const mappedDays = days.map(slot => {
        // Use local date string YYYY-MM-DD to avoid timezone shifts
        const year = slot.date.getFullYear();
        const month = String(slot.date.getMonth() + 1).padStart(2, '0');
        const day = String(slot.date.getDate()).padStart(2, '0');
        const slotDateStr = `${year}-${month}-${day}`;

        const foundDay = scheduleMap.get(slotDateStr);
        return {
            ...slot,
            day: foundDay ?? { date: slot.date.toISOString(), week: null, isInset: false, assessments: [] }
        };
    });

    return mappedDays;
  }, [currentMonth, scheduleMap]);

  const monthLabel = currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' });

  // Filtering for view mode
  const is5Day = viewMode === 'month-5day';
  const gridCols = is5Day ? 'grid-cols-5' : 'grid-cols-7';

  // Filter out Sat (6) and Sun (0) if 5-day view
  const visibleDays = is5Day
    ? daysInMonth.filter(d => {
        const day = d.date.getDay();
        return day !== 0 && day !== 6;
      })
    : daysInMonth;

  const headerDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  if (!is5Day) {
      headerDays.push('Sat', 'Sun');
  }

  return (
    <div className="flex flex-col h-full">
        {/* Calendar Header */}
        <div className="flex items-center justify-between p-4 bg-white border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800">{monthLabel}</h2>
            <div className="flex gap-2">
                <button onClick={goToPrevMonth} className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded text-gray-700">← Prev</button>
                <button onClick={goToToday} className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded text-gray-700 text-sm">Today</button>
                <button onClick={goToNextMonth} className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded text-gray-700">Next →</button>
            </div>
        </div>

        {/* Days Header */}
        <div className={`grid ${gridCols} border-b border-gray-200 bg-gray-50`}>
            {headerDays.map(d => (
                <div key={d} className="py-2 text-center text-sm font-semibold text-gray-500 uppercase">
                    {d}
                </div>
            ))}
        </div>

        {/* Calendar Grid */}
        <div className={`grid ${gridCols} auto-rows-fr bg-gray-200 gap-px border-b border-gray-200`}>
            {visibleDays.map((slot, idx) => (
                <DayCell
                    key={idx}
                    day={slot.day}
                    isCurrentMonth={slot.isCurrentMonth}
                    onAssessmentClick={onAssessmentClick}
                />
            ))}
        </div>
    </div>
  );
}
