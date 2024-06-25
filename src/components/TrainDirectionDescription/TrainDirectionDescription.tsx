import ArrowIcon from 'components/Icons/ArrowIcon/ArrowIcon';

import { convertSecondsToTimeString } from 'funcs/convertSecondsToTimeString';
import capitalizedString from 'funcs/capitalizedString';
import { getTimeStringFromSeconds } from 'funcs/getTimeStringFromSeconds';

import { TRouteObjectDirection } from 'types/TRouteObject';

import './TrainDirectionDescription.css';

export default function TrainDirectionDescription({
  objectDescription,
  direction,
}: {
  objectDescription: TRouteObjectDirection;
  direction: 'to' | 'from';
}) {
  const { from, to, duration } = objectDescription;

  if (direction === 'to') {
    return (
      <div className="direction-description">
        <div className="direction__point">
          <p className="direction__time">{getTimeStringFromSeconds(from.datetime)}</p>
          <p className="direction__city">{capitalizedString(from.city.name)}</p>
          <p className="direction__station">{from.railway_station_name} вокзал</p>
        </div>
        <div className="direction__travel">
          <p className="travel__time">{convertSecondsToTimeString(duration)}</p>
          <ArrowIcon direction={direction} />
        </div>
        <div className="direction__point">
          <p className="direction__time">{getTimeStringFromSeconds(to.datetime)}</p>
          <p className="direction__city">{capitalizedString(to.city.name)}</p>
          <p className="direction__station">{to.railway_station_name} вокзал</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="direction-description">
        <div className="direction__point">
          <p className="direction__time">{getTimeStringFromSeconds(to.datetime)}</p>
          <p className="direction__city">{capitalizedString(to.city.name)}</p>
          <p className="direction__station">{to.railway_station_name} вокзал</p>
        </div>
        <div className="direction__travel">
          <p className="travel__time">{convertSecondsToTimeString(duration)}</p>
          <ArrowIcon direction={direction} />
        </div>
        <div className="direction__point">
          <p className="direction__time">{getTimeStringFromSeconds(from.datetime)}</p>
          <p className="direction__city">{capitalizedString(from.city.name)}</p>
          <p className="direction__station">{from.railway_station_name} вокзал</p>
        </div>
      </div>
    );
  }
}
