import React from 'react';
import styles from './Button.module.css';

const Button = ({ isActive, changeMethod, icon, text }) => {
  return (
    <button
      type="button"
      className={isActive ? styles.activeBtn : styles.btn}
      onClick={changeMethod}
    >
      {icon}
      <span>{text}</span>
    </button>
  );
};

export default Button;
