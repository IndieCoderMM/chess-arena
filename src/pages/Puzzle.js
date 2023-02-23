import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ChessGame, { PuzzleValidator } from '../features/chess-game';
import { getTodayPuzzle } from '../redux/chess/chessSlice';
import { updateCommand, updateFen } from '../redux/board/boardSlice';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import Badge from 'react-bootstrap/Badge';

const Puzzle = () => {
  const status = useSelector((state) => state.chess.puzzleStatus);
  const puzzle = useSelector((state) => state.chess.puzzleData);
  const [solving, setSolving] = useState(false);
  const timeRef = useRef(null);
  const [timeStamp, setTimestamp] = useState(null);
  const [clock, setClock] = useState('00:00');
  const dispatch = useDispatch();

  // Get puzzle from API
  useEffect(() => {
    if (status === 'idle') dispatch(getTodayPuzzle());
    if (status === 'solved') setSolving(false);
  }, [status, dispatch]);

  // Reset Board on load
  useEffect(() => {
    dispatch(updateCommand('reset'));
  }, [dispatch]);

  useEffect(() => {
    if (!timeStamp && !solving) return;
    if (timeRef.current) clearInterval(timeRef.current);
    const timePassed = () => {
      const total = Date.parse(new Date()) - Date.parse(timeStamp);
      const minutes = Math.floor((total / 1000 / 60) % 60);
      const seconds = Math.floor((total / 1000) % 60);
      return { total, minutes, seconds };
    };
    const id = setInterval(() => {
      const { minutes, seconds } = timePassed();
      setClock(minutes + ':' + seconds);
    }, 1000);
    timeRef.current = id;
  }, [timeStamp, solving]);

  const startPuzzle = () => {
    dispatch(updateFen(puzzle.fen));
    setSolving(true);
    setTimestamp(new Date());
  };

  return (
    <Container>
      <h2>Daily Puzzle</h2>
      <Card className="p-1">
        <Card.Title>{puzzle ? puzzle.title : 'Puzzle Title'}</Card.Title>
        <Card.Body>
          <Alert>Press Start to start solving the puzzle.</Alert>
          {solving ? (
            <Badge>{clock}</Badge>
          ) : (
            <Button onClick={startPuzzle}>Start</Button>
          )}
        </Card.Body>
      </Card>
      <ChessGame />
      <PuzzleValidator />
    </Container>
  );
};

export default Puzzle;
