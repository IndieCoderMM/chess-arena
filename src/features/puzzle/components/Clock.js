import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './Clock.module.css';

const Clock = () => {
  const puzzleStatus = useSelector((state) => state.chess.puzzleStatus);
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (puzzleStatus === 'solving') setRunning(true);
    if (puzzleStatus === 'solved') setRunning(false);
  }, [puzzleStatus]);

  useEffect(() => {
    let timeId;
    if (running) {
      timeId = setInterval(() => setTime((t) => t + 1), 1000);
    }
    return () => clearInterval(timeId);
  }, [running, time]);

  const minutes = Math.floor((time % 3600) / 60);
  const seconds = Math.floor(time % 60);

  return (
    <div className={styles.clock}>
      <span className={styles.pad}>
        {`${minutes.toString().padStart(2, '0')}`}
      </span>
      <span className={styles.colon}>:</span>
      <span className={styles.pad}>
        {`${seconds.toString().padStart(2, '0')}`}
      </span>
    </div>
  );
};

export default Clock;
