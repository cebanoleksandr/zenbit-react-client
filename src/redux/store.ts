import { configureStore } from '@reduxjs/toolkit';
import alertSlice from './alertSlice';
import dealsSlice from './dealsSlice';

export const store = configureStore({
  reducer: {
    alert: alertSlice,
    deals: dealsSlice,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
