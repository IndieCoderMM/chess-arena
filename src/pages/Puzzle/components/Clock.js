import React, { useEffect, useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';

const Clock = ({ start }) => {
  const [timeStamp, setTimestamp] = useState(null);
  const [clock, setClock] = useState('00:00');
  const [running, setRunning] = useState(false);
  const puzzleStatus = useSelector((state) => state.chess.puzzleStatus);

  useEffect(() => {
    if (start) {
      setRunning(true);
      setTimestamp(new Date());
    }
  }, [start]);

  useEffect(() => {
    if (puzzleStatus === 'solved') setRunning(false);
  }, [puzzleStatus]);

  const timePassed = (timeStamp) => {
    const now = new Date();
    const total = Date.parse(now) - Date.parse(timeStamp);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const seconds = Math.floor((total / 1000) % 60);
    return { total, minutes, seconds, now };
  };

  useEffect(() => {
    if (!running) return;
    const timeId = setInterval(() => {
      const { minutes, seconds, now } = timePassed(timeStamp);
      setTimestamp(now);
      setClock(minutes + ':' + seconds);
      console.log('Timer started');
    }, 1000);

    return () => {
      clearInterval(timeId);
      console.log(timeId, ' closed.');
    };
  }, [running, timeStamp]);

  return (
    <Card>
      <Card.Header>Time</Card.Header>
      <Card.Body>
        <Alert>{clock}</Alert>
      </Card.Body>
    </Card>
  );
};

export default Clock;
