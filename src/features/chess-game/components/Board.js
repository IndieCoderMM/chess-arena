import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Chess } from 'chess.js';
import { Chessboard } from 'react-chessboard';
import styles from './Board.module.css';
import getHighlightStyle from '../utils/getHighlightStyle';
import parseSquares, { convertMoveToSquare } from '../utils/parseSquares';
import evaluateFen from '../utils/evaluateFen';
import { updateCommand, updateBoard } from '../../../redux/board/boardSlice';

function Board({ updateStatus, orientation, width }) {
  const fen = useSelector((state) => state.board.fen);
  const moves = useSelector((state) => state.board.moves);
  const command = useSelector((state) => state.board.command);
  const dispatch = useDispatch();
  const [game] = useState(new Chess());
  const [selected, setSelected] = useState('');
  const [moveFrom, setMoveFrom] = useState('');
  const [validMoves, setValidMoves] = useState([]);

  if (fen !== 'start' && fen !== game.fen()) game.load(fen);

  useEffect(() => {
    if (command === 'reset') {
      game.reset();
      setSelected('');
      setMoveFrom('');
      setValidMoves([]);
      dispatch(updateBoard({ fen: 'start', moves: [] }));
    } else if (command === 'undo') {
      const undo = game.undo();
      if (undo) {
        const moves = game.history();
        setSelected('');
        if (moves.length) setMoveFrom(convertMoveToSquare(moves.at(-1)));
        else setMoveFrom('');
        setValidMoves([]);
        dispatch(updateBoard({ fen: game.fen(), moves }));
      }
    }

    dispatch(updateCommand(''));
  }, [command, moves, updateStatus, dispatch, game]);

  const makeMove = ({ sourceSquare, targetSquare }) => {
    try {
      const move = game.move({
        from: sourceSquare,
        to: targetSquare,
        promotion: 'q',
      });
      if (!move) return;
      const score = evaluateFen(game.fen());
      const status = game.isCheckmate()
        ? 'lose'
        : game.inCheck()
        ? 'inCheck'
        : 'idle';
      dispatch(
        updateBoard({
          fen: game.fen(),
          moves: game.history(),
          score,
          status,
        }),
      );
    } catch (err) {
      console.log('Invalid move!', err);
    }
  };

  const handleMove = (square) => {
    if (validMoves.includes?.(square)) {
      makeMove({ sourceSquare: selected, targetSquare: square });
      setValidMoves([]);
      setMoveFrom(selected);
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

  const highlighter = getHighlightStyle(validMoves, selected, moveFrom);

  return (
    <div className={styles.container}>
      <Chessboard
        position={fen}
        onSquareClick={handleMove}
        customSquareStyles={highlighter}
        boardWidth={width}
        arePiecesDraggable={false}
        boardOrientation={orientation}
      />
    </div>
  );
}

export default Board;
