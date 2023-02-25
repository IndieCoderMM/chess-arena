import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import ChessGame, { MoveDisplay } from '../features/chess-game';
import RandomMover from '../features/engine/components/RandomMover';
import { resetBoard } from '../redux/board/boardSlice';
import styles from './PlayAI.module.css';

const PlayAI = () => {
  const white = {
    name: 'You',
    rating: 1500,
  };
  const black = {
    name: 'Computer',
    rating: 3000,
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetBoard());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <Row>
        <Col className="p-1">
          <ChessGame
            white={white}
            black={black}
            width={window.innerWidth < 500 ? window.innerWidth : 500}
            showStatus
            engine={-1}
          />
        </Col>
        <Col className="p-3">
          <MoveDisplay />
        </Col>
      </Row>
      <RandomMover color="b" />
    </div>
  );
};

export default PlayAI;
