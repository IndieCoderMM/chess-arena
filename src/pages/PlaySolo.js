import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import ChessGame, { MoveDisplay } from '../features/chess-game';
import { updateCommand } from '../redux/board/boardSlice';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import styles from './PlaySolo.module.css';

const PlaySolo = () => {
  const [flip, setFlip] = useState(false);
  const dispatch = useDispatch();

  const resetBoard = () => {
    dispatch(updateCommand('reset'));
  };

  const undoMove = () => {
    dispatch(updateCommand('undo'));
  };
  // Reset Board on load
  useEffect(() => {
    dispatch(updateCommand('reset'));
  }, [dispatch]);

  return (
    <Container
      fluid
      style={{ backgroundColor: 'var(--dark-gray)', minHeight: '100vh' }}
    >
      <Row className="p-2">
        <Col>
          <ChessGame
            showStatus
            orientation={flip ? 'black' : 'white'}
            width={window.innerWidth < 500 ? window.innerWidth : 500}
          />
        </Col>
        <Col className="p-3">
          <Stack gap={1}>
            <MoveDisplay />
            <div className={styles.btnGroup}>
              <button
                className={styles.button}
                type="button"
                onClick={() => setFlip((o) => !o)}
              >
                Flip Board
              </button>
              <button
                className={styles.button}
                type="button"
                onClick={resetBoard}
              >
                Reset Board
              </button>
              <button
                className={styles.button}
                type="button"
                onClick={undoMove}
              >
                Undo Move
              </button>
            </div>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
};

export default PlaySolo;
