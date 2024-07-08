import { useCallback } from 'react';

import { useAppDispatch, useAppSelector } from 'hooks/redux';

import { setPassengerStatus } from 'state/reducers/setPassengersSlice';

import './GenderSelection.css';

export default function GenderSelection({ passengerId }: { passengerId: string }) {
  const { passengers } = useAppSelector((state) => state.passengers);
  const dispatch = useAppDispatch();
  const passenger = passengers.find((p) => p.id === passengerId);

  const handleClick = useCallback(
    (status: boolean) => {
      if (!passenger) return;
      dispatch(
        setPassengerStatus({
          id: passenger.id,
          option: 'gender',
          value: status,
        })
      );
    },
    [dispatch, passenger]
  );

  if (!passenger) return null;

  return (
    <div className="gender-select__container">
      <p className="gender-select__tittle">Пол</p>
      <div className="gender-select__inputs">
        <div className="gender-select__inputs-section">
          <input
            onChange={() => handleClick(true)}
            className="gender-select__input visually-hidden"
            type="radio"
            name="male"
            id="male"
            checked={passenger.statuses.gender}
          />
          <label htmlFor="male" className="gender-select__label">
            М
          </label>
        </div>
        <div className="gender-select__inputs-section">
          <input
            onChange={() => handleClick(false)}
            className="gender-select__input visually-hidden"
            type="radio"
            name="male"
            id="female"
            checked={!passenger.statuses.gender}
          />
          <label htmlFor="female" className="gender-select__label">
            Ж
          </label>
        </div>
      </div>
    </div>
  );
}
