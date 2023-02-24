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
      className="bg-warning text-center p-3"
      fluid
      style={{ minHeight: '100vh' }}
    >
      <Row>
        <Col>
          <InfoCard />
        </Col>
        <Col>
          <StatsCard />
        </Col>
      </Row>

      <Row className="p-1">
        <Col>
          <ChessGame hideEval />
          <Validator />
        </Col>
        <Col>
          <Stack gap={2}>
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
