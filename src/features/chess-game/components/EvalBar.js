import React from 'react';
import Badge from 'react-bootstrap/Badge';
import styles from './EvalBar.module.css';

const EvalBar = ({ score, size }) => {
  const percent = (score / 22) * 80;
  return (
    <div>
      <div
        className={styles.container}
        style={{
          height: size,
        }}
      >
        <div
          className={styles.verticalBar}
          style={{
            height: `${50 - percent}%`,
          }}
        />
      </div>
      <Badge style={{ width: '100%' }}>{score > 0 ? `+${score}` : score}</Badge>
    </div>
  );
};

export default EvalBar;
