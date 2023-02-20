import React, { useState } from 'react';
import Chessboard from './components/Board';
import PlayerBar from './components/PlayerBar';

const ChessGame = () => {
  const [state, setState] = useState({ w: 'idle' });

  const updateStatus = (newState) => {
    setState(newState);
  };

  return (
    <div style={{ width: 'fit-content', border: 'solid 1px green' }}>
      <PlayerBar name="tom" color="b" state={state} />
      <Chessboard updateStatus={updateStatus} />
      <PlayerBar name="jimmy" color="w" state={state} />
    </div>
  );
};

export default ChessGame;
