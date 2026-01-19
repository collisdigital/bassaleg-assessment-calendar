import { useState, useEffect, useCallback, useRef } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { useData } from '../hooks/useData';
import { FilterBar } from './FilterBar';
import { CalendarGrid } from './CalendarGrid';
import { TimelineView } from './TimelineView';
import { ViewSelector } from './ViewSelector';
import { ViewMode, Assessment } from '../types';
import { Modal } from './Modal';
import { FormattedText } from './FormattedText';
import { Footer } from './Footer';

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
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [showFilterWarning, setShowFilterWarning] = useState(false);
  const timelineScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [viewMode]);

  const [currentMonth, setCurrentMonth] = useState(() => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1);
  });

  const goToNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const goToPrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const goToTodayCalendar = () => {
    setCurrentMonth(new Date(new Date().getFullYear(), new Date().getMonth(), 1));
  };

  const monthLabel = currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' });

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
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center gap-2">
          <div className="flex items-center gap-2 md:gap-4 min-w-0 flex-shrink">
            <Link
                to="/"
                className="text-gray-500 hover:text-blue-600 transition-colors flex-shrink-0"
                title="Return to Year Selection"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
            </Link>
            <div className="min-w-0">
                <h1 className="text-sm md:text-lg font-semibold text-gray-900 tracking-tight leading-tight truncate whitespace-nowrap">
                {dataHook.filename}
                </h1>
            </div>
          </div>

          {/* Month Controls - Visible on all screens unless timeline */}
          {viewMode !== 'timeline' && (
            <div className="flex items-center gap-2 md:gap-4 mx-2">
               <h2 className="text-sm md:text-lg font-semibold text-gray-800 w-28 md:w-40 text-center truncate">{monthLabel}</h2>
               <div className="flex items-stretch rounded-md shadow-sm">
                  <button onClick={goToPrevMonth} className="flex items-center px-2 bg-white border border-gray-300 rounded-l-md hover:bg-gray-50 text-gray-600" aria-label="Previous Month">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                  </button>
                  <button onClick={goToTodayCalendar} className="flex items-center px-3 py-1.5 bg-white border-t border-b border-gray-300 hover:bg-gray-50 text-sm font-medium text-gray-700">
                      Today
                  </button>
                  <button onClick={goToNextMonth} className="flex items-center px-2 bg-white border border-gray-300 rounded-r-md hover:bg-gray-50 text-gray-600" aria-label="Next Month">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </button>
               </div>
            </div>
          )}

          {/* Desktop View Selector & Today Button */}
          <div className="hidden md:flex items-center gap-4">
            
            <button
              onClick={() => setIsFiltersOpen(!isFiltersOpen)}
              className={`flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                isFiltersOpen 
                  ? 'bg-blue-50 text-blue-700 ring-1 ring-blue-700/10' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
              </svg>
              Filters
            </button>
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

        {/* Desktop Filter Bar */}
        {isFiltersOpen && (
          <div className="hidden md:block border-t border-gray-100">
             <FilterBar {...dataHook} className="!sticky-auto !top-auto !shadow-none !border-0 !p-2" />
          </div>
        )}

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
               <ViewSelector 
                 currentView={viewMode} 
                 onViewChange={(view) => {
                   setViewMode(view);
                   setIsMobileMenuOpen(false);
                 }} 
               />
            </div>

            <div>
               <h3 className="text-lg font-semibold text-gray-900 mb-2 px-1">Filter Assessments</h3>
               <FilterBar 
                {...dataHook} 
                setSelectedSubjects={(subjects) => {
                  dataHook.setSelectedSubjects(subjects);
                  setIsMobileMenuOpen(false);
                }}
                setSelectedTypes={(types) => {
                  dataHook.setSelectedTypes(types);
                  setIsMobileMenuOpen(false);
                }}
                clearAllFilters={() => {
                  dataHook.clearAllFilters();
                  setIsMobileMenuOpen(false);
                }}
                className="!static !shadow-none !border-0 !p-0" 
               />
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
                currentMonth={currentMonth}
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

      <Footer
        generatedAt={dataHook.generatedAt}
        filename={dataHook.filename}
        sourceUrl={dataHook.sourceUrl}
      />
    </div>
  );
}
