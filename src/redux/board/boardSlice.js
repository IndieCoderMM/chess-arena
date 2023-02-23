import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fen: 'start',
  moves: [],
  status: 'idle',
  turn: '',
  score: 0,
  command: '',
};

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    updateBoard(state, action) {
      return { ...state, ...action.payload };
    },
    updateFen(state, action) {
      state.fen = action.payload;
      state.turn = state.fen === 'start' ? 'w' : state.fen.split(' ')[1];
    },
    updateMoves(state, action) {
      state.moves = action.payload;
    },
    updateScore(state, action) {
      state.score = action.payload;
    },
    updateCommand(state, action) {
      state.command = action.payload;
    },
    makeMove(state, action) {
      state.command = 'move';
      state.moves.push(action.payload);
    },
  },
});

export const {
  updateBoard,
  updateFen,
  updateMoves,
  updateCommand,
  updateScore,
  makeMove,
} = boardSlice.actions;

export default boardSlice.reducer;
