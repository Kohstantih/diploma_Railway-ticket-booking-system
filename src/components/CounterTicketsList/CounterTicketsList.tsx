import { useMemo } from 'react';

import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { setCount } from 'state/reducers/setTicketCountObjectSlice';
import { resetSeatCheckedState } from 'state/reducers/setSeatsCheckedSlice';

import EnterCountTicket from 'views/EnterCountTicket/EnterCountTicket';

import './CounterTicketsList.css';

export default function CounterTicketsList({ direction }: { direction: 'departure' | 'arrival' }) {
  const { adultCount, childrenCount, childrenWithoutSeatCount, freeCount } = useAppSelector(
    (state) => state.ticketsCount
  );
  const dispatch = useAppDispatch();

  const withoutSeatCount = useMemo(
    () => adultCount * 2 - childrenWithoutSeatCount,
    [adultCount, childrenWithoutSeatCount]
  );

  return (
    <ul className="counter-tickets__list">
      <li className="counter-tickets__item">
        <div className="counter-tickets__item-wrapper">
          <EnterCountTicket
            text={'Взрослых'}
            value={adultCount}
            setValue={(value) => {
              dispatch(resetSeatCheckedState(direction));
              dispatch(setCount({ option: 'adult', value }));
            }}
          />
          {freeCount !== 0 && (
            <p className="counter-tickets__details">
              Можно добавить еще
              <br />
              <span className="text_bold">{freeCount}</span>{' '}
              <span>{freeCount === 1 ? 'пассажира' : 'пассажиров'}</span>
            </p>
          )}
        </div>
      </li>
      <li className="counter-tickets__item">
        <div className="counter-tickets__item-wrapper">
          <EnterCountTicket
            text={'Детских'}
            value={childrenCount}
            setValue={(value) => {
              dispatch(resetSeatCheckedState(direction));
              dispatch(setCount({ option: 'children', value }));
            }}
          />
          {freeCount !== 0 && (
            <p className="counter-tickets__details">
              Можно добавить еще <span className="text_bold">{freeCount}</span>{' '}
              <span>{freeCount === 1 ? 'ребёнка' : 'детей'}</span> до 10 лет.Свое место в вагоне,
              как у взрослых, но дешевле в среднем на 50-65%
            </p>
          )}
        </div>
      </li>
      <li className="counter-tickets__item">
        <div className="counter-tickets__item-wrapper">
          <EnterCountTicket
            text={'Детских «без места»'}
            value={childrenWithoutSeatCount}
            setValue={(value) => dispatch(setCount({ option: 'without-seat', value }))}
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
