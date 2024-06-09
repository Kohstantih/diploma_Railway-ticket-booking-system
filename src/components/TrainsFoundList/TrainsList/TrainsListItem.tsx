import TrainDirectionDescription from '../TrainDirectionDescription/TrainDirectionDescription';
import ChoosingSeatMenu from '../ChoosingSeatMenu/ChoosingSeatMenu';
import TrainIcon from '../../Icons/TrainIcon/TrainIcon';

export default function TrainsListItem() {
  return (
    <div className="train-found">
      <div className="train-found__aside">
        <div className="train-found__image-box">
          <TrainIcon color={'#FFFFFF'} width={86} />
        </div>
        <h5 className="train-found__number">116C</h5>
        <div className="train-directions">
          <p className="train-directions__start">
            Адлер <span className="train-directions__arrow">&#8594;</span>
          </p>
          <p className="train-directions__boarding">
            Москва <span className="train-directions__arrow">&#8594;</span>
          </p>
          <p className="train-directions__finish">Санкт-Петербург</p>
        </div>
      </div>
      <div className="train-found__body">
        <div className="train-found__directions-container">
          <div className="direction-description__wrapper">
            <TrainDirectionDescription direction={'go'} />
          </div>
          <div className="direction-description__wrapper">
            <TrainDirectionDescription direction={'back'} />
          </div>
        </div>
        <div className="train-found__boundary"></div>
        <div className="choosing-seat__menu-container">
          <ChoosingSeatMenu />
        </div>
      </div>
    </div>
  );
}
