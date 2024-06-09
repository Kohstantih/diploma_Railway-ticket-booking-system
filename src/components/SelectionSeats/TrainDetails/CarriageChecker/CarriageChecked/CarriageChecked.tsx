import { useState } from 'react';

import CarriageFacilitiesList from '../CarriageFacilitiesList/CarriageFacilitiesList';
import CarriageSeatsWidget from '../CarriageSeatsWidget/CarriageSeatsWidget';

import './CarriageChecked.css';

export default function CarriageChecked({ number, type }: { number: string; type: string }) {
  const [seatsCountTop, setSeatsCountTop] = useState(3);
  const [seatsCountBottom, setSeatsCountBottom] = useState(8);
  const [facilitiesList, setFacilitiesList] = useState({
    conditioner: 'disabled',
    wifi: 'disabled',
    bedSheets: 'inactive',
    food: 'inactive',
  });

  return (
    <div className="carriage-checked">
      <div className="carriage-checked__container">
        <div className="number__box">
          <h4 className="number__tittle">{number}</h4>
          <p className="number__text">вагон</p>
        </div>
        <div className="carriage-checked__wrapper">
          <div className="carriage-checked__seats carriage-checked__box">
            <h5 className="carriage-checked__box-title">
              Места{' '}
              <span className="carriage-checked__box-title_black">
                {seatsCountTop + seatsCountBottom}
              </span>
            </h5>
            <p className="carriage-checked__text">
              Верхние <span className="carriage-checked__seats-value">{seatsCountTop}</span>
            </p>
            <p className="carriage-checked__text">
              Нижние <span className="carriage-checked__seats-value">{seatsCountBottom}</span>
            </p>
          </div>
          <div className="carriage-checked__cost carriage-checked__box">
            <h5 className="carriage-checked__box-title">Стоимость</h5>
            <p className="carriage-checked__text carriage-checked__cost-value">
              {'2 920'} <span className="carriage-checked__cost-valuta"></span>
            </p>
            <p className="carriage-checked__text carriage-checked__cost-value">
              {'3 530'} <span className="carriage-checked__cost-valuta"></span>
            </p>
          </div>
          <div className="carriage-checked__facilities">
            <h5 className="carriage-checked__box-title">Обслуживание ФПК</h5>
            <CarriageFacilitiesList list={facilitiesList} setList={setFacilitiesList} />
          </div>
        </div>
      </div>
      <p className="applicant-info">
        <span className="applicant-info__count">{11}</span> человек выбирают места в этом поезде
      </p>
      <CarriageSeatsWidget number={number} type={type} seatsFree={[3, 5, 8, 22, 35]} />
    </div>
  );
}
