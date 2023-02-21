import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import Chessboard from '../features/chess-game/index';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MoveDisplay from '../features/chess-game/components/MoveDisplay';

const Practice = () => {
  const [flip, setFlip] = useState(false);
  return (
    <Container>
      <Row className="p-2">
        <Col>
          <Chessboard
            showStatus
            showMoves
            orientation={flip ? 'black' : 'white'}
            width={400}
          />
          <Button type="button" onClick={() => setFlip((o) => !o)}>
            Flip Board
          </Button>
        </Col>
        <Col>
          <MoveDisplay />
        </Col>
      </Row>
    </Container>
  );
};

export default Practice;
