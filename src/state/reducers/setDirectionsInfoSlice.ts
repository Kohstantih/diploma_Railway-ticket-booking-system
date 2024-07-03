import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { TDirectionsInfoSlice } from 'types/TDirectionSlice';
import { TDirectionString } from 'types/TDirectionString';
import { TCityObject } from 'types/TRouteObject';

const initialState: TDirectionsInfoSlice = {
  from: {
    city: { _id: '', name: '' },
  },
  to: {
    city: { _id: '', name: '' },
  },
};

export const setDirectionsInfoSlice = createSlice({
  name: 'directionFrom',
  initialState,
  reducers: {
    setCity: (state, action: PayloadAction<{ direction: TDirectionString; city: TCityObject }>) => {
      state[action.payload.direction].city = action.payload.city;
    },
    clearCity: (state, action: PayloadAction<TDirectionString>) => {
      state[action.payload].city = { _id: '', name: '' };
    },
    switchCity: (state) => {
      const fromCity = state.from.city;
      const toCity = state.to.city;

      state.from.city = toCity;
      state.to.city = fromCity;
    },
  },
});

export const { setCity, clearCity, switchCity } = setDirectionsInfoSlice.actions;

export const setDirectionsInfoReducer = setDirectionsInfoSlice.reducer;
