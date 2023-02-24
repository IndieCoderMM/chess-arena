import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css';

const menu = [
  {
    name: 'Home',
    path: '/',
    icon: '🏠',
  },
  {
    name: 'Online Match',
    path: '/play/online',
    icon: '🎮',
  },
  {
    name: 'Vs Computer',
    path: '/play/vsAi',
    icon: '🤖',
  },
  {
    name: 'Puzzle',
    path: '/puzzle',
    icon: '🧩',
  },
  {
    name: 'Leaderboard',
    path: '/leaderboard',
    icon: '📑',
  },
  {
    name: 'Practice',
    path: '/practice',
    icon: '♟',
  },
  {
    name: 'Log In',
    path: '/login',
    icon: '💎',
  },
];

const Sidebar = ({ show }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleMenu = () => setCollapsed((state) => !state);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button className={styles.menuBtn} onClick={toggleMenu}>
          ⏸
        </button>
        <h1 className={collapsed ? styles.hide : styles.brand}>ChessArena</h1>
      </div>
      <button
        type="button"
        className={styles.closeBtn}
        onClick={() => show(false)}
      >
        &times;
      </button>
      <div className={styles.menuList}>
        {menu.map((i) => (
          <NavLink key={i.name} to={i.path} className={styles.navLink}>
            <span>{i.icon}</span>
            <span className={collapsed ? styles.hide : ''}>{i.name}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
