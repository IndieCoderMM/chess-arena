import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import MobileHeader from './components/MobileHeader.js';
import Sidebar from './components/Sidebar.js';
import Home from './pages/Home.js';
import Leaderboard from './pages/Leaderboard.js';
import PlayAI from './pages/PlayAI.js';
import PlayOnline from './pages/PlayOnline.js';
import PlaySolo from './pages/PlaySolo.js';
import Puzzle from './pages/Puzzle';
import Practice from './pages/Practice.js';
import { LoginForm, SignUpForm } from './features/auth/index.js';

function App() {
  const [sidebarDisplay, setSidebarDisplay] = useState(window.innerWidth > 768);

  return (
    <div className="App">
      {sidebarDisplay && <Sidebar show={setSidebarDisplay} />}
      <div className="w-100">
        <MobileHeader showSidebar={setSidebarDisplay} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/play/online" element={<PlayOnline />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/practice/vsai" element={<PlayAI />} />
          <Route path="/practice/solo" element={<PlaySolo />} />
          <Route path="/puzzle" element={<Puzzle />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/account/">
            <Route path="login" element={<LoginForm />} />
            <Route path="signup" element={<SignUpForm />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
