import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from 'hooks/redux';
import { setActiveRoute } from 'state/reducers/setActiveRouteSlice';

import ButtonGoToChooseSeat from 'views/ButtonGoToChooseSeat/ButtonGoToChooseSeat';
import TrainInfo from 'views/TrainInfo/TrainInfo';

import { TRouteObject } from 'types/TRouteObject';

import './TrainsList.css';

export default function TrainsFoundList({ list }: { list: TRouteObject[] }) {
  const dispatch = useAppDispatch();
  const navigator = useNavigate();

  return (
    <ul className="trains-found__list">
      {list.map((item, index) => (
        <li key={index} className="train-found__item">
          <TrainInfo
            objectInfo={item}
            button={
              <ButtonGoToChooseSeat
                onClick={() => {
                  if (!item.available_seats) return;
                  dispatch(setActiveRoute(item));
                  navigator('/tickets');
                }}
                isActive={!!item.available_seats}
              />
            }
          />
        </li>
      ))}
    </ul>
  );
}
