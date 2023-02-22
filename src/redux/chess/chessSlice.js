import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import ChessService from '../../services/ChessService';

export const getTodayPuzzle = createAsyncThunk('chess/getPuzzle', async () => {
  const res = await ChessService.getDailyPuzzle();
  console.log(res.data);
  return res.data;
});

export const getTopPlayers = createAsyncThunk(
  'chess/getTopPlayers',
  async () => {
    const res = await ChessService.getLeaderboards();
    const { live_blitz } = res.data;
    return live_blitz.slice(0, 20);
  },
);

const initialState = {
  puzzleStatus: 'idle',
  puzzleData: null,
  leaderboardStatus: 'idle',
  leaderboardData: [],
};

const chessSlice = createSlice({
  name: 'chess',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getTodayPuzzle.fulfilled, (state, action) => {
        state.puzzleData = action.payload;
        state.puzzleStatus = 'success';
      })
      .addCase(getTopPlayers.fulfilled, (state, action) => {
        state.leaderboardStatus = 'success';
        state.leaderboardData = action.payload;
      });
  },
});

export default chessSlice.reducer;
