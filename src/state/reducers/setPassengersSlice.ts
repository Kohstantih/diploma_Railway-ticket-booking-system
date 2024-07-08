import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import {
  TPassengersSliceState,
  TPassengersSliceStateData,
  TPassengersSliceStateStatuses,
} from 'types/TPassengersSliceState';

const initialState: TPassengersSliceState = {
  passengers: [],
};

export const setPassengersSlice = createSlice({
  name: 'passengers',
  initialState,
  reducers: {
    addPassenger: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;
      if (!state.passengers.find((p) => p.id === id)) {
        state.passengers.push({
          id,
          data: {
            firstName: '',
            lastName: '',
            patronymic: '',
            birthday: '',
            documentType: 'passport',
            documentData: '',
          },
          statuses: {
            isAdult: true,
            isChild: false,
            includeChildrenSeat: false,
            gender: true,
            isValid: false,
          },
        });
      }
    },
    setPassengerStatus: (
      state,
      action: PayloadAction<{
        id: string;
        option: keyof TPassengersSliceStateStatuses;
        value: boolean;
      }>
    ) => {
      const { id, option, value } = action.payload;
      const section = state.passengers.find((p) => p.id === id);

      if (section) section.statuses[option] = value;
    },
    setPassengerData: (
      state,
      action: PayloadAction<{
        id: string;
        option: keyof TPassengersSliceStateData;
        value: string;
      }>
    ) => {
      const { id, option, value } = action.payload;
      const section = state.passengers.find((p) => p.id === id);

      if (section) section.data[option] = value;
    },
    delPassenger: (state, action: PayloadAction<{ id: string }>) => {
      state.passengers = state.passengers.filter((p) => p.id !== action.payload.id);
    },
  },
});

export const { addPassenger, setPassengerStatus, setPassengerData, delPassenger } =
  setPassengersSlice.actions;

export const setPassengersReducer = setPassengersSlice.reducer;
