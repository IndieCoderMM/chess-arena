import React, { useEffect } from 'react';
import { Button, Col, Container, Row, Stack } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import ChessGame, { MoveDisplay } from '../features/chess-game';
import { InfoCard, Validator, StatsCard } from '../features/puzzle';
import { updateCommand } from '../redux/board/boardSlice';
import { getTodayPuzzle } from '../redux/chess/chessSlice';

const Puzzle = () => {
  const status = useSelector((state) => state.chess.puzzleStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') dispatch(getTodayPuzzle());
  }, [status, dispatch]);

  return (
    <Container
      className="text-center p-3"
      fluid
      style={{ backgroundColor: 'var(--dark-gray)', minHeight: '100vh' }}
    >
      <Row md={2} className="align-content-center">
        <Col>
          <div className="d-flex flex-column gap-2">
            <InfoCard />
            <ChessGame hideEval />
          </div>
        </Col>
        <Col>
          <Stack gap={2}>
            <StatsCard />
            <MoveDisplay />
            <Button onClick={() => dispatch(updateCommand('undo'))}>
              Undo Move
            </Button>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
};

export default Puzzle;
