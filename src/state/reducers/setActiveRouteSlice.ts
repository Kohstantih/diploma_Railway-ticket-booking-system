import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { TRouteObject } from 'types/TRouteObject';

const initialState: { route: TRouteObject | null } = { route: null };

export const setActiveRouteSlice = createSlice({
  name: 'activeRoute',
  initialState,
  reducers: {
    setActiveRoute: (state, action: PayloadAction<TRouteObject | null>) => {
      state.route = action.payload;
    },
  },
});

export const { setActiveRoute } = setActiveRouteSlice.actions;

export const setActiveRouteReducer = setActiveRouteSlice.reducer;
