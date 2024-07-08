import { useMemo, useState } from 'react';

import getCoachNumber from 'funcs/getCoachNumber';
import { createAvailableSeatsList } from 'funcs/createAvailableSeatsList';
import capitalizedString from 'funcs/capitalizedString';

import CarriageFacilitiesList from 'components/CarriageFacilitiesList/CarriageFacilitiesList';
import CarriageSeatsWidget from 'components/CarriageSeatsWidget/CarriageSeatsWidget';
import CostWidget from 'components/CostWidget/CostWidget';

import { TSeatsRequestObject } from 'types/TSeatsRequestObject';
import { TFacilitiesList } from 'types/TFacilitiesList';
import { TSeatsDirectionObj } from 'types/TSeatsDirectionObj';

import './CarriageChecked.css';

export default function CarriageChecked({
  directionObj,
  carriageObject,
}: {
  directionObj: TSeatsDirectionObj;
  carriageObject: TSeatsRequestObject;
}) {
  const { coach } = carriageObject;

  const [facilitiesList, setFacilitiesList] = useState<TFacilitiesList>({
    conditioner: {
      have: coach.have_air_conditioning,
      status: 'disabled',
    },
    wifi: {
      have: coach.have_wifi,
      status: 'inactive',
      priceName: 'wifi_price',
    },
    bedSheets: {
      have: coach.class_type !== 'fourth' ? true : false,
      status: coach.is_linens_included ? 'disabled' : 'inactive',
      priceName: 'linens_price',
    },
    food: {
      have: true,
      status: 'disabled',
    },
  });

  const seatsList = useMemo(
    () =>
      createAvailableSeatsList({
        carriagesList: [carriageObject],
        type: carriageObject.coach.class_type,
      }),
    [carriageObject]
  );

  return (
    <div className="carriage-checked__container">
      <div className="carriage-checked__content">
        <div className="carriage-checked__aside">
          <h4 className="carriage-checked__aside-tittle">{getCoachNumber(coach.name)}</h4>
          <p className="carriage-checked__aside-text">вагон</p>
        </div>

        <div className="carriage-checked__body">
          <ul className="seats-info__list">
            <li className="seats-info__item">
              <h5 className="seats-info__tittle">
                <span>Места</span>{' '}
                <span className="text_bold text_black">
                  {carriageObject.coach.class_type === 'first' ||
                  carriageObject.coach.class_type === 'fourth'
                    ? ''
                    : coach.available_seats}
                </span>
              </h5>
              <h5 className="seats-info__tittle">
                <span>Стоимость</span>
              </h5>
            </li>
            {seatsList.map((item, index) => (
              <li key={index} className="seats-info__item">
                <p className="seats-info__name">
                  <span>{capitalizedString(item.name)}</span>{' '}
                  <span className="text_bold text_black">{item.count}</span>
                </p>
                <div className="seats-info__cost-wrapper">
                  <CostWidget
                    value={item.cost}
                    valueColor={'#000000'}
                    valueFont={24}
                    valutaWidth={14}
                    valutaColor={'#928F94'}
                  />
                </div>
              </li>
            ))}
          </ul>
          <div className="carriage-checked__facilities-container">
            <h5 className="carriage-checked__facilities-title">Обслуживание ФПК</h5>
            <CarriageFacilitiesList
              coachObj={carriageObject.coach}
              list={facilitiesList}
              setList={setFacilitiesList}
            />
          </div>
        </div>
      </div>
      <p className="applicant-info">
        <span className="applicant-info__count">{'11'}</span> человек выбирают места в этом поезде
      </p>
      <CarriageSeatsWidget directionObj={directionObj} carriageObj={carriageObject} />
    </div>
  );
}
