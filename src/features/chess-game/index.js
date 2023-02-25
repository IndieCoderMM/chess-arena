import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Chessboard from './components/Board';
import EvalBar from './components/EvalBar';
import PlayerBar from './components/PlayerBar';
import { useDispatch, useSelector } from 'react-redux';
import { createPlayers } from '../../redux/board/boardSlice';

const ChessGame = ({
  white,
  black,
  showStatus,
  orientation,
  width,
  time,
  hideEval,
}) => {
  const [state, setState] = useState({ w: 'idle' });
  const score = useSelector((state) => state.board.score);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(createPlayers({ w: white, b: black }));
  }, [dispatch, white, black]);

  const updateStatus = (newState) => {
    setState(newState);
  };

  const flip = orientation === 'black';

  return (
    <Container fluid className="d-flex justify-content-center">
      <Stack direction="horizontal" gap={1}>
        <Stack gap={3}>
          {showStatus && (
            <PlayerBar color={flip ? 'w' : 'b'} state={state} time={time} />
          )}
          <Chessboard
            updateStatus={updateStatus}
            orientation={orientation}
            width={width}
          />
          {showStatus && (
            <PlayerBar color={flip ? 'b' : 'w'} state={state} time={time} />
          )}
        </Stack>
        {!hideEval && <EvalBar score={score} size={width - 50} />}
      </Stack>
    </Container>
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
  hideEval: PropTypes.bool,
  time: PropTypes.number,
  orientation: PropTypes.string,
};

ChessGame.defaultProps = {
  orientation: 'white',
  showStatus: false,
  time: 10,
  flip: false,
  hideEval: false,
  width: 300,
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
