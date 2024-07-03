import { useEffect, useMemo, useState } from 'react';

import { useGetSeatsQuery } from 'state/services/seatsApi';
import getCoachNumber from 'funcs/getCoachNumber';

import CarriageChecked from 'components/CarriageChecked/CarriageChecked';
import CostTicketsDirection from 'components/CostTicketsDirection/CostTicketsDirection';

import { TCarriageClassNames } from 'types/TCarriageTypesList';
import { TRouteObject } from 'types/TRouteObject';
import { TSeatsRequestObject } from 'types/TSeatsRequestObject';

import './CarriageDetails.css';

export default function CarriageDetails({
  route,
  direction,
  type,
}: {
  route: TRouteObject;
  direction: 'departure' | 'arrival';
  type: TCarriageClassNames;
}) {
  const { data: carriages } = useGetSeatsQuery({ id: route[direction]._id });
  const [checkedCarriagesList, setCheckedCarriagesList] = useState<TSeatsRequestObject[]>([]);

  const carriagesFilteredList = useMemo(() => {
    return carriages?.filter((item) => item.coach.class_type === type);
  }, [carriages, type]);

  useEffect(() => {
    if (carriagesFilteredList) setCheckedCarriagesList([carriagesFilteredList[0]]);
    else setCheckedCarriagesList([]);
  }, [carriagesFilteredList, type]);

  return (
    <div className="carriage-details">
      <div className="carriage-details__header">
        <div className="carriage-number__checker">
          <h5 className="carriage-number__tittle">Вагоны</h5>
          <ul className="carriage-number__list">
            {carriagesFilteredList &&
              carriagesFilteredList.map((item) => (
                <li
                  key={item.coach._id}
                  onClick={() => {
                    if (!checkedCarriagesList.includes(item)) {
                      setCheckedCarriagesList((arr) => [...arr, item]);
                    } else {
                      setCheckedCarriagesList((arr) => arr.filter((o) => o !== item));
                    }
                  }}
                  className={`carriage-number__list-item ${
                    checkedCarriagesList.includes(item) ? 'carriage-number_active' : ''
                  }`}
                >
                  {getCoachNumber(item.coach.name)}
                </li>
              ))}
          </ul>
          <p className="carriage-number__description">
            Нумерация вагонов начинается с <span>{'хвоста'}</span> поезда
          </p>
        </div>
      </div>
      {checkedCarriagesList && (
        <ul className="carriage-checked__list">
          {checkedCarriagesList.map((item) => (
            <li key={item.coach._id} className="carriage-checked__list-item">
              <CarriageChecked
                directionObj={{ direction, id: route[direction]._id }}
                carriageObject={item}
              />
            </li>
          ))}
        </ul>
      )}
      <div className="tickets-cost__wrapper">
        <CostTicketsDirection direction={direction} />
      </div>
    </div>
  );
}
