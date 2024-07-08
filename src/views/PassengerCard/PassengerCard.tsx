import { useMemo } from 'react';

import PassengerIconRound from 'views/PassengerIconRound/PassengerIconRound';

import { TPassengersSliceStateObject } from 'types/TPassengersSliceState';

import './PassengerCard.css';

export default function PassengerCard({ passenger }: { passenger: TPassengersSliceStateObject }) {
  const { data, statuses } = passenger;

  const fullName = useMemo(() => {
    return `${data.lastName} ${data.firstName} ${data.patronymic}`;
  }, [data.firstName, data.lastName, data.patronymic]);

  return (
    <div className="passenger-card">
      <div className="passenger-card__icon-box">
        <div className="passenger-card__icon">
          <PassengerIconRound />
        </div>
        <p className="passenger-card__status">{statuses.isAdult ? 'Взрослый' : 'Детский'}</p>
      </div>
      <div className="passenger-card__content">
        <h5 className="passenger-card__name">{fullName}</h5>
        <p className="passenger-card__data-text">Пол {statuses.gender ? 'мужской' : 'женский'}</p>
        <p className="passenger-card__data-text">
          <span>Дата рождения</span> <span>{data.birthday}</span>
        </p>
        <p className="passenger-card__data-text">
          <span>
            {data.documentType === 'passport' ? 'Паспорт РФ' : 'Свидетельство о рождении'}
          </span>{' '}
          <span>{data.documentData}</span>
        </p>
      </div>
    </div>
  );
}
