import TrainsListItem from './TrainsListItem';

import './TrainsList.css';

export default function TrainsList() {
  return (
    <ul className="trains-found__list">
      <li className="train-found__item">
        <TrainsListItem />
      </li>
      <li className="train-found__item">
        <TrainsListItem />
      </li>
      <li className="train-found__item">
        <TrainsListItem />
      </li>
      <li className="train-found__item">
        <TrainsListItem />
      </li>
      <li className="train-found__item">
        <TrainsListItem />
      </li>
    </ul>
  );
}
