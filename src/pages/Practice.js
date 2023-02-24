import React from 'react';
import { Link } from 'react-router-dom';
import { FaRobot, FaChessPawn } from 'react-icons/fa';
import styles from './Practice.module.css';

const Training = () => {
  return (
    <div className={styles.container}>
      <div className="d-flex flex-wrap justify-content-center align-items-center h-75 gap-3">
        <Link to="/practice/vsai" className={styles.card}>
          <h3>Vs Computer</h3>
          <FaRobot className={styles.icon} />
          <p>Play with a computer </p>
        </Link>

        <Link to="/practice/solo" className={styles.card}>
          <h3>Solo</h3>
          <FaChessPawn className={styles.icon} />
          <p>Practice solo</p>
        </Link>
      </div>
    </div>
  );
};

export default Training;
