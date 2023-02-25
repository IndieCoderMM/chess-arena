import React, { useEffect } from 'react';
import { Col, Container, Row, Stack } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import ChessGame from '../features/chess-game';
import { InfoCard, Validator, StatsCard } from '../features/puzzle';
import { updateCommand } from '../redux/board/boardSlice';
import { getTodayPuzzle } from '../redux/chess/chessSlice';
import styles from './Puzzle.module.css';

const Puzzle = () => {
  const status = useSelector((state) => state.chess.puzzleStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') dispatch(getTodayPuzzle());
  }, [status, dispatch]);

  return (
    <Container
      className="p-3"
      fluid
      style={{ backgroundColor: 'var(--dark-gray)', minHeight: '100vh' }}
    >
      <Row md={2}>
        <Col className="p-1">
          <Stack gap={2}>
            <InfoCard />
            <ChessGame hideEval />
          </Stack>
        </Col>
        <Col className="p-1">
          <StatsCard />
        </Col>
      </Row>
    </Container>
  );
};

export default Puzzle;
