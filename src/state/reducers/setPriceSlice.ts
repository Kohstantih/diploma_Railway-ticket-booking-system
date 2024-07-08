import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { TPriseSliceState, TPriseSliceStateDirection } from 'types/TPriseSliceState';

const initialState: TPriseSliceState = {
  departure: {
    adultPrice: 0,
    childrenPrice: 0,
    total: 0,
  },
  arrival: {
    adultPrice: 0,
    childrenPrice: 0,
    total: 0,
  },
  total: 0,
};

export const setPriceSlice = createSlice({
  name: 'price',
  initialState,
  reducers: {
    setPrice: (
      state,
      action: PayloadAction<{
        section: keyof TPriseSliceState;
        option: keyof TPriseSliceStateDirection;
        value: number;
      }>
    ) => {
      const { section, option, value } = action.payload;

      if (section !== 'total') state[section][option] = value;
      else state[section] = value;

      state.total = state.arrival.total + state.departure.total;
    },
  },
});

export const { setPrice } = setPriceSlice.actions;

export const setPriceReducer = setPriceSlice.reducer;
