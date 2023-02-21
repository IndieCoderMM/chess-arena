import React, { useState } from 'react';
import Chessboard from '../features/chess-game/index';

const Practice = () => {
  const [flip, setFlip] = useState(false);
  return (
    <div>
      <Chessboard
        showStatus
        orientation={flip ? 'black' : 'white'}
        width={400}
      />
      <button type="button" onClick={() => setFlip((o) => !o)}>
        Flip Board
      </button>
    </div>
  );
};

export default Practice;
