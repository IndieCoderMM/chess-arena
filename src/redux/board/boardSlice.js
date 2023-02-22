import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fen: 'start',
  moves: [],
  status: 'idle',
  command: '',
};

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    updateFen(state, action) {
      state.fen = action.payload;
    },
    updateMoves(state, action) {
      state.moves = action.payload;
    },
    updateCommand(state, action) {
      state.command = action.payload;
    },
  },
});

export const { updateFen, updateMoves, updateCommand } = boardSlice.actions;

export default boardSlice.reducer;
