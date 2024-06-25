import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import {
  TSearchOptionDate,
  TSearchOptionFacilities,
  TSearchOptionFilters,
  TSearchOptionHours,
  TSearchOptionPrice,
  TSearchOptionsSlice,
} from 'types/TSearchOptionsSlice';

const initialState: TSearchOptionsSlice = {
  date: { dateStart: '', dateEnd: '', dateStartArrival: '', dateEndArrival: '' },

  hours: {
    startDepartureHourFrom: undefined,
    startDepartureHourTo: undefined,
    startArrivalHourFrom: undefined,
    startArrivalHourTo: undefined,
    endDepartureHourFrom: undefined,
    endDepartureHourTo: undefined,
    endArrivalHourFrom: undefined,
    endArrivalHourTo: undefined,
  },

  facilities: {
    isFirstClass: false,
    isSecondClass: false,
    isThirdClass: false,
    isFourthClass: false,
    isWifi: false,
    isExpress: false,
    isAirConditioning: false,
  },

  price: {
    priceFrom: undefined,
    priceTo: undefined,
  },

  filters: {
    limit: 5,
    offset: 0,
  },

  sort: 'date',
};

export const setSearchOptionsSlice = createSlice({
  name: 'searchOptions',
  initialState,
  reducers: {
    setOptionDate: (
      state,
      action: PayloadAction<{ option: keyof TSearchOptionDate; value: string }>
    ) => {
      state.date[action.payload.option] = action.payload.value;
    },
    setOptionHours: (
      state,
      action: PayloadAction<{ option: keyof TSearchOptionHours; value: number }>
    ) => {
      state.hours[action.payload.option] = action.payload.value;
    },
    setOptionFacilities: (
      state,
      action: PayloadAction<{ option: keyof TSearchOptionFacilities; value: boolean }>
    ) => {
      state.facilities[action.payload.option] = action.payload.value;
    },
    setOptionPrice: (
      state,
      action: PayloadAction<{ option: keyof TSearchOptionPrice; value: number }>
    ) => {
      state.price[action.payload.option] = action.payload.value;
    },
    setOptionFilters: (
      state,
      action: PayloadAction<{ option: keyof TSearchOptionFilters; value: number }>
    ) => {
      state.filters[action.payload.option] = action.payload.value;
    },
    setOptionSort: (state, action) => {
      state.sort = action.payload;
    },
  },
});

export const {
  setOptionDate,
  setOptionHours,
  setOptionFacilities,
  setOptionPrice,
  setOptionFilters,
  setOptionSort,
} = setSearchOptionsSlice.actions;

export const setSearchOptionsReducer = setSearchOptionsSlice.reducer;
