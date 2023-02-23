import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Stack from 'react-bootstrap/Stack';
import Chessboard from './components/Board';
import EvalBar from './components/EvalBar';
import PlayerBar from './components/PlayerBar';
import { useSelector } from 'react-redux';

const ChessGame = ({ white, black, showStatus, orientation, width, time }) => {
  const [state, setState] = useState({ w: 'idle' });
  const score = useSelector((state) => state.board.score);

  const updateStatus = (newState) => {
    setState(newState);
  };

  const flip = orientation === 'black';

  return (
    <div>
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
        <EvalBar score={score} size={width - 100} />
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
  orientation: PropTypes.string,
};

ChessGame.defaultProps = {
  orientation: 'white',
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
export { default as MoveDisplay } from './components/MoveDisplay';
export { default as PuzzleValidator } from './components/PuzzleValidator';
