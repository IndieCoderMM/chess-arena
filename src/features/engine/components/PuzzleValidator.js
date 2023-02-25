import { Chess } from 'chess.js';
import { useEffect, useState } from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { updateBoard } from '../../../redux/board/boardSlice';
import { changePuzzleStatus } from '../../../redux/chess/chessSlice';
import getPuzzleSteps from '../../puzzle/utils/getPuzzleSteps';

const PuzzleValidator = () => {
  const moves = useSelector((state) => state.board.moves);
  const puzzle = useSelector((state) => state.chess.puzzleData);
  const fen = useSelector((state) => state.board.fen);
  const status = useSelector((state) => state.chess.puzzleStatus);
  const [game] = useState(new Chess());
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const validateSolution = (moves, solution) => {
    if (!moves.length || !solution) return;
    // console.log(moves);
    if (moves.length % 2) {
      game.load(fen);
      // console.log(moves.at(-1), solution[moves.length - 1]);
      if (moves.at(-1) === solution[moves.length - 1]) {
        const nextMove = solution[moves.length];
        if (nextMove === '*') {
          setTitle('Puzzle Solved!');
          setMessage("You solved today's puzzle successfully! 🎉🎈🎊");
          setShow(true);
          return true;
        }
        game.move(nextMove);
        dispatch(updateBoard({ fen: game.fen(), moves: [...moves, nextMove] }));
      } else {
        // Wrong Move! Need to undo
        setTitle('Wrong Move!');
        setMessage('Sorry! You played the wrong move. Reset and try again!');
        setShow(true);
      }
    }
  };
  useEffect(() => {
    if (status !== 'solved' && puzzle) {
      const validation = validateSolution(moves, getPuzzleSteps(puzzle.pgn));
      if (validation) dispatch(changePuzzleStatus('solved'));
    }
  }, [status, moves, dispatch, puzzle]);

  return (
    <ToastContainer>
      <Toast show={show} onClose={() => setShow(false)} delay={3000} autohide>
        <Toast.Header>
          <strong>{title}</strong>
        </Toast.Header>
        <Toast.Body>{message}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default PuzzleValidator;
