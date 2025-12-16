import { useEffect, useRef, memo } from 'react';
import { DayInfo, Assessment } from '../types';

interface TimelineViewProps {
  schedule: DayInfo[];
  onAssessmentClick: (assessment: Assessment, date: string) => void;
  scrollRef?: React.RefObject<HTMLDivElement>;
}

export const TimelineView = memo(function TimelineView({ schedule, onAssessmentClick, scrollRef }: TimelineViewProps) {
  const internalRef = useRef<HTMLDivElement>(null);
  const activeRef = scrollRef || internalRef;

  useEffect(() => {
    if (activeRef.current) {
      activeRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [activeRef]);

  // Helper to parse "YYYY-MM-DD" string into a local Date object (midnight)
  // This avoids timezone issues when parsing standard ISO strings or date strings
  const parseDate = (dateStr: string) => {
    // Take the first 10 characters (YYYY-MM-DD)
    const part = dateStr.substring(0, 10);
    const [y, m, d] = part.split('-').map(Number);
    // Note: Month is 0-indexed in Date constructor
    return new Date(y, m - 1, d);
  };

  // Optimization: Calculate today's date components once outside the loop
  const today = new Date();
  const currentDay = today.getDate();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  // Optimization: Pre-calculate midnight for future comparison
  const todayMidnight = new Date();
  todayMidnight.setHours(0,0,0,0);

  // Helper using closed-over values to avoid creating new Date() for 'today' every time
  const isToday = (dateStr: string) => {
      const d = parseDate(dateStr);
      return d.getDate() === currentDay &&
             d.getMonth() === currentMonth &&
             d.getFullYear() === currentYear;
  };

  const isFutureOrToday = (dateStr: string) => {
      const d = parseDate(dateStr);
      return d >= todayMidnight;
  };

  // Find the first day that is today or in the future to mark as the scroll target
  let scrollTargetFound = false;

  return (
    <div className="flex flex-col space-y-4 bg-gray-50 p-4 min-h-[500px]">
      {schedule.map((day) => {
        // Show all days with assessments. If a day has no assessments and is not today, we skip it.
        // Current logic: skip if empty assessments and not today.
        if (day.assessments.length === 0 && !isToday(day.date)) return null;

        const dateObj = parseDate(day.date);
        const dateLabel = dateObj.toLocaleDateString(undefined, { weekday: 'short', day: 'numeric', month: 'short' });
        const isCurrentDay = isToday(day.date);
        const isPastDay = !isFutureOrToday(day.date); // Needed for dimming

        // Determine if this element should be the scroll target
        // We want the first day that is Today or Future.
        let isRef = false;
        if (!scrollTargetFound && isFutureOrToday(day.date)) {
            isRef = true;
            scrollTargetFound = true;
        }

        let appearanceClasses = '';
        if (isCurrentDay) {
          // Today: highlighted withe a blue tint
          appearanceClasses = 'bg-blue-50 border border-blue-200 ring-2 ring-blue-100 shadow-sm';
        } else if (isPastDay) {
          // Past events: Opacity 60%, flat styling (no shadow), light grey background )
          appearanceClasses = 'bg-gray-100 opacity-60';
        } else {
          // Future events
          appearanceClasses = 'bg-white border border-gray-200 shadow-sm';
        }

        return (
          <div
            key={day.date}
            ref={isRef ? activeRef : null}
            className={`flex flex-col md:flex-row gap-2 md:gap-4 p-4 rounded-lg ${appearanceClasses}`}
          >
            {/* Date Column */}
            <div className="md:w-32 flex-shrink-0">
               <span className={`text-lg font-bold ${isCurrentDay ? 'text-blue-700' : 'text-gray-700'}`}>
                 {dateLabel}
               </span>
               {day.isInset && <span className="ml-2 inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">INSET</span>}
            </div>

            {/* Assessments Column */}
            <div className="flex-1 flex flex-col gap-2">
               {day.assessments.length === 0 && (
                   <span className="text-gray-400 text-sm italic">No assessments</span>
               )}
               {day.assessments.map((assessment, i) => {
                   // Handle hex color for border/bg
                   const rawColor = assessment.color;
                   const hex = rawColor.length === 8 ? '#' + rawColor.substring(2) : '#' + rawColor;

                   // Override color for past events
                   const dotStyle = isPastDay
                     ? { backgroundColor: undefined }
                     : { backgroundColor: hex };

                   const dotClass = `flex-shrink-0 w-3 h-3 mt-1.5 rounded-full ${isPastDay ? 'bg-gray-400' : ''}`;

                   return (
                       <button
                         key={i}
                         onClick={() => onAssessmentClick(assessment, day.date)}
                         className="text-left group flex items-start gap-3 p-2 rounded hover:bg-gray-50 transition-colors"
                       >
                           <span
                             className={dotClass}
                             style={dotStyle}
                           />
                           <div>
                               <div className="text-sm font-semibold text-gray-900">
                                   {assessment.subject}
                                   <span className="ml-2 font-normal text-gray-500 text-xs px-1.5 py-0.5 rounded border border-gray-200">
                                       {assessment.type}
                                   </span>
                               </div>
                               <div className="text-sm text-gray-600 line-clamp-2">
                                   {assessment.label}
                               </div>
                           </div>
                       </button>
                   );
               })}
            </div>
          </div>
        );
      })}

      {schedule.every(d => d.assessments.length === 0) && (
          <div className="text-center py-10 text-gray-500">
              No assessments found matching the current filters.
          </div>
      )}
    </div>
  );
});
