import ButtonGoToChooseSeat from 'components/ButtonGoToChooseSeat/ButtonGoToChooseSeat';
import TrainInfo from 'components/TrainInfo/TrainInfo';

import { TRouteObject } from 'types/TRouteObject';

import './TrainsList.css';

export default function TrainsFoundList({ list }: { list: TRouteObject[] }) {
  return (
    <ul className="trains-found__list">
      {list.map((item, index) => (
        <li key={index} className="train-found__item">
          <TrainInfo objectInfo={item} button={ButtonGoToChooseSeat} />
        </li>
      ))}
    </ul>
  );
}
