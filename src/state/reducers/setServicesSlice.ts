import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { TServicesState, TServicesStateService } from 'types/TServicesState';

const initialState: TServicesState = {
  carriages: [],
};

export const setServicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    setService: (
      state,
      action: PayloadAction<{ carriageId: string; serviceObj: TServicesStateService }>
    ) => {
      const { carriageId, serviceObj } = action.payload;
      const carriage = state.carriages.find((o) => o.id === carriageId);

      if (carriage) {
        if (!carriage.services.includes(serviceObj)) carriage.services.push(serviceObj);
      } else {
        state.carriages.push({ id: carriageId, services: [serviceObj] });
      }
    },
    delService: (state, action: PayloadAction<{ carriageId: string; serviceName: string }>) => {
      const { carriageId, serviceName } = action.payload;
      const carriage = state.carriages.find((o) => o.id === carriageId);

      if (carriage) {
        carriage.services = carriage.services.filter((u) => u.name !== serviceName);
        if (carriage.services.length === 0)
          state.carriages = state.carriages.filter((i) => i.id !== carriageId);
      }
    },
  },
});

export const { setService, delService } = setServicesSlice.actions;

export const setServicesReducer = setServicesSlice.reducer;
