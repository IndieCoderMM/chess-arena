import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ChessGame, {
  MoveDisplay,
  PuzzleValidator,
} from '../../features/chess-game';
import { getTodayPuzzle } from '../../redux/chess/chessSlice';
import { updateCommand, updateFen } from '../../redux/board/boardSlice';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Alert, Col, Row, Stack } from 'react-bootstrap';
import Stats from './components/Stats';
import Clock from './components/Clock';

const Puzzle = () => {
  const status = useSelector((state) => state.chess.puzzleStatus);
  const puzzle = useSelector((state) => state.chess.puzzleData);
  const [solving, setSolving] = useState(false);

  const dispatch = useDispatch();

  // Get puzzle from API
  useEffect(() => {
    if (status === 'idle') dispatch(getTodayPuzzle());
    if (status === 'solved') setSolving(false);
  }, [status, dispatch]);

  // Reset Board on load
  useEffect(() => {
    dispatch(updateCommand('reset'));
    console.count('Board resetted: ');
  }, [dispatch]);

  const startPuzzle = () => {
    dispatch(updateFen(puzzle.fen));
    setSolving(true);
  };

  return (
    <Container>
      <h2>Daily Puzzle</h2>
      <Stack>
        <Row>
          <Col>
            <Card>
              <Card.Header>
                {puzzle ? puzzle.title : 'Puzzle Title'}
              </Card.Header>
              <Card.Body>
                {!solving && status !== 'solved' && (
                  <Button onClick={startPuzzle}>Start</Button>
                )}
                {status === 'solved' && (
                  <Alert variant="success">Congrats... You solved it!</Alert>
                )}
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Clock start={solving} />
          </Col>
        </Row>
        <Row className="p-1">
          <Col>
            <ChessGame />
            <PuzzleValidator />
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
      </Stack>
    </Container>
  );
};

export default Puzzle;
