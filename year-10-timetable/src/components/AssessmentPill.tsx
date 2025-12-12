import { Assessment } from '../types';

interface AssessmentPillProps {
  assessment: Assessment;
  onClick?: () => void;
}

export function AssessmentPill({ assessment, onClick }: AssessmentPillProps) {
  // We can use the color from the assessment, or map it to Tailwind classes if preferred.
  // Since we have hex colors from Excel, we'll use inline styles for the background.
  // We need to ensure text contrast. Most seem light enough for black text, or we can use a helper.

  // ARGB from Excel is FFRRGGBB.
  const hex = assessment.color.length === 8 ? '#' + assessment.color.substring(2) : '#' + assessment.color;

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
