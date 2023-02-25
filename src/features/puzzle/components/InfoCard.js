import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetBoard, updateBoard } from '../../../redux/board/boardSlice';
import { changePuzzleStatus } from '../../../redux/chess/chessSlice';
import { FaCalendarCheck, FaChessPawn, FaPuzzlePiece } from 'react-icons/fa';
import styles from './InfoCard.module.css';
import { Link } from 'react-router-dom';

const Intro = () => {
  const status = useSelector((state) => state.chess.puzzleStatus);
  const puzzle = useSelector((state) => state.chess.puzzleData);
  const dispatch = useDispatch();
  const startPuzzle = () => {
    dispatch(changePuzzleStatus('solving'));
    dispatch(updateBoard({ fen: puzzle.fen }));
  };

  const resetPuzzle = () => {
    dispatch(resetBoard());
    dispatch(updateBoard({ fen: puzzle.fen }));
  };

  return (
    <div className={styles.card}>
      <div className="d-flex gap-1">
        <FaPuzzlePiece className={styles.icon} />
        <div>
          <h3 className={styles.title}>
            {puzzle ? puzzle.title : 'Puzzle Title'}
          </h3>
          <div className="d-flex align-items-center">
            <FaCalendarCheck style={{ color: 'var(--bs-blue)' }} />
            <span>
              {puzzle && new Date(puzzle.publish_time * 1000).toDateString()}
            </span>
          </div>
          <div className="d-flex align-items-center">
            <FaChessPawn style={{ color: 'var(--bs-green)' }} />
            <span>{puzzle && <Link to={puzzle.url}>From Chess.com</Link>}</span>
          </div>
        </div>
      </div>
      <div className={styles.btnGroup}>
        {status === 'success' ? (
          <button type="button" className={styles.btn} onClick={startPuzzle}>
            Start
          </button>
        ) : (
          <button type="button" className={styles.btn} onClick={resetPuzzle}>
            Reset
          </button>
        )}
      </div>
    </div>
  );
};

export default Intro;
