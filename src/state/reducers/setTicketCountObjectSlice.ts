import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type TActionPayload = {
  route: 'departure' | 'arrival';
  option: 'adult' | 'children' | 'without-seat';
  value: number;
};

const initialState = {
  maxCount: 6,
  departure: {
    adultCount: 0,
    childrenCount: 0,
    childrenWithoutSeatCount: 0,
    checkedCount: 0,
    freeCount: 6,
  },
  arrival: {
    adultCount: 0,
    childrenCount: 0,
    childrenWithoutSeatCount: 0,
    checkedCount: 0,
    freeCount: 6,
  },
};

export const setTicketCountObjectSlice = createSlice({
  name: 'ticketsCount',
  initialState,
  reducers: {
    setCount: (state, action: PayloadAction<TActionPayload>) => {
      const { route, option, value } = action.payload;

      if (option === 'adult') {
        state[route].adultCount =
          value <= state[route].freeCount ? value : state.maxCount - state[route].childrenCount;
        if (state[route].adultCount * 2 < state[route].childrenWithoutSeatCount) {
          state[route].childrenWithoutSeatCount = state[route].adultCount * 2;
        }
      } else if (option === 'children') {
        state[route].childrenCount =
          value <= state[route].freeCount ? value : state.maxCount - state[route].adultCount;
      } else if (option === 'without-seat') {
        state[route].childrenWithoutSeatCount =
          value > state[route].adultCount * 2 ? state[route].adultCount * 2 : value;
      }

      state[route].checkedCount =
        state[route].adultCount +
        state[route].childrenCount +
        state[route].childrenWithoutSeatCount;

      state[route].freeCount =
        state.maxCount - (state[route].adultCount + state[route].childrenCount);
    },
  },
});

export const { setCount } = setTicketCountObjectSlice.actions;

export const setTicketCountObjectReducer = setTicketCountObjectSlice.reducer;
