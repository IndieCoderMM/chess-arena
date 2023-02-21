import React from 'react';
import Badge from 'react-bootstrap/Badge';
import styles from './EvalBar.module.css';

const EvalBar = ({ score, size }) => {
  const percent = (score / 22) * 80;
  return (
    <div className={styles.container}>
      <div
        className={styles.bar}
        style={{
          height: size,
        }}
      >
        <div
          className={styles.progress}
          style={{
            height: `${50 - percent}%`,
          }}
        />
      </div>
      <Badge className="bg-info">{score > 0 ? `+${score}` : score}</Badge>
    </div>
  );
};

export default EvalBar;
