import React from 'react';
import styles from './PlayerBar.module.css';

const PlayerBar = ({ name, isTurn }) => {
  return (
    <div className={styles.container}>
      <div className={styles.icon} style={{ borderColor: isTurn && 'gold' }}>
        {name.toUpperCase()[0]}
      </div>
      <div className={styles.clock}>09:52</div>
    </div>
  );
};

export default PlayerBar;
