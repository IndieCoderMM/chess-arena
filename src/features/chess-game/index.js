import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Stack from 'react-bootstrap/Stack';
import Chessboard from './components/Board';
import EvalBar from './components/EvalBar';
import PlayerBar from './components/PlayerBar';
import { Col, Row } from 'react-bootstrap';
import MoveDisplay from './components/MoveDisplay';

const ChessGame = ({
  white,
  black,
  showStatus,
  showMoves,
  orientation,
  width,
  time,
}) => {
  const [state, setState] = useState({ w: 'idle' });
  const [evalResult, setEvalResult] = useState(0);
  const [moves, setMoves] = useState([]);

  const updateStatus = (newState, moves, result) => {
    setState(newState);
    setMoves(moves);
    setEvalResult(result);
  };

  const flip = orientation === 'black';

  return (
    <Row
      style={{ width: 'fit-content', border: 'solid 1px green' }}
      className="p-2 m-3"
    >
      <Col>
        <Stack direction="horizontal" gap={2}>
          <Stack>
            {showStatus && (
              <PlayerBar
                name={flip ? white.name : black.name}
                color={flip ? 'w' : 'b'}
                state={state}
                time={time}
              />
            )}
            <Chessboard
              updateStatus={updateStatus}
              orientation={orientation}
              width={width}
            />
            {showStatus && (
              <PlayerBar
                name={flip ? black.name : white.name}
                color={flip ? 'b' : 'w'}
                state={state}
                time={time}
              />
            )}
          </Stack>
          <EvalBar score={evalResult} size={width - 100} />
        </Stack>
      </Col>
      {showMoves && (
        <Col>
          <MoveDisplay moves={moves} />
        </Col>
      )}
    </Row>
  );
};

const Player = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

ChessGame.propTypes = {
  white: PropTypes.shape(Player),
  black: PropTypes.shape(Player),
  showStatus: PropTypes.bool,
  showMoves: PropTypes.bool,
  flip: PropTypes.bool,
  time: PropTypes.number,
};

ChessGame.defaultProps = {
  showStatus: false,
  showMoves: false,
  time: 10,
  flip: false,
  width: 400,
  white: {
    name: 'White',
    rating: 1500,
  },
  black: {
    name: 'Black',
    rating: 1500,
  },
};

export default ChessGame;
