import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { YearSelector } from './components/YearSelector';
import { YearView } from './components/YearView';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<YearSelector />} />
        <Route path="/:yearId" element={<YearView />} />
        {/* Redirect unknown routes to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
