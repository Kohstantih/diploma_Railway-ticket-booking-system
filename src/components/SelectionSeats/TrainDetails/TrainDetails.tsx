import { useMemo } from 'react';

import TrainIcon from '../../Icons/TrainIcon/TrainIcon';
import ClockIcon from '../../Icons/ClockIcon/ClockIcon';
import CounterTicketsList from './CounterTicketsList/CounterTicketsList';
import CarriageChecker from './CarriageChecker/CarriageChecker';

import './TrainDetails.css';
import { useNavigate } from 'react-router-dom';

export default function TrainDetails({ direction }: { direction: 'go' | 'back' }) {
  const navigator = useNavigate();

  const directionClass = useMemo(
    () => (direction === 'go' ? 'train_go' : 'train_back'),
    [direction]
  );

  return (
    <div className={`train-details__container ${directionClass}`}>
      <div className="train-details__wrapper">
        <div className="train-details__header">
          <div className="train-details__direction">
            <div className="train-details__direction-icon"></div>
            <button
              onClick={() => navigator('/trains')}
              type="button"
              className="train-details__btn-back"
            >
              Выбрать другой поезд
            </button>
          </div>
        </div>
      </div>
      <div className="train-descriptions">
        <div className="train-name__box">
          <div className="train-name__icon-wrapper">
            <TrainIcon width={30} color="#FFA800" />
          </div>
          <div className="train-name__tittle">
            <p className="train-name__number">116C</p>
            <p className="train-name__point-previous">
              Адлер <span>&#8594;</span>
            </p>
            <p className="train-name__point-start">
              Москва <span>&#8594;</span>
            </p>
            <p className="train-name__point-finish">Санкт-Петербург</p>
          </div>
        </div>
        <div className="train-direction__container">
          <div className="station-descriptions">
            <p className="station-descriptions__time">00:10</p>
            <p className="station-descriptions__city">Москва</p>
            <p className="station-descriptions__name">Курский вокзал</p>
          </div>
          <div className="train-direction__arrow"></div>
          <div className="station-descriptions">
            <p className="station-descriptions__time">09:52</p>
            <p className="station-descriptions__city">Санкт-Петербург</p>
            <p className="station-descriptions__name">Ладожский вокзал</p>
          </div>
        </div>
        <div className="travel-time__box">
          <div className="travel-time__icon">
            <ClockIcon width={30} color={'#FFA800'} />
          </div>
          <p className="travel-time__value">
            <span>9 часов</span>
            <br />
            <span>42 минуты</span>
          </p>
        </div>
      </div>
      <div className="counter-tickets__wrapper">
        <div className="train-details__wrapper">
          <h4 className="counter-tickets__title">Количество билетов</h4>
        </div>
        <CounterTicketsList />
      </div>
      <div className="carriage__wrapper">
        <CarriageChecker />
      </div>
    </div>
  );
}
