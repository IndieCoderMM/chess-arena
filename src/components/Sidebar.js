import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { FaBars, FaHome, FaChess, FaCrown } from 'react-icons/fa';
import { BsBarChartFill } from 'react-icons/bs';
import { HiPuzzle } from 'react-icons/hi';
import { BiLogOut, BiLogIn } from 'react-icons/bi';
import { auth } from '../firebase';
import styles from './Sidebar.module.css';

const menu = [
  {
    name: 'Home',
    path: '/',
    icon: <FaHome />,
  },
  {
    name: 'Play',
    path: '/play/online',
    icon: <FaChess />,
  },
  {
    name: 'Training',
    path: '/practice',
    icon: <BsBarChartFill />,
  },
  {
    name: 'Puzzle',
    path: '/puzzle',
    icon: <HiPuzzle />,
  },
  {
    name: 'Leaderboard',
    path: '/leaderboard',
    icon: <FaCrown />,
  },
];

const Sidebar = ({ show }) => {
  const [collapsed, setCollapsed] = useState(true);
  const [user] = useAuthState(auth);

  const toggleMenu = () => setCollapsed((state) => !state);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button className={styles.menuBtn} onClick={toggleMenu}>
          <FaBars className={styles.bars} />
        </button>
        <button
          type="button"
          className={styles.closeBtn}
          onClick={() => show(false)}
        >
          &times;
        </button>
        <h1 className={collapsed ? styles.hide : styles.brand}>ChessArena</h1>
      </div>

      <div className={styles.menuList}>
        {menu.map((i) => (
          <NavLink
            key={i.name}
            to={i.path}
            className={styles.navLink}
            onClick={() => {
              if (window.innerWidth <= 768) show(false);
            }}
            style={({ isActive }) =>
              isActive ? { borderLeft: 'solid 4px green' } : null
            }
          >
            {i.icon}
            <span className={collapsed ? styles.hide : ''}>{i.name}</span>
          </NavLink>
        ))}
        {user ? (
          <button
            type="button"
            className={styles.logBtn}
            onClick={() => signOut(auth)}
          >
            <BiLogOut />
            <span className={collapsed ? styles.hide : ''}>Log Out</span>
          </button>
        ) : (
          <Link to="/login" className={styles.logBtn}>
            <BiLogIn />
            <span className={collapsed ? styles.hide : ''}>Log In</span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
