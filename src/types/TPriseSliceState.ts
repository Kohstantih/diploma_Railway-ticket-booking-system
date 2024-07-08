export type TPriseSliceStateDirection = {
  adultPrice: number;
  childrenPrice: number;
  total: number;
};

export type TPriseSliceState = {
  departure: TPriseSliceStateDirection;
  arrival: TPriseSliceStateDirection;
  total: number;
};
