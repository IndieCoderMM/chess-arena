import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ChessBoardJsx from 'chessboardjsx';
import styles from './Chessboard.module.css';
import getHighlightStyle from '../utils/getHighlightStyle';

function Chessboard({ game, updateStatus }) {
  const startingPosition = useSelector((state) => state.chess.fen);
  const [fen, setFen] = useState(startingPosition);
  const [selected, setSelected] = useState('');
  const [validMoves, setValidMoves] = useState([]);

  const makeMove = ({ sourceSquare, targetSquare }) => {
    try {
      const move = game.move({
        from: sourceSquare,
        to: targetSquare,
      });
      if (!move) return;
      setFen(game.fen());
      updateStatus(game.turn(), game.history());
    } catch (err) {
      console.log('Invalid move!', err);
    }
  };

  const handleMove = (square) => {
    if (validMoves.includes?.(square)) {
      makeMove({ sourceSquare: selected, targetSquare: square });
      setValidMoves([]);
      setSelected('');
    } else {
      const piece = game.get(square);
      if (piece) {
        const legalMoves = game.moves({ square });
        const legalSquares = legalMoves.map((m) =>
          m.length > 2 ? m.slice(m.length - 2) : m,
        );
        setSelected(square);
        setValidMoves(legalSquares);
      }
    }
  };

  const highlighter = getHighlightStyle(validMoves, selected);

  return (
    <div className={styles.container}>
      {game && game.isGameOver() && <h1>Game Over!</h1>}
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
