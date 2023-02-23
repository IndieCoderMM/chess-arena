import React from 'react';
import Stack from 'react-bootstrap/Stack';
import { useSelector } from 'react-redux';
import styles from './PlayerBar.module.css';

const PlayerBar = ({ color, state, time }) => {
  const fen = useSelector((state) => state.board.fen);
  const players = useSelector((state) => state.board.players);
  const status = useSelector((state) => state.board.status);

  const name = players[color].name;
  const turn = fen === 'start' ? 'w' : fen.split(' ')[1];
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
