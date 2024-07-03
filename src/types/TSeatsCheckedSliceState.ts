import { TCarriageClassNames } from './TCarriageTypesList';

export type TSeatsCheckedSliceSeat = {
  coachId: string;
  type: TCarriageClassNames;
  price: TSeatsCheckedSlicePrice;
  seatNumber: number;
};

export type TSeatsCheckedSlicePrice = {
  price?: number;
  top_price?: number;
  bottom_price?: number;
  side_price?: number;
};

export type TSeatsCheckedSliceRoute = {
  id: string;  
  seats: TSeatsCheckedSliceSeat[];
};

export type TSeatsCheckedSliceState = {
  departure: TSeatsCheckedSliceRoute | null;
  arrival: TSeatsCheckedSliceRoute | null;
};
