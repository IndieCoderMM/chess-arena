import ChessBoardJsx from 'chessboardjsx';

import React, { useEffect, useRef, useState } from 'react';
import { Chess } from 'chess.js';

function Chessboard() {
  const game = useRef(null);
  const [fen, setFen] = useState('start');
  useEffect(() => {
    game.current = new Chess();
  }, []);
  const onDrop = ({ sourceSquare, targetSquare }) => {
    try {
      const move = game.current.move({
        from: sourceSquare,
        to: targetSquare,
      });
      if (!move) return;
      setFen(game.current.fen());
    } catch (err) {
      console.log('Invalid move!');
    }
  };
  return (
    <div>
      {game.current && game.current.isGameOver() && <h1>Game Over!</h1>}
      <ChessBoardJsx position={fen} onDrop={onDrop} />
    </div>
  );
}

export default Chessboard;
