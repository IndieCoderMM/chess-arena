import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import styles from './MobileHeader.module.css';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';

const MobileHeader = ({ showSidebar }) => {
  const [user] = useAuthState(auth);
  return (
    <div className={styles.header}>
      <div className="d-flex align-items-center">
        <button
          type="button"
          className={styles.menuBtn}
          onClick={() => showSidebar(true)}
        >
          ⏸
        </button>
        <h1 className={styles.brand}>Chess Arena</h1>
      </div>
      {user ? (
        <button
          type="button"
          className={styles.btn}
          onClick={() => signOut(auth)}
        >
          Sign Out
        </button>
      ) : (
        <Link to="/login" className={styles.btn}>
          Log In
        </Link>
      )}
    </div>
  );
};

export default MobileHeader;
