import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import ChessService from '../../services/ChessService';

export const getTodayPuzzle = createAsyncThunk('chess/getPuzzle', async () => {
  const res = await ChessService.getDailyPuzzle();
  console.log(res.data);
  return res.data;
});

const initialState = {
  puzzleStatus: 'idle',
  puzzleData: null,
};

const chessSlice = createSlice({
  name: 'chess',
  initialState,
  extraReducers(builder) {
    builder.addCase(getTodayPuzzle.fulfilled, (state, action) => {
      state.puzzleData = action.payload;
      state.puzzleStatus = 'success';
    });
  },
});

export default chessSlice.reducer;
