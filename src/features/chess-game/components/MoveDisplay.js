import React from 'react';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';
import pairMoves from '../utils/pairMoves';
import styles from './MoveDisplay.module.css';

const MoveDisplay = () => {
  const moves = useSelector((state) => state.board.moves);
  const movePairs = pairMoves(moves);
  return (
    <div className={styles.card}>
      <header>Moves({movePairs.length})</header>
      <div className={styles.container}>
        {movePairs.map((m, i) => (
          <Badge key={m}>
            <span>{i + 1}.</span>
            <span>{m}</span>
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default MoveDisplay;
