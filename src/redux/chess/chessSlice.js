import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fen: 'start',
  moves: [],
  status: 'idle',
};

const chessSlice = createSlice({
  name: 'chess',
  initialState,
  reducers: {
    updateBoard(state, action) {
      state.fen = action.payload;
    },
    addMoves(state, action) {
      state.moves = action.payload;
    },
  },
});

export const { updateBoard, addMoves } = chessSlice.actions;

export default chessSlice.reducer;
