import { Chess } from 'chess.js';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateBoard } from '../../../redux/board/boardSlice';

const RandomMover = ({ color }) => {
  const [game] = useState(new Chess());
  const fen = useSelector((state) => state.board.fen);
  const moves = useSelector((state) => state.board.moves);
  const turn = fen === 'start' ? 'w' : fen.split(' ')[1];
  const dispatch = useDispatch();
  if (fen !== 'start' && fen !== game.fen()) game.load(fen);

  const makeRandomMove = () => {
    const legalMoves = game.moves();
    if (legalMoves.length === 0) return;
    const randomMove =
      legalMoves[Math.floor(Math.random() * legalMoves.length)];
    game.move(randomMove);

    dispatch(updateBoard({ fen: game.fen(), moves: [...moves, randomMove] }));
  };
  useEffect(() => {
    if (color === turn) makeRandomMove();
  }, [turn]);

  return null;
};

export default RandomMover;
