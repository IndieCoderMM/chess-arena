import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fen: 'start',
};

const chessSlice = createSlice({
  name: 'chess',
  initialState,
  reducers: {
    updateBoard(state, action) {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateBoard } = chessSlice.actions;

export default chessSlice.reducer;
