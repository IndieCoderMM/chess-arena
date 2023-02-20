import { Chess } from 'chess.js';
import React, { useEffect, useState } from 'react';
import Chessboard from './components/Board';

const ChessGame = () => {
  const [turn, setTurn] = useState('w');
  const [history, setHistory] = useState([]);

  const updateStatus = (turn, history) => {
    setTurn(turn);
    setHistory(history);
  };
  return (
    <div>
      <h2>Turn: {turn}</h2>
      <p>{history.map((m) => m.concat(','))}</p>
      <Chessboard updateStatus={updateStatus} />
    </div>
  );
};

export default ChessGame;
