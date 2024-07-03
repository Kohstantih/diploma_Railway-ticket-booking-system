import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { TPriseSliceState } from 'types/TPriseSliceState';

const initialState: TPriseSliceState = {
  departure: 0,
  arrival: 0,
  total: 0,
};

export const setPriceSlice = createSlice({
  name: 'price',
  initialState,
  reducers: {
    setPrice: (state, action: PayloadAction<{ option: keyof TPriseSliceState; value: number }>) => {
      const { option, value } = action.payload;
      state[option] = value;
      state.total = state.arrival + state.departure;
    },
  },
});

export const { setPrice } = setPriceSlice.actions;

export const setPriceReducer = setPriceSlice.reducer;
