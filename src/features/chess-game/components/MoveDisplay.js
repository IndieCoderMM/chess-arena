import React from 'react';
import Badge from 'react-bootstrap/Badge';
import pairMoves from '../utils/pairMoves';
import styles from './MoveDisplay.module.css';

const MoveDisplay = ({ moves }) => {
  const movePairs = pairMoves(moves);
  return (
    <div>
      <h3>Moves({movePairs.length})</h3>
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
