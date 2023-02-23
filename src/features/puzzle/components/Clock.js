import React, { useEffect, useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';

const Clock = () => {
  const puzzleStatus = useSelector((state) => state.chess.puzzleStatus);
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (puzzleStatus === 'solving') setRunning(true);
    if (puzzleStatus === 'solved') setRunning(false);
  }, [puzzleStatus]);

  useEffect(() => {
    let timeId;
    if (running) {
      timeId = setInterval(() => setTime((t) => t + 1), 1000);
    }
    return () => clearInterval(timeId);
  }, [running, time]);

  const minutes = Math.floor((time % 3600) / 60);
  const seconds = Math.floor(time % 60);

  return (
    <Card>
      <Card.Header>Time</Card.Header>
      <Card.Body>
        <Alert>{`${minutes.toString().padStart(2, '0')}:${seconds
          .toString()
          .padStart(2, '0')}`}</Alert>
      </Card.Body>
    </Card>
  );
};

export default Clock;
