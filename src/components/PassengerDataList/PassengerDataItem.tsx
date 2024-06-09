import { useState } from 'react';

import CollapseRoundIcon from '../Icons/CollapseRoundIcon/CollapseRoundIcon';
import CrossIcon from '../Icons/CrossIcon/CrossIcon';
import PassengerForm from './PassengerForm/PassengerForm';

export default function PassengerDataItem({
  number,
  delPassenger,
}: {
  number: number;
  delPassenger: () => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className={`passenger-data__item${isOpen ? ' passenger-data__item_open' : ''}`}>
      <div className={`passenger-data__header${isOpen ? ' passenger-data_open' : ''}`}>
        <CollapseRoundIcon isActive={isOpen} setIsActive={setIsOpen} />
        <p className="passenger-data__text">
          Пассажир <span>{number}</span>
        </p>
        <div className="passenger-data__icon-wrapper">
          <CrossIcon onClick={delPassenger} />
        </div>
      </div>
      {isOpen && <PassengerForm />}
    </li>
  );
}
