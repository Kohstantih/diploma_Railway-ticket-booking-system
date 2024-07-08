export type TPassengersSliceStateData = {
    firstName: string;
    lastName: string;
    patronymic: string;
    birthday: string;
    documentType: string;
    documentData: string;
  };

export type TPassengersSliceStateStatuses = {
    isAdult: boolean;
    isChild: boolean;
    includeChildrenSeat: boolean;
    gender: boolean;
    isValid: boolean;
  };

export type TPassengersSliceStateObject = {
  id: string;
  data: TPassengersSliceStateData;
  statuses: TPassengersSliceStateStatuses;
};

export type TPassengersSliceState = {
  passengers: TPassengersSliceStateObject[];
};
