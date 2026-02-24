import { createSlice } from '@reduxjs/toolkit';
import type { IDeal } from '../utils/interfaces';

interface DealsState {
  items: IDeal[];
}

const initialState: DealsState = {
  items: [],
};

const dealsSlice = createSlice({
  name: 'deals',
  initialState,
  reducers: {
    setDeals: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setDeals } = dealsSlice.actions;
export default dealsSlice.reducer;
