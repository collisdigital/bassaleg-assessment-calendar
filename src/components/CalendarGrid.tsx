import { useState, useMemo } from 'react';
import { useSwipeable } from 'react-swipeable';
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

  // Swipe animation state
  const [swipeOffset, setSwipeOffset] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [containerNode, setContainerNode] = useState<HTMLDivElement | null>(null);

  // Navigation
  const changeMonth = (offset: number) => {
    setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() + offset, 1));
  };

  const goToNextMonth = () => changeMonth(1);
  const goToPrevMonth = () => changeMonth(-1);

  const goToToday = () => {
      setCurrentMonth(new Date(new Date().getFullYear(), new Date().getMonth(), 1));
  };

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

  // Swipe handlers
  const handlers = useSwipeable({
    onSwiping: (eventData) => {
        // Only animate the swiping of the grid if the user 
        // hasn't scrolled vertically more than the threshold
        // to prevent the grid from being moved during vertical
        // scrolling.
        const thresholdY = 50; 
        if (Math.abs(eventData.deltaY) < thresholdY) {
            setSwipeOffset(eventData.deltaX);
            setIsAnimating(false);
        } else {
            setIsAnimating(true);
            setSwipeOffset(0);
        }
    },
    onSwiped: (eventData) => {
        const threshold = 150; // px threshold to trigger switch
        const { deltaX } = eventData;
        // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
        const width = containerNode?.offsetWidth || window.innerWidth;

        if (Math.abs(deltaX) > threshold) {
             // Drag Right (positive) -> Prev Month
             // Drag Left (negative) -> Next Month
             const targetOffset = deltaX > 0 ? -1 : 1;
             const endPos = deltaX > 0 ? width : -width;

             setIsAnimating(true);
             setSwipeOffset(endPos);

             setTimeout(() => {
                 changeMonth(targetOffset);
                 setIsAnimating(false);
                 setSwipeOffset(-endPos); // Jump to other side

                 requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        setIsAnimating(true);
                        setSwipeOffset(0);
                    });
                 });
             }, 300); // Match CSS transition duration
        } else {
            // Cancel
            setIsAnimating(true);
            setSwipeOffset(0);
        }
    },
    trackMouse: false,
    trackTouch: true,
    delta: 50, // Minimum distance to start swiping
    preventScrollOnSwipe: true // Prevents vertical scrolling while swiping horizontally
  });

  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { ref: swipeRef, ...restHandlers } = handlers;

  const refPassthrough = (el: HTMLDivElement) => {
      // Call handlers ref
      swipeRef(el);
      // Save element to state
      setContainerNode(el);
  };

  return (
    <div className="flex flex-col h-full overflow-hidden">
        {/* Calendar Header */}
        <div className="flex items-center justify-between p-4 bg-white border-b border-gray-200 z-10 relative">
            <h2 className="text-2xl font-bold text-gray-800">{monthLabel}</h2>
            <div className="flex gap-2">
                <button onClick={goToPrevMonth} className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded text-gray-700">← Prev</button>
                <button onClick={goToToday} className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded text-gray-700 text-sm">Today</button>
                <button onClick={goToNextMonth} className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded text-gray-700">Next →</button>
            </div>
        </div>

        {/* Days Header */}
        <div className={`grid ${gridCols} border-b border-gray-200 bg-gray-50 z-10 relative`}>
            {headerDays.map(d => (
                <div key={d} className="py-2 text-center text-sm font-semibold text-gray-500 uppercase">
                    {d}
                </div>
            ))}
        </div>

        {/* Calendar Grid Wrapper for Swipe */}
        <div
            data-testid="swipe-wrapper"
            ref={refPassthrough}
            className="flex-1 overflow-hidden relative touch-pan-y"
            {...restHandlers}
        >
            <div
                className={`grid ${gridCols} auto-rows-fr bg-gray-200 gap-px border-b border-gray-200 h-full w-full`}
                style={{
                    transform: `translateX(${swipeOffset}px)`,
                    transition: isAnimating ? 'transform 0.3s ease-out' : 'none'
                }}
            >
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
    </div>
  );
}
