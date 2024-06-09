import { useMemo } from 'react';

import PassengerCard from '../PassengerCard/PassengerCard';

import './PassengerCardList.css';

export default function PassengerCardList() {
  const passengerList = useMemo(
    () => [
      {
        status: 'adult',
        fullName: 'Мартынюк Ирина Эдуардовна',
        gender: 'female',
        dob: '17.02.1985',
        document: {
          name: 'passport',
          series: '4204',
          number: '380694',
        },
      },
      {
        status: 'children',
        fullName: 'Мартынюк Кирилл Сергеевич',
        gender: 'male',
        dob: '25.01.2006',
        document: {
          name: 'certificate',
          number: 'VIII УН 256319',
        },
      },
      {
        status: 'adult',
        fullName: 'Мартынюк Сергей Петрович',
        gender: 'male',
        dob: '19.06.1982',
        document: {
          name: 'passport',
          series: '4204',
          number: '380694',
        },
      },
    ],
    []
  );

  return (
    <ul className="passenger-card__list">
      {passengerList.map((item) => (
        <li className="passenger-card__item">
          <PassengerCard passenger={item} />
        </li>
      ))}
    </ul>
  );
}
