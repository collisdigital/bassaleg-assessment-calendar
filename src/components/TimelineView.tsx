import { useEffect, useRef } from 'react';
import { DayInfo, Assessment } from '../types';

interface TimelineViewProps {
  schedule: DayInfo[];
  onAssessmentClick: (assessment: Assessment, date: string) => void;
}

export function TimelineView({ schedule, onAssessmentClick }: TimelineViewProps) {
  const todayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (todayRef.current) {
      todayRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, []);

  // Filter out days with no assessments?
  // User didn't specify, but usually a timeline shows events.
  // However, showing empty days gives context of time passing.
  // Let's filter to only days with assessments OR days that are "Today" to allow context.
  // Actually, for a whole year, that's a lot of empty days.
  // Let's group by Month.

  // Helper to check if a date is today
  const isToday = (dateStr: string) => {
      const today = new Date();
      const d = new Date(dateStr);
      return d.getDate() === today.getDate() &&
             d.getMonth() === today.getMonth() &&
             d.getFullYear() === today.getFullYear();
  };

  const isFutureOrToday = (dateStr: string) => {
      const today = new Date();
      today.setHours(0,0,0,0);
      const d = new Date(dateStr);
      return d >= today;
  };

  // Find the first day that is today or in the future to mark as the scroll target
  let scrollTargetFound = false;

  return (
    <div className="flex flex-col space-y-4 bg-gray-50 p-4 min-h-[500px]">
      {schedule.map((day) => {
        // Skip days with no assessments unless it is today?
        // Or maybe just show all days with assessments?
        // Let's show all days with assessments.
        if (day.assessments.length === 0 && !isToday(day.date)) return null;

        const dateObj = new Date(day.date);
        const dateLabel = dateObj.toLocaleDateString(undefined, { weekday: 'short', day: 'numeric', month: 'short' });
        const isCurrentDay = isToday(day.date);

        // Determine if this element should be the scroll target
        // We want the first day that is Today or Future.
        let isRef = false;
        if (!scrollTargetFound && isFutureOrToday(day.date)) {
            isRef = true;
            scrollTargetFound = true;
        }

        return (
          <div
            key={day.date}
            ref={isRef ? todayRef : null}
            className={`flex flex-col md:flex-row gap-2 md:gap-4 p-4 rounded-lg shadow-sm border ${isCurrentDay ? 'bg-blue-50 border-blue-200 ring-2 ring-blue-100' : 'bg-white border-gray-200'}`}
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

                   return (
                       <button
                         key={i}
                         onClick={() => onAssessmentClick(assessment, day.date)}
                         className="text-left group flex items-start gap-3 p-2 rounded hover:bg-gray-50 transition-colors"
                       >
                           <span
                             className="flex-shrink-0 w-3 h-3 mt-1.5 rounded-full"
                             style={{ backgroundColor: hex }}
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
}
