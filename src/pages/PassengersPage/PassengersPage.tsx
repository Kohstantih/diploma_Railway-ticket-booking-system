import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { addPassenger } from 'state/reducers/setPassengersSlice';

import AddPassengerIcon from 'views/AddPassengerIcon/AddPassengerIcon';
import ButtonNext from 'views/ButtonNext/ButtonNext';
import PassengerWidget from 'components/PassengerWidget/PassengerWidget';

import './PassengersPage.css';

export default function PassengerDataList() {
  const { passengers } = useAppSelector((state) => state.passengers);
  const { checkedCount } = useAppSelector((state) => state.ticketsCount);
  const dispatch = useAppDispatch();
  const navigator = useNavigate();

  const isValidPassengerData = useMemo(() => {
    if (passengers.find((p) => !p.statuses.isValid)) return false;
    if (passengers.length !== 0 && passengers.length === checkedCount) return true;

    return false;
  }, [checkedCount, passengers]);

  return (
    <div className="passengers__container">
      <ul className="passengers__list">
        {passengers.map((item, index) => (
          <li key={item.id} className="passengers__item">
            <PassengerWidget id={item.id} number={index + 1} />
          </li>
        ))}
        <li className="passengers__item">
          <div className="passenger-add__container">
            <p className="passenger-add__title">Добавить пассажира</p>
            <AddPassengerIcon
              onClick={() => {
                if (passengers.length < checkedCount)
                  dispatch(addPassenger({ id: `${new Date().getTime()}` }));
              }}
            />
          </div>
        </li>
      </ul>
      <div className="passengers__btn-wrapper">
        <ButtonNext
          tittle={'Далее'}
          isActive={isValidPassengerData}
          onClick={() => navigator('/payment')}
        />
      </div>
    </div>
  );
}
