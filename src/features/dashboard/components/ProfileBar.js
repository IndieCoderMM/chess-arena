import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../firebase';
import { FaUser } from 'react-icons/fa';
import { AiFillSetting } from 'react-icons/ai';
import { RiLogoutBoxFill } from 'react-icons/ri';
import { GrMail } from 'react-icons/gr';
import styles from './ProfileBar.module.css';
import { signOut } from 'firebase/auth';

const ProfileBar = () => {
  const [user] = useAuthState(auth);
  if (!user) return null;
  console.log(user);
  return (
    <div className="d-flex justify-content-between align-items-center p-1">
      <div className="d-flex gap-1 align-items-center">
        <div className={styles.iconFrame}>
          <FaUser className={styles.profileIcon} />
        </div>
        <h3 className={styles.username}>{user.email}</h3>
      </div>
      <div className="d-flex gap-3">
        <button type="button" className={styles.btn}>
          <GrMail className={styles.icon} />
        </button>
        <button type="button" className={styles.btn}>
          <AiFillSetting className={styles.icon} />
        </button>
        <button
          type="button"
          className={styles.btn}
          onClick={() => signOut(auth)}
        >
          <RiLogoutBoxFill className={styles.icon} />
        </button>
      </div>
    </div>
  );
};

export default ProfileBar;
