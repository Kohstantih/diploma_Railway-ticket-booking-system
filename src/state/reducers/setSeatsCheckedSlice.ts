import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { TSeatsCheckedSliceSeat, TSeatsCheckedSliceState } from 'types/TSeatsCheckedSliceState';

const initialState: TSeatsCheckedSliceState = {
  departure: null,
  arrival: null,
};

export const setSeatsCheckedSlice = createSlice({
  name: 'seatsChecked',
  initialState,
  reducers: {
    addSeat: (
      state,
      action: PayloadAction<{
        route: 'departure' | 'arrival';
        id: string;
        seatObj: TSeatsCheckedSliceSeat;
      }>
    ) => {
      const { route, id, seatObj } = action.payload;

      if (state[route]?.id !== id) state[route] = null;

      if (state[route] === null) {
        state[route] = {
          id: id,
          seats: [seatObj],
        };
      } else {
        state[route]?.seats.push(seatObj);
      }
    },
    deleteSeat: (
      state,
      action: PayloadAction<{
        route: 'departure' | 'arrival';
        id: string;
        seatObj: TSeatsCheckedSliceSeat;
      }>
    ) => {
      const { route, id, seatObj } = action.payload;

      if (state[route] !== null && state[route]?.id === id) {
        state[route]!.seats = state[route]!.seats.filter(
          (o) => o.coachId !== seatObj.coachId || o.seatNumber !== seatObj.seatNumber
        );

      if (state[route]!.seats.length === 0) state[route] = null;
      }

      
    },
    resetSeatCheckedState: (state, action: PayloadAction<'departure' | 'arrival'>) => {
      state[action.payload] = null;
    },
  },
});

export const { addSeat, deleteSeat, resetSeatCheckedState } = setSeatsCheckedSlice.actions;

export const setSeatsCheckedReducer = setSeatsCheckedSlice.reducer;
