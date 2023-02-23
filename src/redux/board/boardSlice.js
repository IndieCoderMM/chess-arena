import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fen: 'start',
  moves: [],
  players: {
    w: {
      name: '',
      rating: 0,
    },
    b: {
      name: '',
      rating: 0,
    },
  },
  status: 'idle',
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
    createPlayers(state, action) {
      state.players = action.payload;
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
  updateCommand,
  makeMove,
  createPlayers,
} = boardSlice.actions;

export default boardSlice.reducer;
