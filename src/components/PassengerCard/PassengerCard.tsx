import PassengerIconRound from '../Icons/PassengerIconRound/PassengerIconRound';
import './PassengerCard.css';

export default function PassengerCard({
  passenger,
}: {
  passenger: {
    status: string;
    fullName: string;
    gender: string;
    dob: string;
    document: {
      name: string;
      series?: string;
      number: string;
    };
  };
}) {
  const {
    status,
    fullName,
    gender,
    dob,
    document: { name, series, number },
  } = passenger;

  return (
    <div className="passenger-card">
      <div className="passenger-card__icon-box">
        <div className="passenger-card__icon">
            <PassengerIconRound />
        </div>
        <p className="passenger-card__status">{status === 'adult' ? 'Взрослый' : 'Детский'}</p>
      </div>
      <div className="passenger-card__content">
        <h5 className="passenger-card__name">{fullName}</h5>
        <p className="passenger-card__data-text">Пол {gender === 'male' ? 'мужской' : 'женский'}</p>
        <p className="passenger-card__data-text">Дата рождения {dob}</p>
        <p className="passenger-card__data-text">
          {name === 'passport'
            ? `Паспорт РФ ${series} ${number}`
            : `Свидетельство о рождении ${number}`}
        </p>
      </div>
    </div>
  );
}
