import React from 'react';
import Stack from 'react-bootstrap/Stack';
import styles from './PlayerBar.module.css';

const PlayerBar = ({ name, color, state, time }) => {
  const turn = Object.keys(state)[0];
  const status = Object.values(state)[0];
  const message =
    status === 'lose' ? 'Checkmate!' : status === 'inCheck' ? 'Checked!' : '';
  return (
    <Stack
      direction="horizontal"
      className="justify-content-between bg-light p-1 text-primary"
    >
      <Stack direction="horizontal">
        <div
          className={styles.icon}
          style={{ borderColor: turn === color && 'yellow' }}
        >
          {name.toUpperCase()[0]}
        </div>
        <h3>{name}</h3>
      </Stack>
      {turn !== color && message && <p>{message.toUpperCase()}</p>}
      <div className={styles.clock}>{time}:00</div>
    </Stack>
  );
};

export default PlayerBar;
