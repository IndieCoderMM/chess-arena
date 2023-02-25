import React, { useEffect } from 'react';
import { Col, Container, Row, Stack } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import ChessGame from '../features/chess-game';
import { InfoCard, StatsCard } from '../features/puzzle';
import PuzzleValidator from '../features/engine/components/PuzzleValidator';
import { getTodayPuzzle } from '../redux/chess/chessSlice';

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
            <ChessGame
              width={window.innerWidth < 500 ? window.innerWidth : 500}
            />
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
