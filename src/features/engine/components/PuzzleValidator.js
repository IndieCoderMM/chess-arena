import { Chess } from 'chess.js';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateBoard } from '../../../redux/board/boardSlice';
import { changePuzzleStatus } from '../../../redux/chess/chessSlice';
import getPuzzleSteps from '../../puzzle/utils/getPuzzleSteps';

const PuzzleValidator = () => {
  const moves = useSelector((state) => state.board.moves);
  const puzzle = useSelector((state) => state.chess.puzzleData);
  const status = useSelector((state) => state.chess.puzzleStatus);
  const [game] = useState(new Chess());
  const dispatch = useDispatch();

  const validateSolution = (moves, solution) => {
    if (!moves.length || !solution) return;
    if (moves.length % 2) {
      game.load(puzzle.fen);
      console.log(moves.at(-1), solution[moves.length - 1]);
      if (moves.at(-1) === solution[moves.length - 1]) {
        const nextMove = solution[moves.length];
        if (nextMove === '*') {
          console.log('Solved!');
          return true;
        } else console.log('Correct! Keep going...');
        game.move(nextMove);
        dispatch(updateBoard({ fen: game.fen(), moves: [...moves, nextMove] }));
      } else console.log('Wrong!');
    }
  };
  useEffect(() => {
    if (status !== 'solved' && puzzle) {
      const validation = validateSolution(moves, getPuzzleSteps(puzzle.pgn));
      if (validation) dispatch(changePuzzleStatus('solved'));
    }
  }, [status, moves, dispatch, puzzle]);

  return null;
};

export default PuzzleValidator;
