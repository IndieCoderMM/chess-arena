import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import Chessboard from '../features/chess-game/index';
import Container from 'react-bootstrap/Container';

const Practice = () => {
  const [flip, setFlip] = useState(false);
  return (
    <Container>
      <Chessboard
        showStatus
        showMoves
        orientation={flip ? 'black' : 'white'}
        width={400}
      />
      <Button type="button" onClick={() => setFlip((o) => !o)}>
        Flip Board
      </Button>
    </Container>
  );
};

export default Practice;
