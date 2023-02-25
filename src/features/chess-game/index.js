import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Chessboard from './components/Board';
import EvalBar from './components/EvalBar';
import PlayerBar from './components/PlayerBar';
import { useDispatch, useSelector } from 'react-redux';
import { createPlayers } from '../../redux/board/boardSlice';
import RandomMover from '../engine/components/RandomMover';

const ChessGame = ({
  white,
  black,
  showStatus,
  orientation,
  width,
  time,
  hideEval,
  engine,
}) => {
  const score = useSelector((state) => state.board.score);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(createPlayers({ w: white, b: black }));
  }, [dispatch, white, black]);

  const flip = orientation === 'black';

  return (
    <Container fluid className="d-flex justify-content-center">
      <Stack direction="horizontal" gap={1}>
        <Stack gap={3} className="align-items-center">
          {showStatus && <PlayerBar color={flip ? 'w' : 'b'} time={time} />}
          <Chessboard orientation={orientation} width={width - 20} />
          {showStatus && <PlayerBar color={flip ? 'b' : 'w'} time={time} />}
        </Stack>
        {!hideEval && width > 500 && (
          <EvalBar score={score} size={width - 50} />
        )}
      </Stack>
      {engine !== 0 ? <RandomMover color={engine < 0 ? 'b' : 'a'} /> : null}
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
  engine: PropTypes.number,
  orientation: PropTypes.string,
};

ChessGame.defaultProps = {
  orientation: 'white',
  showStatus: false,
  time: 10,
  flip: false,
  hideEval: false,
  width: 300,
  engine: 0,
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
