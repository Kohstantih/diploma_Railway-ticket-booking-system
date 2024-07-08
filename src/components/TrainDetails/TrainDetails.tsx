import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppSelector } from 'hooks/redux';
import capitalizedString from 'funcs/capitalizedString';
import { getTimeStringFromSeconds } from 'funcs/getTimeStringFromSeconds';
import { getTimeObject } from 'funcs/getTimeObject';
import { checkFromOrTo } from 'funcs/checkFromOrTo';

import CounterTicketsList from 'components/CounterTicketsList/CounterTicketsList';
import CarriageChecker from 'components/CarriageChecker/CarriageChecker';
import TransparentArrowIcon from 'views/TransparentArrowIcon/TransparentArrowIcon';
import TrainIcon from 'views/TrainIcon/TrainIcon';
import ArrowIcon from 'views/ArrowIcon/ArrowIcon';
import ClockIcon from 'views/ClockIcon/ClockIcon';

import './TrainDetails.css';

export default function TrainDetails({ direction }: { direction: 'departure' | 'arrival' }) {
  const navigator = useNavigate();
  const { route } = useAppSelector((state) => state.activeRoute);
  const { checkedCount } = useAppSelector((state) => state.ticketsCount);

  const directionClass = useMemo(
    () => (direction === 'departure' ? 'train_go' : 'train_back'),
    [direction]
  );

  const checkDirection = useMemo(() => {
    return direction === 'departure' ? 'to' : 'from';
  }, [direction]);

  const element = useMemo(() => {
    if (!route) {
      return null;
    } else {
      const { [direction]: routeObject } = route;
      const { hours, minute } = getTimeObject(routeObject.duration);

      return (
        <div className={`train-details__container ${directionClass}`}>
          <div className="train-details__wrapper">
            <div className="train-details__header">
              <div className="train-details__direction">
                <div className="train-details__arrow-wrapper">
                  <TransparentArrowIcon width={76} direction={checkDirection} />
                </div>
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
                <p className="train-name__number">{capitalizedString(routeObject.train.name)}</p>
                {/* <p className="train-name__point-previous">
                  Адлер <span>&#8594;</span>
                </p> */}
                <p className="train-name__point-start">
                  {capitalizedString(routeObject.from.city.name)} <span>&#8594;</span>
                </p>
                <p className="train-name__point-finish">
                  {capitalizedString(routeObject.to.city.name)}
                </p>
              </div>
            </div>
            <div className="train-direction__container">
              <div className="station-descriptions">
                <p className="station-descriptions__time">
                  {getTimeStringFromSeconds(
                    routeObject[checkFromOrTo('from', checkDirection)].datetime
                  )}
                </p>
                <p className="station-descriptions__city">
                  {capitalizedString(routeObject[checkFromOrTo('from', checkDirection)].city.name)}
                </p>
                <p className="station-descriptions__name">
                  <span>
                    {capitalizedString(
                      routeObject[checkFromOrTo('from', checkDirection)].railway_station_name
                    )}
                  </span>{' '}
                  <span>вокзал</span>
                </p>
              </div>
              <ArrowIcon direction={direction === 'departure' ? 'to' : 'from'} />
              <div className="station-descriptions">
                <p className="station-descriptions__time">
                  {getTimeStringFromSeconds(
                    routeObject[checkFromOrTo('to', checkDirection)].datetime
                  )}
                </p>
                <p className="station-descriptions__city">
                  {capitalizedString(routeObject[checkFromOrTo('to', checkDirection)].city.name)}
                </p>
                <p className="station-descriptions__name">
                  <span>
                    {capitalizedString(
                      routeObject[checkFromOrTo('to', checkDirection)].railway_station_name
                    )}
                  </span>{' '}
                  <span>вокзал</span>
                </p>
              </div>
            </div>
            <div className="travel-time__box">
              <div className="travel-time__icon">
                <ClockIcon width={30} color={'#FFA800'} />
              </div>
              <p className="travel-time__value">
                <span>{hours}</span> <span>часов</span>
                <br />
                <span>{minute}</span> <span>минуты</span>
              </p>
            </div>
          </div>
          <div className="counter-tickets__wrapper">
            <div className="train-details__wrapper">
              <h4 className="counter-tickets__title">Количество билетов</h4>
            </div>
            <CounterTicketsList direction={direction} />
          </div>
          {checkedCount !== 0 && (
            <div className="carriage__wrapper">
              <CarriageChecker direction={direction} />
            </div>
          )}
        </div>
      );
    }
  }, [checkDirection, checkedCount, direction, directionClass, navigator, route]);

  return element;
}
