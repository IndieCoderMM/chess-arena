import React from 'react';
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
      <div className={styles.badge}>{score > 0 ? `+${score}` : score}</div>
    </div>
  );
};

export default EvalBar;
