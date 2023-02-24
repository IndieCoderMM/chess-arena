import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFen } from '../../../redux/board/boardSlice';
import { changePuzzleStatus } from '../../../redux/chess/chessSlice';
import { FaPuzzlePiece } from 'react-icons/fa';
import styles from './InfoCard.module.css';
import Clock from './Clock';

const Intro = () => {
  const status = useSelector((state) => state.chess.puzzleStatus);
  const puzzle = useSelector((state) => state.chess.puzzleData);
  const dispatch = useDispatch();
  const startPuzzle = () => {
    dispatch(changePuzzleStatus('solving'));
    dispatch(updateFen(puzzle.fen));
  };

  return (
    <div className={styles.card}>
      <FaPuzzlePiece />

      <div>
        <h3 className={styles.title}>
          {puzzle ? puzzle.title : 'Puzzle Title'}
        </h3>
        <p>Press Start to solve the puzzle.</p>
        {status === 'solved' && <p>Congrats... You solved it!</p>}
      </div>
      <div className="d-flex flex-column gap-2">
        <Clock />
        <button
          type="button"
          className={styles.btn}
          disabled={status !== 'success'}
          onClick={startPuzzle}
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default Intro;
