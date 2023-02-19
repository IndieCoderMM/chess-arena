import { Chess } from 'chess.js';
import React, { useEffect, useState } from 'react';
import Chessboard from './components/Chessboard';

const ChessGame = () => {
  const [game, setGame] = useState(null);
  const [turn, setTurn] = useState('w');
  const [history, setHistory] = useState([]);
  useEffect(() => {
    setGame(new Chess());
  }, []);
  const updateStatus = (turn, history) => {
    setTurn(turn);
    setHistory(history);
  };
  return (
    <div>
      {game && (
        <>
          <h2>Turn: {turn}</h2>
          <p>{history.map((m) => m.concat(','))}</p>
          <Chessboard game={game} updateStatus={updateStatus} />
        </>
      )}
    </div>
  );
};

export default ChessGame;
