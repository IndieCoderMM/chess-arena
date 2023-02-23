import React, { useEffect } from 'react';
import { Button, Col, Container, Row, Stack } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import ChessGame, { MoveDisplay } from '../features/chess-game';
import { InfoCard, Clock, Validator, Stats } from '../features/puzzle';
import { updateCommand } from '../redux/board/boardSlice';
import { getTodayPuzzle } from '../redux/chess/chessSlice';

const Puzzle = () => {
  const status = useSelector((state) => state.chess.puzzleStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') dispatch(getTodayPuzzle());
  }, [status, dispatch]);

  return (
    <Container>
      <h2>Daily Puzzle</h2>
      <Row>
        <Col>
          <InfoCard />
        </Col>
        <Col>
          <Clock />
        </Col>
      </Row>
      <Row className="p-1">
        <Col>
          <ChessGame />
          <Validator />
        </Col>
        <Col>
          <Stack gap={2}>
            <Stats />
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
