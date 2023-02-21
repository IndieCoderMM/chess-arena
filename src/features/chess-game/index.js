import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Stack from 'react-bootstrap/Stack';
import Chessboard from './components/Board';
import EvalBar from './components/EvalBar';
import PlayerBar from './components/PlayerBar';

const ChessGame = ({ white, black, showStatus, orientation, width, time }) => {
  const [state, setState] = useState({ w: 'idle' });
  const [evalResult, setEvalResult] = useState(0);

  const updateStatus = (newState, result) => {
    setState(newState);
    setEvalResult(result);
  };

  const flip = orientation === 'black';

  return (
    <div className="border bg-secondary">
      <Stack direction="horizontal" gap={2}>
        <Stack className="align-items-center">
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
    </div>
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
  flip: PropTypes.bool,
  time: PropTypes.number,
};

ChessGame.defaultProps = {
  showStatus: false,
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
