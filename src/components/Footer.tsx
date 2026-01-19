import { formatLastUpdated } from '../utils/dateUtils';

interface FooterProps {
  generatedAt?: string;
  filename?: string;
  sourceUrl?: string;
}

export function Footer({ generatedAt, filename, sourceUrl }: FooterProps) {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-4 text-center text-gray-400 text-sm">
        <div className="flex flex-wrap justify-center items-center gap-y-1 gap-x-3">
          {filename && (
            <span>
              Generated from{' '}
              {sourceUrl ? (
                <a
                  href={sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline decoration-blue-300 hover:decoration-blue-800 transition-colors"
                >
                  {filename}
                </a>
              ) : (
                filename
              )}
            </span>
          )}
          
          {generatedAt && (
            <>
              <span className="hidden sm:inline text-gray-300">•</span>
              <span>
                Last updated {formatLastUpdated(generatedAt)}
              </span>
            </>
          )}

          <span className="hidden sm:inline text-gray-300">•</span>
          <div className="flex items-center gap-3">
            <span>&copy; 2025 Chris Collis</span>
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
                className="w-4 h-4 fill-current"
              >
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-24.4 8.6-44.5 23.6-60.8-2.6-5.6-11.1-29.2 2.2-61.6 0 0 18.8-6.1 61.6 22.8 17.9-5.1 37.1-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 42.8-29.1 61.5-22.8 61.5-22.8 13.3 32.5 4.8 56.1 2.2 61.6 15 16.3 23.6 36.4 23.6 60.8 0 96.6-56.5 104.2-113.1 110.4 9.1 7.9 17.3 23.5 17.3 47.3 0 34.3-.3 62-.3 70.4 0 6.5 4.6 14.8 17.6 12.1C426.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
