import React from 'react';
import Stack from 'react-bootstrap/Stack';
import Sidebar from '../components/Sidebar';
import Chessboard from '../features/chess-game/index';

const Practice = () => {
  return (
    <div>
      <Stack direction="horizontal">
        <Sidebar />
        <Chessboard />
      </Stack>
    </div>
  );
};

export default Practice;
