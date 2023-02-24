import { FaUser } from 'react-icons/fa';
import { FcClock, FcCalendar } from 'react-icons/fc';
import styles from './StatsCard.module.css';

const Stats = () => {
  return (
    <div className={styles.card}>
      <div className={styles.frame}>
        <FaUser />
      </div>
      <div className={styles.group}>
        <h3 className={styles.title}>Personal Best</h3>
        <div className={styles.dataGroup}>
          <FcClock />
          <span className={styles.time}>00:46</span>
        </div>
        <div className={styles.dataGroup}>
          <FcCalendar />
          <span className={styles.date}>9 Mar 2023</span>
        </div>
      </div>
    </div>
  );
};

export default Stats;
