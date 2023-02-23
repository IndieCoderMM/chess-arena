import React from 'react';
import { Alert, Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { updateFen } from '../../../redux/board/boardSlice';
import { changePuzzleStatus } from '../../../redux/chess/chessSlice';

const Intro = () => {
  const status = useSelector((state) => state.chess.puzzleStatus);
  const puzzle = useSelector((state) => state.chess.puzzleData);
  const dispatch = useDispatch();
  const startPuzzle = () => {
    dispatch(changePuzzleStatus('solving'));
    dispatch(updateFen(puzzle.fen));
  };

  return (
    <Card>
      <Card.Header>{puzzle ? puzzle.title : 'Puzzle Title'}</Card.Header>
      <Card.Body>
        {status === 'success' && <Button onClick={startPuzzle}>Start</Button>}
        {status === 'solved' && (
          <Alert variant="success">Congrats... You solved it!</Alert>
        )}
      </Card.Body>
    </Card>
  );
};

export default Intro;
