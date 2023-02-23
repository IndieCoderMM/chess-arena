import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ChessGame, { MoveDisplay } from '../features/chess-game';

const PlayAI = () => {
  const white = {
    name: 'Human',
    rating: 1500,
  };
  const black = {
    name: 'Computer',
    rating: 3000,
  };
  return (
    <Container>
      <h2>Play with a Computer Opponent</h2>
      <Row>
        <Col>
          <ChessGame white={white} black={black} showStatus />
        </Col>
        <Col>
          <MoveDisplay />
        </Col>
      </Row>
    </Container>
  );
};

export default PlayAI;
