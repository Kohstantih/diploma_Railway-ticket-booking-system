import { useCallback, useMemo } from 'react';

import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { addSeat, deleteSeat } from 'state/reducers/setSeatsCheckedSlice';
import getCoachNumber from 'funcs/getCoachNumber';

import CarriageEconom from '../Carriages/CarriageEconom';
import CarriageSeat from '../Carriages/CarriageSeat';
import CarriageCompartment from '../Carriages/CarriageCompartment';
import CarriageLuxury from '../Carriages/CarriageLuxury';

import { TSeatsDirectionObj } from 'types/TSeatsDirectionObj';
import { TSeatsRequestObject } from 'types/TSeatsRequestObject';
import { TCarriageClassNames } from 'types/TCarriageTypesList';

import './CarriageSeatsWidget.css';

export default function CarriageSeatsWidget({
  directionObj,
  carriageObj,
}: {
  directionObj: TSeatsDirectionObj;
  carriageObj: TSeatsRequestObject;
}) {
  const { coach, seats } = carriageObj;
  const { class_type: type, name } = coach;
  const { [directionObj.direction]: seatsChecked } = useAppSelector((state) => state.seatsChecked);
  const dispatch = useAppDispatch();

  const carriageImages = useMemo(
    () => ({
      first: 'carriage-mask_luxury',
      second: 'carriage-mask_compartment',
      third: 'carriage-mask_econom',
      fourth: 'carriage-mask_seat',
    }),
    []
  );

  const priceObject = useMemo(() => {
    if (type === 'second') {
      return {
        top_price: coach.top_price,
        bottom_price: coach.bottom_price,
      };
    } else if (type === 'third') {
      return {
        top_price: coach.top_price,
        bottom_price: coach.bottom_price,
        side_price: coach.side_price,
      };
    } else if (type === 'fourth') {
      return { bottom_price: coach.bottom_price };
    }

    return { price: coach.price };
  }, [coach.bottom_price, coach.price, coach.side_price, coach.top_price, type]);

  const setSeat = useCallback(
    (number: number) => {
      dispatch(
        addSeat({
          route: directionObj.direction,
          id: directionObj.id,
          seatObj: { coachId: coach._id, type, price: priceObject, seatNumber: number },
        })
      );
    },
    [coach._id, directionObj.direction, directionObj.id, dispatch, priceObject, type]
  );

  const delSeat = useCallback(
    (number: number) => {
      dispatch(
        deleteSeat({
          route: directionObj.direction,
          id: directionObj.id,
          seatObj: { coachId: coach._id, type, price: priceObject, seatNumber: number },
        })
      );
    },
    [coach._id, directionObj.direction, directionObj.id, dispatch, priceObject, type]
  );

  const checkedSeats = useCallback(
    (name: TCarriageClassNames) => {
      if (!seatsChecked) return [];
      const result: number[] = [];

      seatsChecked.seats.forEach((o) => {
        if (o.coachId === carriageObj.coach._id && name === carriageObj.coach.class_type)
          result.push(o.seatNumber);
      });
      
      return result;
    },
    [carriageObj.coach._id, carriageObj.coach.class_type, seatsChecked]
  );

  const carriageWidget = useMemo(() => {
    const seatsArr = seats.filter((o) => o.available).map((u) => u.index);

    if (type === 'first')
      return (
        <CarriageLuxury
          checkedSeats={checkedSeats(type)}
          freeSeats={seatsArr}
          addSeat={setSeat}
          deleteSeat={delSeat}
        />
      );
    if (type === 'second')
      return (
        <CarriageCompartment
          checkedSeats={checkedSeats(type)}
          freeSeats={seatsArr}
          addSeat={setSeat}
          deleteSeat={delSeat}
        />
      );
    if (type === 'third')
      return (
        <CarriageEconom
          checkedSeats={checkedSeats(type)}
          freeSeats={seatsArr}
          addSeat={setSeat}
          deleteSeat={delSeat}
        />
      );
    if (type === 'fourth')
      return (
        <CarriageSeat
          checkedSeats={checkedSeats(type)}
          freeSeats={seatsArr}
          addSeat={setSeat}
          deleteSeat={delSeat}
        />
      );
  }, [checkedSeats, delSeat, seats, setSeat, type]);

  return (
    <div className={`carriage-widget__mask ${carriageImages[type]}`}>
      <div className="carriage__number">{getCoachNumber(name)}</div>
      <div className="carriage-seats__container">{carriageWidget}</div>
    </div>
  );
}
