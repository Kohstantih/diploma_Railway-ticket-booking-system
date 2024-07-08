import { useAppSelector } from 'hooks/redux';

import PassengerCard from 'views/PassengerCard/PassengerCard';

import './PassengerCardList.css';

export default function PassengerCardList() {
  const { passengers } = useAppSelector((state) => state.passengers);

  return (
    <ul className="passenger-card__list">
      {passengers.map((item) => (
        <li key={item.id} className="passenger-card__item">
          <PassengerCard passenger={item} />
        </li>
      ))}
    </ul>
  );
}
