import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TUserForm } from 'types/TUserForm';

import { TUserInfoSliceState } from 'types/TUserInfoSliceState';

const initialState: TUserInfoSliceState = {
  user: {
    surname: '',
    name: '',
    patronymic: '',
    phone: '',
    mail: '',
  },
  isOnline: true,
  isCash: false,
  rating: 0,
};

export const setUserInfoSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUSerData: (
      state,
      action: PayloadAction<{
        option: keyof TUserForm;
        value: string;
      }>
    ) => {
      const { option, value } = action.payload;

      state.user[option] = value;
    },
    setIsOnline: (state) => {
      state.isOnline = true;
      state.isCash = false;
    },
    setIsCash: (state) => {
      state.isOnline = false;
      state.isCash = true;
    },
    setRating: (state, action) => {
      state.rating = action.payload;
    },
  },
});

export const { setUSerData, setIsOnline, setIsCash, setRating } = setUserInfoSlice.actions;

export const setUserInfoReducer = setUserInfoSlice.reducer;
