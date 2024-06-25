import { useCallback, useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { setOptionHours } from 'state/reducers/setSearchOptionsSlice';

import TimeLineUp from 'components/TimeLineUp/TimeLineUp';

import './DirectionMovement.css';

export default function DirectionMovement({ position }: { position: 'start' | 'end' }) {
  const { date } = useAppSelector((state) => state.searchOptions);
  const dispatch = useAppDispatch();

  const [rangeGo, setRangeGo] = useState({ from: 0, to: 24 });
  const [rangeBack, setRangeBack] = useState({ from: 0, to: 24 });

  const checkIsActiveArrival = useCallback(() => {
    let result = false;

    if (position === 'start') {
      result = date.dateStartArrival ? true : false;
    } else {
      result = date.dateEndArrival ? true : false;
    }

    return result;
  }, [date.dateEndArrival, date.dateStartArrival, position]);

  const checkIsActiveDeparture = useCallback(() => {
    let result = false;

    if (position === 'start') {
      result = date.dateStart ? true : false;
    } else {
      result = date.dateEnd ? true : false;
    }

    return result;
  }, [date.dateEnd, date.dateStart, position]);

  useEffect(() => {
    dispatch(setOptionHours({ option: `${position}DepartureHourFrom`, value: rangeGo.from }));
    dispatch(setOptionHours({ option: `${position}DepartureHourTo`, value: rangeGo.to }));
    dispatch(setOptionHours({ option: `${position}ArrivalHourFrom`, value: rangeBack.from }));
    dispatch(setOptionHours({ option: `${position}ArrivalHourTo`, value: rangeBack.to }));
  }, [dispatch, position, rangeBack.from, rangeBack.to, rangeGo.from, rangeGo.to]);

  return (
    <>
      {checkIsActiveDeparture() && (
        <div className="time-lineup__container">
          <h5 className="time-lineup__container-tittle">Время отбытия</h5>
          <TimeLineUp range={rangeGo} changeRange={setRangeGo} />
        </div>
      )}
      {checkIsActiveArrival() && (
        <div className="time-lineup__container">
          <h5 className="time-lineup__container-tittle text-right">Время прибытия</h5>
          <TimeLineUp range={rangeBack} changeRange={setRangeBack} />
        </div>
      )}
    </>
  );
}
