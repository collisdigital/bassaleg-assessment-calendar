import { useEffect, useRef, memo } from 'react';
import { DayInfo, Assessment } from '../types';
import { normalizeHexColor } from '../utils/colorUtils';

interface TimelineViewProps {
  schedule: DayInfo[];
  onAssessmentClick: (assessment: Assessment, date: string) => void;
  scrollRef?: React.RefObject<HTMLDivElement>;
}

export const TimelineView = memo(function TimelineView({ schedule, onAssessmentClick, scrollRef }: TimelineViewProps) {
  const internalRef = useRef<HTMLDivElement>(null);
  const activeRef = scrollRef ?? internalRef;

  useEffect(() => {
    if (activeRef.current) {
      activeRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [activeRef]);

  // Helper to parse "YYYY-MM-DD" string into a local Date object (midnight)
  const parseDate = (dateStr: string) => {
    const part = dateStr.substring(0, 10);
    const [y, m, d] = part.split('-').map(Number);
    return new Date(y, m - 1, d);
  };

  const today = new Date();
  const currentDay = today.getDate();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  const todayMidnight = new Date();
  todayMidnight.setHours(0,0,0,0);

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

  let scrollTargetFound = false;

  return (
    <div className="flex flex-col space-y-4 bg-gray-50 p-4 min-h-[500px]">
      {schedule.map((day) => {
        if (day.assessments.length === 0 && !isToday(day.date)) return null;

        const dateObj = parseDate(day.date);
        const dateLabel = dateObj.toLocaleDateString(undefined, { weekday: 'short', day: 'numeric', month: 'short' });
        const isCurrentDay = isToday(day.date);
        const isPastDay = !isFutureOrToday(day.date);

        let isRef = false;
        if (!scrollTargetFound && isFutureOrToday(day.date)) {
            isRef = true;
            scrollTargetFound = true;
        }

        let appearanceClasses = '';
        if (isCurrentDay) {
          appearanceClasses = 'bg-blue-50 border border-blue-200 ring-2 ring-blue-100 shadow-sm';
        } else if (isPastDay) {
          appearanceClasses = 'bg-gray-100 opacity-60';
        } else {
          appearanceClasses = 'bg-white border border-gray-200 shadow-sm';
        }

        return (
          <div
            key={day.date}
            ref={isRef ? activeRef : null}
            className={`flex flex-col md:flex-row gap-2 md:gap-4 p-4 rounded-lg ${appearanceClasses}`}
          >
            <div className="md:w-32 flex-shrink-0">
               <span className={`text-lg font-bold ${isCurrentDay ? 'text-blue-700' : 'text-gray-700'}`}>
                 {dateLabel}
               </span>
               {day.isInset && <span className="ml-2 inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">INSET</span>}
            </div>

            <div className="flex-1 flex flex-col gap-2">
               {day.assessments.length === 0 && (
                   <span className="text-gray-400 text-sm italic">No assessments</span>
               )}
               {day.assessments.map((assessment, i) => {
                   const hex = normalizeHexColor(assessment.color);

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
