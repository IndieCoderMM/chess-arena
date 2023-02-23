import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { makeMove } from '../../../redux/board/boardSlice';
import { changePuzzleStatus } from '../../../redux/chess/chessSlice';
import getPuzzleSteps from '../utils/getPuzzleSteps';

const PuzzleValidator = () => {
  const moves = useSelector((state) => state.board.moves);
  const puzzle = useSelector((state) => state.chess.puzzleData);
  const status = useSelector((state) => state.chess.puzzleStatus);
  const dispatch = useDispatch();

  const validateSolution = (moves, solution) => {
    if (!moves.length || !solution) return;
    if (moves.length % 2) {
      console.log(moves.at(-1), solution[moves.length - 1]);
      if (moves.at(-1) === solution[moves.length - 1]) {
        const nextMove = solution[moves.length];
        console.log('Correct! Keep going...');
        if (nextMove === '*') {
          console.log('Solved!');
          return true;
        }
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
