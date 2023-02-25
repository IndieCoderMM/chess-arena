import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import styles from './MobileHeader.module.css';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { BiLogIn, BiLogOut } from 'react-icons/bi';

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
          <FaBars />
        </button>
        <h1 className={styles.brand}>Chess Arena</h1>
      </div>
      {user ? (
        <button
          type="button"
          className={styles.btn}
          onClick={() => signOut(auth)}
          style={{ backgroundColor: 'var(--bs-red)' }}
        >
          <BiLogOut />
        </button>
      ) : (
        <Link
          to="/login"
          className={styles.btn}
          style={{ backgroundColor: 'var(--bs-green)' }}
        >
          <BiLogIn />
        </Link>
      )}
    </div>
  );
};

export default MobileHeader;
