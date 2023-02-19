import { configureStore } from '@reduxjs/toolkit';
import chessReducer from './chess/chessSlice';

export default configureStore({
  reducer: {
    chess: chessReducer,
  },
});
