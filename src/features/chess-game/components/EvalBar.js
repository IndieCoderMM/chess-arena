import React from 'react';
import Badge from 'react-bootstrap/Badge';
import styles from './EvalBar.module.css';

const EvalBar = ({ score }) => {
  return (
    <div>
      <div className={styles.container}>
        <div
          className={styles.verticalBar}
          style={{ height: `${50 - (score / 22) * 80}%` }}
        />
      </div>
      <Badge style={{ width: '100%' }}>{score > 0 ? `+${score}` : score}</Badge>
    </div>
  );
};

export default EvalBar;
