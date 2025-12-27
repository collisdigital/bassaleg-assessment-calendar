import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAllYears, useAppMetadata } from '../hooks/useData';
import { Footer } from './Footer';

export function YearSelector() {
  const years = useAllYears();
  const { generatedAt } = useAppMetadata();

  useEffect(() => {
    document.title = 'Bassaleg Assessment Calendars';
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <div className="flex-grow flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Bassaleg Assessment Calendars</h1>
        <div className="grid gap-6 w-full max-w-md">
          {years.map(year => (
            <Link
              key={year.id}
              to={`/${year.id}`}
              className="block p-8 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md hover:border-blue-300 hover:-translate-y-1 transition-all duration-200 text-center"
            >
              <h2 className="text-2xl font-semibold text-blue-600 mb-2">{year.name}</h2>
              <p className="text-gray-500">Assessment Calendar</p>
            </Link>
          ))}
        </div>
      </div>
      <Footer generatedAt={generatedAt} />
    </div>
  );
}
