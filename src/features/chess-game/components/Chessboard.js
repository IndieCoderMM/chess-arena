import ChessBoardJsx from 'chessboardjsx';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Chess } from 'chess.js';

function Chessboard() {
  const game = useRef(null);
  const [fen, setFen] = useState('start');
  const [selected, setSelected] = useState('');
  const [validMoves, setValidMoves] = useState([]);

  useEffect(() => {
    game.current = new Chess();
  }, []);

  const makeMove = ({ sourceSquare, targetSquare }) => {
    try {
      console.log(game.current.moves());
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
  const highlightStyle = {
    backgroundColor: 'rgba(255,235,59,0.5)',
  };
  const handleMove = (square) => {
    if (validMoves.includes?.(square)) {
      makeMove({ sourceSquare: selected, targetSquare: square });
      setValidMoves([]);
      setSelected('');
    } else {
      const piece = game.current.get(square);
      if (piece) {
        const legalMoves = game.current.moves({ square });
        const legalSquares = legalMoves.map((m) =>
          m.length > 2 ? m.slice(m.length - 2) : m,
        );
        setSelected(square);
        setValidMoves(legalSquares);
      }
    }
  };

  const highlighter = {
    ...validMoves.reduce?.((obj, i) => ({ ...obj, [i]: highlightStyle }), {}),
    [selected]: { backgroundColor: 'pink' },
  };

  return (
    <div>
      {game.current && game.current.isGameOver() && <h1>Game Over!</h1>}
      <ChessBoardJsx
        position={fen}
        onDrop={makeMove}
        onSquareClick={handleMove}
        squareStyles={highlighter}
      />
    </div>
  );
}

export default Chessboard;
