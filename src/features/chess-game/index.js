import { Chess } from 'chess.js';
import React, { useEffect, useState } from 'react';
import Chessboard from './components/Board';
import PlayerBar from './components/PlayerBar';

const ChessGame = () => {
  const [white, setWhite] = useState({ status: 'idle', turn: true });
  const [black, setBlack] = useState({ status: 'idle', turn: false });
  // const [history, setHistory] = useState([]);

  const updateStatus = (turn, updates) => {
    if (turn === 'w') {
      setWhite((prevState) => ({ ...prevState, ...updates }));
    } else setBlack((prevState) => ({ ...prevState, updates }));
  };
  return (
    <div style={{ width: 'fit-content', border: 'solid 1px green' }}>
      <PlayerBar name="jimmy" isTurn={white.turn} />
      <Chessboard updateStatus={updateStatus} />
      <PlayerBar name="tom" isTurn={black.turn} />
    </div>
  );
};

export default ChessGame;
