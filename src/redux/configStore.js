import { configureStore } from '@reduxjs/toolkit';
import boardReducer from './board/boardSlice';
import chessReducer from './chess/chessSlice';

export default configureStore({
  reducer: {
    board: boardReducer,
    chess: chessReducer,
  },
});
