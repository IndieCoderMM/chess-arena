import React, { useState } from 'react';
import Stack from 'react-bootstrap/Stack';
import Chessboard from './components/Board';
import EvalBar from './components/EvalBar';
import PlayerBar from './components/PlayerBar';

const ChessGame = () => {
  const [state, setState] = useState({ w: 'idle' });
  const [evalResult, setEvalResult] = useState(0);

  const updateStatus = (newState, result) => {
    setState(newState);
    setEvalResult(result);
  };

  return (
    <div
      style={{ width: 'fit-content', border: 'solid 1px green' }}
      className="p-2 m-3"
    >
      <Stack direction="horizontal" gap={2}>
        <Stack>
          <PlayerBar name="tom" color="b" state={state} />
          <Chessboard updateStatus={updateStatus} />
          <PlayerBar name="jimmy" color="w" state={state} />
        </Stack>
        <EvalBar score={evalResult} />
      </Stack>
    </div>
  );
};

export default ChessGame;
