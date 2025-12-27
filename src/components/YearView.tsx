import { useState, useEffect, useCallback, useRef } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { useData } from '../hooks/useData';
import { FilterBar } from './FilterBar';
import { CalendarGrid } from './CalendarGrid';
import { TimelineView } from './TimelineView';
import { ViewSelector } from './ViewSelector';
import { ViewMode, Assessment } from '../types';
import { Modal } from './Modal';
import { formatLastUpdated } from '../utils/dateUtils';
import { FormattedText } from './FormattedText';

// Moved outside component to prevent re-creation on every render
const CalendarDayIcon = ({ day }: { day: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    fill="currentColor"
    className="w-8 h-8"
    aria-hidden="true"
  >
      <path d="M400 64h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V160h352v298c0 3.3-2.7 6-6 6z" />
      <text
        x="220"
        y="340"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="200"
        fontWeight="bold"
        fill="currentColor"
      >
        {day}
      </text>
  </svg>
);

export function YearView() {
  const { yearId } = useParams();
  const dataHook = useData(yearId ?? '');

  // Update Page Title based on Sheet Filename
  useEffect(() => {
    if (dataHook.filename) {
      document.title = dataHook.filename;
    }
  }, [dataHook.filename]);

  // Initialize view mode based on screen width
  const [viewMode, setViewMode] = useState<ViewMode>(() => {
    if (typeof window !== 'undefined') {
        return window.innerWidth < 768 ? 'timeline' : 'month-5day';
    }
    return 'month-5day';
  });

  const [selectedAssessment, setSelectedAssessment] = useState<{data: Assessment, date: string} | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showFilterWarning, setShowFilterWarning] = useState(false);
  const timelineScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // If Timeline view is selected on page load and filters are enabled, show a warning
    const hasFilters = dataHook.selectedSubjects.length > 0 || dataHook.selectedTypes.length > 0;
    if (viewMode === 'timeline' && hasFilters) {
      setShowFilterWarning(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Run only on mount

  // Automatically hide warning if filters are cleared
  useEffect(() => {
    const hasFilters = dataHook.selectedSubjects.length > 0 || dataHook.selectedTypes.length > 0;
    if (!hasFilters) {
      setShowFilterWarning(false);
    }
  }, [dataHook.selectedSubjects.length, dataHook.selectedTypes.length]);

  const handleAssessmentClick = useCallback((assessment: Assessment, date: string) => {
    setSelectedAssessment({ data: assessment, date });
  }, []);

  const closeAssessmentModal = useCallback(() => {
    setSelectedAssessment(null);
  }, []);

  const handleScrollToToday = () => {
    if (timelineScrollRef.current) {
      timelineScrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const todayDate = new Date().getDate();

  // Redirect if invalid year - check ONLY after hooks
  if (!dataHook.yearData) {
      return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <header className="sticky top-0 z-30 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link
                to="/"
                className="text-gray-500 hover:text-blue-600 transition-colors"
                title="Return to Year Selection"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
            </Link>
            <div>
                <h1 className="text-lg md:text-2xl font-bold text-gray-900 tracking-tight leading-tight">
                {dataHook.filename}
                </h1>
                <p className="text-xs md:text-sm text-gray-500">2025-2026 Academic Year</p>
            </div>
          </div>

          {/* Desktop View Selector & Today Button */}
          <div className="hidden md:flex items-center gap-3">
            {viewMode === 'timeline' && (
              <button
                onClick={handleScrollToToday}
                className="text-gray-600 hover:text-gray-900 transition-colors p-1 rounded-md hover:bg-gray-100"
                title="Jump to Today"
                aria-label="Jump to Today"
              >
                <CalendarDayIcon day={todayDate} />
              </button>
            )}
            <ViewSelector currentView={viewMode} onViewChange={setViewMode} />
          </div>

          {/* Mobile Menu Button & Today Button */}
          <div className="md:hidden flex items-center gap-3">
            {viewMode === 'timeline' && (
              <button
                onClick={handleScrollToToday}
                className="text-gray-600 hover:text-gray-900 transition-colors p-1 rounded-md hover:bg-gray-100"
                title="Jump to Today"
                aria-label="Jump to Today"
              >
                <CalendarDayIcon day={todayDate} />
              </button>
            )}
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>

        {/* Filter Warning - Inside Sticky Header */}
        {showFilterWarning && (
          <div className="bg-yellow-50 border-t border-yellow-200 p-3 transition-all duration-300">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center gap-3 px-4">
              <div className="flex items-start gap-3 flex-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0">
                  <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                </svg>
                <div>
                    <h3 className="text-sm font-medium text-yellow-800">Filters Active</h3>
                    <p className="text-xs md:text-sm text-yellow-700">
                      You are viewing a filtered timeline. Some assessments may be hidden.
                    </p>
                </div>
              </div>
              <div className="flex items-center gap-3 pl-8 sm:pl-0">
                 <button
                   type="button"
                   onClick={dataHook.clearAllFilters}
                   className="text-sm font-medium text-yellow-800 hover:text-yellow-900 underline decoration-yellow-800/30 hover:decoration-yellow-900"
                 >
                   Clear all filters
                 </button>
                 <button
                   type="button"
                   onClick={() => setShowFilterWarning(false)}
                   className="text-sm font-medium bg-yellow-100 hover:bg-yellow-200 text-yellow-800 px-3 py-1 rounded-md transition-colors"
                 >
                   Dismiss
                 </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Desktop Filter Bar */}
      <div className="hidden md:block">
        <FilterBar {...dataHook} />
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white overflow-y-auto">
          <div className="flex items-center justify-between px-4 py-6 border-b border-gray-200">
             <div>
                <h2 className="text-xl font-bold text-gray-900">Filters & Options</h2>
             </div>
             <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setIsMobileMenuOpen(false)}
             >
                <span className="sr-only">Close menu</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
             </button>
          </div>

          <div className="p-4 space-y-6">
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
               <ViewSelector currentView={viewMode} onViewChange={setViewMode} />
            </div>

            <div>
               <h3 className="text-lg font-semibold text-gray-900 mb-2 px-1">Filter Assessments</h3>
               <FilterBar {...dataHook} className="!static !shadow-none !border-0 !p-0" />
            </div>

            <div className="pt-6 border-t border-gray-100">
                <Link
                    to="/"
                    className="flex items-center gap-2 text-gray-600 hover:text-blue-600 font-medium"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                    Switch Year Group
                </Link>
            </div>
          </div>
        </div>
      )}

      <main className="flex-1 max-w-7xl mx-auto w-full p-4">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
          {viewMode === 'timeline' ? (
             <TimelineView
                schedule={dataHook.schedule}
                typeColors={dataHook.typeColors}
                onAssessmentClick={handleAssessmentClick}
                scrollRef={timelineScrollRef}
             />
          ) : (
            <CalendarGrid
                schedule={dataHook.schedule}
                viewMode={viewMode}
                typeColors={dataHook.typeColors}
                onAssessmentClick={handleAssessmentClick}
            />
          )}
        </div>
      </main>

      {/* Assessment Details Modal */}
      <Modal
        isOpen={!!selectedAssessment}
        onClose={closeAssessmentModal}
        title="Assessment Details"
      >
        {selectedAssessment && (
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium text-gray-500">Subject</h4>
              <p className="mt-1 text-lg font-semibold text-gray-900">{selectedAssessment.data.subject}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm font-medium text-gray-500">Type</h4>
                {(() => {
                  const color = dataHook.typeColors[selectedAssessment.data.type] || '#E5E7EB';
                  return (
                    <span className="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10 mt-1"
                          style={{ backgroundColor: color }}>
                      {selectedAssessment.data.type}
                    </span>
                  );
                })()}
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-500">Date</h4>
                <p className="mt-1 text-sm text-gray-900">
                  {new Date(selectedAssessment.date).toLocaleDateString(undefined, {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-500">Description</h4>
              <p className="mt-1 text-sm text-gray-900 whitespace-pre-wrap">
                <FormattedText text={selectedAssessment.data.label} />
              </p>
            </div>
          </div>
        )}
      </Modal>

      <footer className="bg-white border-t border-gray-200 mt-auto">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center text-gray-400 text-sm">
          <p>
            Generated from{' '}
            {dataHook.sourceUrl ? (
              <a
                href={dataHook.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline decoration-blue-300 hover:decoration-blue-800 transition-colors"
              >
                {dataHook.filename ?? 'Assessment Calendar Spreadsheet'}
              </a>
            ) : (
              'Assessment Calendar Spreadsheet'
            )}
            {dataHook.generatedAt && (
              <span className="mx-1">
                (last updated {formatLastUpdated(dataHook.generatedAt)})
              </span>
            )}
          </p>
          <div className="mt-4 flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-4">
            <p>&copy; 2025 Chris Collis</p>
            <a
              href="https://github.com/collisdigital/bassaleg-assessment-calendar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="View on GitHub"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
                className="w-5 h-5 fill-current"
              >
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-24.4 8.6-44.5 23.6-60.8-2.6-5.6-11.1-29.2 2.2-61.6 0 0 18.8-6.1 61.6 22.8 17.9-5.1 37.1-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 42.8-29.1 61.5-22.8 61.5-22.8 13.3 32.5 4.8 56.1 2.2 61.6 15 16.3 23.6 36.4 23.6 60.8 0 96.6-56.5 104.2-113.1 110.4 9.1 7.9 17.3 23.5 17.3 47.3 0 34.3-.3 62-.3 70.4 0 6.5 4.6 14.8 17.6 12.1C426.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
