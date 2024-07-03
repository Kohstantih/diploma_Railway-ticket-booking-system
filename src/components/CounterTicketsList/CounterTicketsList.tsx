import { useMemo } from 'react';

import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { setCount } from 'state/reducers/setTicketCountObjectSlice';
import { resetSeatCheckedState } from 'state/reducers/setSeatsCheckedSlice';

import EnterCountTicket from 'components/EnterCountTicket/EnterCountTicket';

import './CounterTicketsList.css';

export default function CounterTicketsList({ direction }: { direction: 'departure' | 'arrival' }) {
  const { [direction]: countObject } = useAppSelector((state) => state.ticketsCount);
  const dispatch = useAppDispatch();

  const withoutSeatCount = useMemo(
    () => countObject.adultCount * 2 - countObject.childrenWithoutSeatCount,
    [countObject.adultCount, countObject.childrenWithoutSeatCount]
  );

  return (
    <ul className="counter-tickets__list">
      <li className="counter-tickets__item">
        <div className="counter-tickets__item-wrapper">
          <EnterCountTicket
            text={'Взрослых'}
            value={countObject.adultCount}
            setValue={(value) => {
              dispatch(resetSeatCheckedState(direction));
              dispatch(setCount({ route: direction, option: 'adult', value }));
            }}
          />
          {countObject.freeCount !== 0 && (
            <p className="counter-tickets__details">
              Можно добавить еще
              <br />
              <span className="text_bold">{countObject.freeCount}</span>{' '}
              <span>{countObject.freeCount === 1 ? 'пассажира' : 'пассажиров'}</span>
            </p>
          )}
        </div>
      </li>
      <li className="counter-tickets__item">
        <div className="counter-tickets__item-wrapper">
          <EnterCountTicket
            text={'Детских'}
            value={countObject.childrenCount}
            setValue={(value) => {
              dispatch(resetSeatCheckedState(direction));
              dispatch(setCount({ route: direction, option: 'children', value }));
            }}
          />
          {countObject.freeCount !== 0 && (
            <p className="counter-tickets__details">
              Можно добавить еще <span className="text_bold">{countObject.freeCount}</span>{' '}
              <span>{countObject.freeCount === 1 ? 'ребёнка' : 'детей'}</span> до 10 лет.Свое место
              в вагоне, как у взрослых, но дешевле в среднем на 50-65%
            </p>
          )}
        </div>
      </li>
      <li className="counter-tickets__item">
        <div className="counter-tickets__item-wrapper">
          <EnterCountTicket
            text={'Детских «без места»'}
            value={countObject.childrenWithoutSeatCount}
            setValue={(value) =>
              dispatch(setCount({ route: direction, option: 'without-seat', value }))
            }
          />
          <p className="counter-tickets__details">
            Можно добавить два <span style={{ fontStyle: 'italic' }}>Детских «без места»</span>{' '}
            билета на одного взрослого.{' '}
            {withoutSeatCount !== 0 && (
              <span>
                Доступно ещё: <span className="text_bold">{withoutSeatCount}</span>
              </span>
            )}
          </p>
        </div>
      </li>
    </ul>
  );
}
