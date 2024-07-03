import ArrowIcon from '../../views/ArrowIcon/ArrowIcon';

import './DirectionInform.css';

export default function DirectionInform({ direction }: { direction: 'from' | 'to' }) {
  return (
    <div className="direction-inform">
      <div className="train-inform__container">
        <div className="train-inform__section">
          <p className="section__number-text">№ Поезда</p>
          <p className="section__number-value">{'116C'}</p>
        </div>
        <div className="train-inform__section">
          <p className="section__name-text">Название</p>
          <p className="section__name-value">
            <span>{'Адлер'}</span>
            <br />
            <span>{'Санкт-Петербург'}</span>
          </p>
        </div>
      </div>
      <div className="trip-inform">
        <p className="trip-duration">{'9 : 42'}</p>
        <div className="trip-date__container">
          <div className="trip-date__text text_left">
            <p className="trip-date__time">{'00:10'}</p>
            <p className="trip-date__full">{'31.05.24'}</p>
          </div>
          <ArrowIcon direction={direction} />
          <div className="trip-date__text text_right">
            <p className="trip-date__time">{'09:52'}</p>
            <p className="trip-date__full">{'01.05.24'}</p>
          </div>
        </div>
        <div className="stations-inform">
          <div className="station__box text_left">
            <p className="station__city">{'Москва'}</p>
            <p className="station__name">
              <span>{'Курский'}</span>
              <br />
              <span>вокзал</span>
            </p>
          </div>
          <div className="station__box text_right">
            <p className="station__city">{'Санкт-Петербург'}</p>
            <p className="station__name">
              <span>{'Ладожский'}</span>
              <br />
              <span>вокзал</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
