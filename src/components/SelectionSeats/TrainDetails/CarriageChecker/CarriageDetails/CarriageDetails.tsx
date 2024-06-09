import { useState } from 'react';

import './CarriageDetails.css';
import CarriageChecked from '../CarriageChecked/CarriageChecked';

export default function CarriageDetails({ type }: { type: string }) {
  const carriageNumbersList = ['07', '09'];

  const [activeNumbers, setActiveNumbers] = useState([carriageNumbersList[0]]);

  return (
    <div className="carriage-details">
      <div className="carriage-details__header">
        <div className="carriage-number__checker">
          <h5 className="carriage-number__tittle">Вагоны</h5>
          <ul className="carriage-number__list">
            {carriageNumbersList.map((item, index) => (
              <li
                key={index}
                onClick={() => setActiveNumbers((arr) => [...arr, item])}
                className={`carriage-number__list-item ${
                  activeNumbers.includes(item) ? 'carriage-number_active' : ''
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="carriage-number__description">
            Нумерация вагонов начинается с <span>{'хвоста'}</span> поезда
          </p>
        </div>
      </div>
      <ul className="carriage-checked__list">
        {activeNumbers &&
          activeNumbers.map((item, index) => (
            <li key={index} className="carriage-checked__list-item">
              <CarriageChecked number={item} type={type} />
            </li>
          ))}
      </ul>
      <div className="tickets-cost__container">
        {true && <p className="tickets-cost__text">
          <span className="tickets-cost__value">{'5 760'}</span>
          <span className="tickets-cost__valuta"></span>
        </p>}
      </div>
    </div>
  );
}
