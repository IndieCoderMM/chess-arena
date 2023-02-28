import React, { useEffect } from 'react';
import { Col, Container, Row, Stack } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import ChessGame, { MoveDisplay } from '../features/chess-game';
import { InfoCard, StatsCard } from '../features/puzzle';
import PuzzleValidator from '../features/engine/components/PuzzleValidator';
import { getTodayPuzzle } from '../redux/chess/chessSlice';
import { resetBoard } from '../redux/board/boardSlice';

const Puzzle = () => {
  const puzzle = useSelector((state) => state.chess.puzzleData);
  const status = useSelector((state) => state.chess.puzzleStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetBoard());
  }, [dispatch]);

  useEffect(() => {
    if (status === 'idle') dispatch(getTodayPuzzle());
  }, [status, dispatch]);

  const turn = puzzle?.fen.split(' ')[1];

  return (
    <Container
      className="p-3"
      fluid
      style={{ backgroundColor: 'var(--dark-gray)', minHeight: '100vh' }}
    >
      <PuzzleValidator />
      <Row md={2}>
        <Col className="p-1">
          <Stack gap={2}>
            <InfoCard />
            <ChessGame
              orientation={turn && turn === 'b' ? 'black' : 'white'}
              width={window.innerWidth < 500 ? window.innerWidth : 500}
            />
          </Stack>
        </Col>
        <Col className="p-1">
          <Stack gap={2}>
            <StatsCard />
            <MoveDisplay />
          </Stack>
        </Col>
      </Row>
    </Container>
  );
};

export default Puzzle;
