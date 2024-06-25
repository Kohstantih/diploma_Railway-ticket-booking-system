import { TCityObject } from './TRouteObject';

export type TDirectionsInfoObject = {
  city: TCityObject;
};

export type TDirectionsInfoSlice = {
  from: TDirectionsInfoObject;
  to: TDirectionsInfoObject;
};
