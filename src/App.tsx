import { MainPage } from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:page" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
