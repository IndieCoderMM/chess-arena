import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Chess } from 'chess.js';
import { Chessboard } from 'react-chessboard';
import styles from './Board.module.css';
import getHighlightStyle from '../utils/getHighlightStyle';
import parseSquares from '../utils/parseSquares';
import evaluateFen from '../utils/evaluateFen';

function Board({ updateStatus }) {
  const [game] = useState(new Chess());
  const startingPosition = useSelector((state) => state.chess.fen);
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
      const status = game.isCheckmate()
        ? 'lose'
        : game.inCheck()
        ? 'inCheck'
        : 'idle';
      const result = evaluateFen(game.fen());
      updateStatus({ [game.turn()]: status }, result);
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
      <Chessboard
        position={fen}
        onSquareClick={handleMove}
        customSquareStyles={highlighter}
        boardWidth={400}
        arePiecesDraggable={false}
      />
    </div>
  );
}

export default Board;
