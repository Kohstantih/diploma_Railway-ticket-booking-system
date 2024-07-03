import { useNavigate } from 'react-router-dom';

import { TRouteObject } from 'types/TRouteObject';

import './ButtonGoToChooseSeat.css';
import { useAppDispatch } from 'hooks/redux';
import { setActiveRoute } from 'state/reducers/setActiveRouteSlice';

export default function ButtonGoToChooseSeat({ objectRoute }: { objectRoute: TRouteObject }) {
  const { available_seats } = objectRoute;
  const dispatch = useAppDispatch();
  const navigator = useNavigate();
  
  return (
    <button
      onClick={() => {
        if (!available_seats) return;
        dispatch(setActiveRoute(objectRoute));
        navigator('/tickets');
      }}
      type="button"
      className={`go-ticket__button${!available_seats ? ' go-ticket__button_disabled' : ''}`}
    >
      Выбрать места
    </button>
  );
}
