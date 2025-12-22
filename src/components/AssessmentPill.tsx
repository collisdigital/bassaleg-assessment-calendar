import { Assessment } from '../types';
import { normalizeHexColor } from '../utils/colorUtils';

interface AssessmentPillProps {
  assessment: Assessment;
  onClick?: () => void;
}

export function AssessmentPill({ assessment, onClick }: AssessmentPillProps) {
  const hex = normalizeHexColor(assessment.color);

  return (
    <button
        type="button"
        onClick={onClick}
        className="w-full text-left text-xs p-1 px-2 rounded mb-1 shadow-sm border border-black/5 text-gray-900 truncate cursor-pointer hover:opacity-90 transition-opacity"
        style={{ backgroundColor: hex }}
    >
      <span className="font-semibold">{assessment.subject}:</span> {assessment.label}
    </button>
  );
}
