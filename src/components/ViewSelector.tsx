import { ViewMode } from '../types';

interface ViewSelectorProps {
  currentView: ViewMode;
  onViewChange: (view: ViewMode) => void;
}

export function ViewSelector({ currentView, onViewChange }: ViewSelectorProps) {
  return (
    <div className="flex items-center">
      <select
        value={currentView}
        onChange={(e) => onViewChange(e.target.value as ViewMode)}
        className="block w-40 pl-3 pr-10 py-1.5 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md border bg-white"
      >
        <option value="month-5day">5 Day Week</option>
        <option value="month-7day">7 Day Week</option>
        <option value="timeline">Timeline</option>
      </select>
    </div>
  );
}
