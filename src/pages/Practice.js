import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import ChessGame, { MoveDisplay } from '../features/chess-game';
import { updateCommand } from '../redux/board/boardSlice';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const Practice = () => {
  const [flip, setFlip] = useState(false);
  const dispatch = useDispatch();

  const resetBoard = () => {
    dispatch(updateCommand('reset'));
  };

  const undoMove = () => {
    dispatch(updateCommand('undo'));
  };
  // Reset Board on load
  useEffect(() => {
    dispatch(updateCommand('reset'));
  }, [dispatch]);

  return (
    <Container>
      <h2>Practice Mode</h2>
      <p>
        In this page, you can practice Chess with a free board. To draw arrows,
        use right-click-button.
      </p>
      <Row className="p-2">
        <Col>
          <Stack gap={1}>
            <ChessGame orientation={flip ? 'black' : 'white'} width={450} />
            <ButtonGroup>
              <Button type="button" onClick={() => setFlip((o) => !o)}>
                Flip Board
              </Button>
              <Button type="button" onClick={resetBoard}>
                Reset Board
              </Button>
              <Button type="button" onClick={undoMove}>
                Undo Move
              </Button>
            </ButtonGroup>
          </Stack>
        </Col>
        <Col>
          <MoveDisplay />
        </Col>
      </Row>
    </Container>
  );
};

export default Practice;
