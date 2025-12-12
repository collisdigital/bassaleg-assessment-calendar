import { DayInfo } from '../types';
import { AssessmentPill } from './AssessmentPill';

import { Assessment } from '../types';

interface DayCellProps {
  day: DayInfo;
  isCurrentMonth: boolean;
  onAssessmentClick: (assessment: Assessment, date: string) => void;
}

export function DayCell({ day, isCurrentMonth, onAssessmentClick }: DayCellProps) {
  const dateObj = new Date(day.date);
  const dayNumber = dateObj.getDate();
  const isToday = new Date().toDateString() === dateObj.toDateString();

  return (
    <div className={`min-h-[120px] border border-gray-100 p-1 flex flex-col relative transition-colors
      ${isCurrentMonth ? 'bg-white' : 'bg-gray-50 text-gray-400'}
      ${day.isInset ? 'bg-yellow-50' : ''}
    `}>
      <div className="flex justify-between items-start mb-1">
        <span className={`text-sm font-medium w-6 h-6 flex items-center justify-center rounded-full
          ${isToday ? 'bg-blue-600 text-white' : ''}
        `}>
          {dayNumber}
        </span>
        {day.week && (
          <span className="text-[10px] text-gray-400 uppercase tracking-tight">
            Week {day.week}
          </span>
        )}
      </div>

      {day.isInset && (
        <div className="text-center text-xs font-bold text-yellow-700 bg-yellow-100 rounded px-1 py-0.5 mb-1">
            SCHOOL CLOSED
        </div>
      )}

      <div className="flex-1 overflow-y-auto max-h-[150px] scrollbar-hide">
        {day.assessments.map((assessment, i) => (
          <AssessmentPill
            key={i}
            assessment={assessment}
            onClick={() => onAssessmentClick(assessment, day.date)}
          />
        ))}
      </div>
    </div>
  );
}
