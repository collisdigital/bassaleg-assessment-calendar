import { useState, useEffect } from 'react';
import { useData } from './hooks/useData';
import { FilterBar } from './components/FilterBar';
import { CalendarGrid } from './components/CalendarGrid';
import { TimelineView } from './components/TimelineView';
import { ViewSelector } from './components/ViewSelector';
import { ViewMode, Assessment } from './types';
import { Modal } from './components/Modal';

function App() {
  const dataHook = useData();

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

  const handleAssessmentClick = (assessment: Assessment, date: string) => {
    setSelectedAssessment({ data: assessment, date });
  };

  const closeAssessmentModal = () => {
    setSelectedAssessment(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
              {dataHook.filename || import.meta.env.VITE_APP_TITLE}
            </h1>
            <p className="text-gray-500 mt-1">2025-2026 Academic Year</p>
          </div>

          {/* Desktop View Selector */}
          <div className="hidden md:block">
            <ViewSelector currentView={viewMode} onViewChange={setViewMode} />
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
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
          </div>
        </div>
      )}

      <main className="flex-1 max-w-7xl mx-auto w-full p-4">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
          {viewMode === 'timeline' ? (
             <TimelineView
                schedule={dataHook.schedule}
                onAssessmentClick={handleAssessmentClick}
             />
          ) : (
            <CalendarGrid
                schedule={dataHook.schedule}
                viewMode={viewMode}
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
                  const rawColor = selectedAssessment.data.color;
                  // Handle ARGB (8 chars) or RGB (6 chars)
                  const hex = rawColor.length === 8 ? '#' + rawColor.substring(2) : '#' + rawColor;
                  return (
                    <span className="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10 mt-1"
                          style={{ backgroundColor: hex }}>
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
                {selectedAssessment.data.label}
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
                {dataHook.filename || 'Assessment Calendar Spreadsheet'}
              </a>
            ) : (
              'Assessment Calendar Spreadsheet'
            )}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
