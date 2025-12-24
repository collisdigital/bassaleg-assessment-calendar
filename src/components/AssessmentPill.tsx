import { Assessment } from '../types';

interface AssessmentPillProps {
  assessment: Assessment;
  color: string;
  onClick?: () => void;
}

export function AssessmentPill({ assessment, color, onClick }: AssessmentPillProps) {
  // Color is now passed as a prop, already normalized hex
  return (
    <button
        type="button"
        onClick={onClick}
        className="w-full text-left text-xs p-1 px-2 rounded mb-1 shadow-sm border border-black/5 text-gray-900 truncate cursor-pointer hover:opacity-90 transition-opacity"
        style={{ backgroundColor: color }}
    >
      <span className="font-semibold">{assessment.subject}:</span> {assessment.label}
    </button>
  );
}
