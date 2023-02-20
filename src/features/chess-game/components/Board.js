import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Chessboard } from 'react-chessboard';
import styles from './Chessboard.module.css';
import getHighlightStyle from '../utils/getHighlightStyle';
import parseSquares from '../utils/parseSquares';
import { Chess } from 'chess.js';

function Board({ updateStatus }) {
  const startingPosition = useSelector((state) => state.chess.fen);
  const [game] = useState(new Chess());
  const [fen, setFen] = useState(startingPosition);
  const [selected, setSelected] = useState('');
  const [validMoves, setValidMoves] = useState([]);

  const makeMove = ({ sourceSquare, targetSquare }) => {
    try {
      const move = game.move({
        from: sourceSquare,
        to: targetSquare,
        promotion: 'q',
      });
      if (!move) return;
      setFen(game.fen());
      updateStatus(game.turn(), game.history());
      console.log(game.moves());
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
        const legalSquares = parseSquares(legalMoves);
        setSelected(square);
        setValidMoves(legalSquares);
      }
    }
  };

  const highlighter = getHighlightStyle(validMoves, selected);

  return (
    <div className={styles.container}>
      {game && game.isGameOver() && <h1>Game Over!</h1>}
      <Chessboard
        position={fen}
        onDrop={makeMove}
        onSquareClick={handleMove}
        customSquareStyles={highlighter}
        boardWidth={400}
      />
    </div>
  );
}

export default Board;
