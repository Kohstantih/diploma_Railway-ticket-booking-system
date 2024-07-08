import { useMemo } from 'react';

import { useAppSelector } from 'hooks/redux';

import getCoachNumber from 'funcs/getCoachNumber';
import { convertSecondsToTimeString } from 'funcs/convertSecondsToTimeString';
import { getTimeStringFromSeconds } from 'funcs/getTimeStringFromSeconds';
import { getDateStringFromSeconds } from 'funcs/getDateStringFromSeconds';
import capitalizedString from 'funcs/capitalizedString';
import { checkFromOrTo } from 'funcs/checkFromOrTo';

import ArrowIcon from 'views/ArrowIcon/ArrowIcon';

import './DirectionInform.css';

export default function DirectionInform({ direction }: { direction: 'from' | 'to' }) {
  const { route } = useAppSelector((state) => state.activeRoute);

  const directionObject = useMemo(() => {
    if (!route) return null;

    if (direction === 'to') return route.departure;
    if (direction === 'from') return route.arrival;

    return null;
  }, [direction, route]);

  const element = useMemo(() => {
    if (!directionObject) return null;

    return (
      <div className="direction-inform">
        <div className="train-inform__container">
          <div className="train-inform__section">
            <p className="section__number-text">№ Поезда</p>
            <p className="section__number-value">{getCoachNumber(directionObject.train.name)}</p>
          </div>
          <div className="train-inform__section">
            <p className="section__name-text">Название</p>
            <p className="section__name-value">
              <span>{capitalizedString(directionObject.from.city.name)}</span>
              <br />
              <span>{capitalizedString(directionObject.to.city.name)}</span>
            </p>
          </div>
        </div>
        <div className="trip-inform">
          <p className="trip-duration">{convertSecondsToTimeString(directionObject.duration)}</p>
          <div className="trip-date__container">
            <div className="trip-date__text text_left">
              <p className="trip-date__time">
                {getTimeStringFromSeconds(
                  directionObject[checkFromOrTo('from', direction)].datetime
                )}
              </p>
              <p className="trip-date__full">
                {getDateStringFromSeconds(
                  directionObject[checkFromOrTo('from', direction)].datetime
                )}
              </p>
            </div>
            <ArrowIcon direction={direction} />
            <div className="trip-date__text text_right">
              <p className="trip-date__time">
                {getTimeStringFromSeconds(directionObject[checkFromOrTo('to', direction)].datetime)}
              </p>
              <p className="trip-date__full">
                {getDateStringFromSeconds(directionObject[checkFromOrTo('to', direction)].datetime)}
              </p>
            </div>
          </div>
          <div className="stations-inform">
            <div className="station__box text_left">
              <p className="station__city">
                {capitalizedString(directionObject[checkFromOrTo('from', direction)].city.name)}
              </p>
              <p className="station__name">
                <span>
                  {capitalizedString(
                    directionObject[checkFromOrTo('from', direction)].railway_station_name
                  )}
                </span>
                <br />
                <span>вокзал</span>
              </p>
            </div>
            <div className="station__box text_right">
              <p className="station__city">
                {capitalizedString(directionObject[checkFromOrTo('to', direction)].city.name)}
              </p>
              <p className="station__name">
                <span>
                  {capitalizedString(
                    directionObject[checkFromOrTo('to', direction)].railway_station_name
                  )}
                </span>
                <br />
                <span>вокзал</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }, [direction, directionObject]);

  return element;
}
