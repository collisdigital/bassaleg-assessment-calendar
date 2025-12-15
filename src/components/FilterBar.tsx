import { useData } from '../hooks/useData';

interface FilterBarProps extends ReturnType<typeof useData> {
  className?: string;
}

function hexToRgba(hex: string, alpha: number) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export function FilterBar({
  selectedSubjects,
  setSelectedSubjects,
  selectedTypes,
  setSelectedTypes,
  allSubjects,
  allTypes,
  typeColors,
  className = ''
}: FilterBarProps) {

  const toggleSubject = (s: string) => {
    if (selectedSubjects.includes(s)) {
      setSelectedSubjects(selectedSubjects.filter(sub => sub !== s));
    } else {
      setSelectedSubjects([...selectedSubjects, s]);
    }
  };

  const toggleType = (t: string) => {
    if (selectedTypes.includes(t)) {
      setSelectedTypes(selectedTypes.filter(type => type !== t));
    } else {
      setSelectedTypes([...selectedTypes, t]);
    }
  };

  return (
    <div className={`bg-white p-4 shadow-sm border-b border-gray-200 sticky top-0 z-10 ${className}`}>
      <div className="max-w-7xl mx-auto flex flex-col gap-4">

        {/* Filters Container */}
        <div className="flex flex-col md:flex-row gap-6">

          {/* Types Filter */}
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Filter by Type</h3>
            <div className="flex flex-wrap gap-2">
              {allTypes.map(type => {
                const isSelected = selectedTypes.includes(type);
                const color = typeColors[type] || '#e5e7eb'; // Default gray-200

                const style = isSelected
                    ? { backgroundColor: color, borderColor: color }
                    : { backgroundColor: hexToRgba(color, 0.25), borderColor: hexToRgba(color, 0.3) };

                return (
                  <button
                    key={type}
                    onClick={() => toggleType(type)}
                    style={style}
                    aria-pressed={isSelected}
                    className={`px-3 py-1 text-sm rounded-full border transition-colors shadow-sm text-black
                      ${isSelected
                        ? 'font-bold ring-2 ring-offset-1 ring-gray-300'
                        : 'hover:opacity-80'
                      }`}
                  >
                    {type}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Subjects Filter */}
          <div className="flex-[2]">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Filter by Subject</h3>
            <div className="flex flex-wrap gap-2">
              {allSubjects.map(subject => {
                const isSelected = selectedSubjects.includes(subject);
                return (
                  <button
                    key={subject}
                    onClick={() => toggleSubject(subject)}
                    aria-pressed={isSelected}
                    className={`px-3 py-1 text-sm rounded-full border transition-colors
                      ${isSelected
                        ? 'bg-indigo-600 text-white border-indigo-600'
                        : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                      }`}
                  >
                    {subject}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Active Filters Summary (Optional, good for mobile) */}
        {(selectedSubjects.length > 0 || selectedTypes.length > 0) && (
            <div className="flex items-center gap-2 text-sm text-gray-500">
                <span>Active Filters:</span>
                <button
                    onClick={() => { setSelectedSubjects([]); setSelectedTypes([]); }}
                    className="text-red-600 hover:underline"
                >
                    Clear All
                </button>
            </div>
        )}

      </div>
    </div>
  );
}
