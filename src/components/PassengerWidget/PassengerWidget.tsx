import { useState } from 'react';

import { useAppDispatch } from 'hooks/redux';
import { delPassenger } from 'state/reducers/setPassengersSlice';

import CollapseRoundIcon from 'components/CollapseRoundIcon/CollapseRoundIcon';
import CrossIcon from 'views/CrossIcon/CrossIcon';
import PassengerForm from 'components/PassengerForm/PassengerForm';

import './PassengerWidget.css';

export default function PassengerDataItem({ id, number }: { id: string; number: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();

  return (
    <>
      <div
        className={`passenger-widget__container${
          isOpen ? ' passenger-widget__container_open' : ''
        }`}
      >
        <CollapseRoundIcon isActive={isOpen} setIsActive={setIsOpen} />
        <p className="passenger-widget__title">
          <span>Пассажир</span> <span>{number}</span>
        </p>
        <div className="passenger-widget__icon-wrapper">
          <CrossIcon onClick={() => dispatch(delPassenger({ id }))} />
        </div>
      </div>
      {isOpen && <PassengerForm passengerId={id} />}
    </>
  );
}
