import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar.js';
import Home from './pages/Home.js';
import Leaderboard from './pages/Leaderboard.js';
import PlayAI from './pages/PlayAI.js';
import PlayOnline from './pages/PlayOnline.js';
import Practice from './pages/Practice.js';
import Puzzle from './pages/Puzzle';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/play/online" element={<PlayOnline />} />
        <Route path="/play/vsAi" element={<PlayAI />} />
        <Route path="/puzzle" element={<Puzzle />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </div>
  );
}

export default App;
