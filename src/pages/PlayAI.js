import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ChessGame, { MoveDisplay } from '../features/chess-game';
import styles from './PlayAI.module.css';

const PlayAI = () => {
  const white = {
    name: 'Human',
    rating: 1500,
  };
  const black = {
    name: 'Computer',
    rating: 3000,
  };
  return (
    <div className={styles.container}>
      <Row>
        <Col>
          <ChessGame white={white} black={black} width={550} showStatus />
        </Col>
        <Col>
          <MoveDisplay />
        </Col>
      </Row>
    </div>
  );
};

export default PlayAI;
