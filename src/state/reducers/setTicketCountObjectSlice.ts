import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
  maxCount: 6,
  adultCount: 0,
  childrenCount: 0,
  childrenWithoutSeatCount: 0,
  checkedCount: 0,
  freeCount: 6,
};

export const setTicketCountObjectSlice = createSlice({
  name: 'ticketsCount',
  initialState,
  reducers: {
    setCount: (
      state,
      action: PayloadAction<{
        option: 'adult' | 'children' | 'without-seat';
        value: number;
      }>
    ) => {
      const { option, value } = action.payload;

      if (option === 'adult') {
        state.adultCount = value <= state.freeCount ? value : state.maxCount - state.childrenCount;
        if (state.adultCount * 2 < state.childrenWithoutSeatCount) {
          state.childrenWithoutSeatCount = state.adultCount * 2;
        }
      } else if (option === 'children') {
        state.childrenCount = value <= state.freeCount ? value : state.maxCount - state.adultCount;
      } else if (option === 'without-seat') {
        state.childrenWithoutSeatCount =
          value > state.adultCount * 2 ? state.adultCount * 2 : value;
      }

      state.checkedCount = state.adultCount + state.childrenCount + state.childrenWithoutSeatCount;

      state.freeCount = state.maxCount - (state.adultCount + state.childrenCount);
    },
  },
});

export const { setCount } = setTicketCountObjectSlice.actions;

export const setTicketCountObjectReducer = setTicketCountObjectSlice.reducer;
