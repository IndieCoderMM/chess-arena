import React from 'react';
import styles from './PlayerBar.module.css';

const PlayerBar = ({ name, color, state, time }) => {
  const turn = Object.keys(state)[0];
  const status = Object.values(state)[0];
  const message =
    status === 'lose' ? 'Checkmate!' : status === 'inCheck' ? 'Checked!' : '';
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div
          className={styles.icon}
          style={{ borderColor: turn === color && 'gold' }}
        >
          {name.toUpperCase()[0]}
        </div>
        <h3>{name}</h3>
      </div>
      {turn !== color && message && <p>{message.toUpperCase()}</p>}
      <div className={styles.clock}>{time}:00</div>
    </div>
  );
};

export default PlayerBar;
