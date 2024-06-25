import { useNavigate } from 'react-router-dom';

import { TRouteObject } from 'types/TRouteObject';

import './ButtonGoToChooseSeat.css';

export default function ButtonGoToChooseSeat({ objectRoute }: { objectRoute: TRouteObject }) {
  const { available_seats, departure, arrival } = objectRoute;
  const navigator = useNavigate();
  console.log(departure, arrival);
  return (
    <button
      onClick={() => {
        if (!available_seats) return;
        console.log(objectRoute);
        navigator('/tickets', {state: {departureId: departure._id, arrivalId: arrival ? arrival._id : ''}});
      }}
      type="button"
      className={`go-ticket__button${!available_seats ? ' go-ticket__button_disabled' : ''}`}
    >
      Выбрать места
    </button>
  );
}
