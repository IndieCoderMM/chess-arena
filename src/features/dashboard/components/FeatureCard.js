import React from 'react';
import { Link } from 'react-router-dom';
import styles from './FeatureCard.module.css';

const FeatureCard = ({ icon, title, path }) => {
  return (
    <Link to={path} className={styles.card}>
      {icon}
      <h4 className={styles.title}>{title}</h4>
    </Link>
  );
};

export default FeatureCard;
