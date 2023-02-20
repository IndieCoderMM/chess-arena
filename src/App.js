import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import Leaderboard from './pages/Leaderboard.js';
import PlayAI from './pages/PlayAI.js';
import PlayOnline from './pages/PlayOnline.js';
import Practice from './pages/Practice.js';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/play/online" element={<PlayOnline />} />
        <Route path="/play/vsAi" element={<PlayAI />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </div>
  );
}

export default App;
