import capitalizedString from 'funcs/capitalizedString';

import TrainDirectionDescription from 'views/TrainDirectionDescription/TrainDirectionDescription';
import TrainCarriageSeatsList from 'components/TrainCarriageSeatsList/TrainCarriageSeatsList';

import TrainIcon from 'views/TrainIcon/TrainIcon';

import { TRouteObject } from 'types/TRouteObject';

import './TrainInfo.css';

export default function TrainInfo({
  objectInfo,
  button,
}: {
  objectInfo: TRouteObject;
  button: JSX.Element;
}) {
  return (
    <div className="train-info">
      <div className="train-info__aside">
        <TrainIcon color={'#FFFFFF'} width={86} />
        <h5 className="train-info__number">{objectInfo.departure.train.name}</h5>
        <div className="train-directions">
          {false && (
            <p className="train-directions__start">
              {''} <span className="train-directions__arrow">&#8594;</span>
            </p>
          )}
          <p className="train-directions__boarding">
            {capitalizedString(objectInfo.departure.from.city.name)}{' '}
            <span className="train-directions__arrow">&#8594;</span>
          </p>
          <p className="train-directions__finish">
            {capitalizedString(objectInfo.departure.to.city.name)}
          </p>
        </div>
      </div>
      <div className="train-info__body">
        <div className="train-info__directions-container">
          {objectInfo.departure && (
            <div className="train-info__directions-wrapper">
              <TrainDirectionDescription
                objectDescription={objectInfo.departure}
                direction={'to'}
              />
            </div>
          )}
          {objectInfo.arrival && (
            <div className="train-info__directions-wrapper">
              <TrainDirectionDescription
                objectDescription={objectInfo.arrival}
                direction={'from'}
              />
            </div>
          )}
        </div>
        <div className="train-info__seats-container">
          <div className="train-info__carriages-wrapper">
            <TrainCarriageSeatsList
              availableObj={objectInfo.available_seats_info}
              departureObj={objectInfo.departure}
              arrivalObj={objectInfo.arrival}
            />
          </div>
          <div className="train-info__facilities"></div>
          <div className="train-info__button-wrapper">{button}</div>
        </div>
      </div>
    </div>
  );
}
