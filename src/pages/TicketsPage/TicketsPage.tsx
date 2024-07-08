import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppSelector } from 'hooks/redux';

import TrainDetails from 'components/TrainDetails/TrainDetails';
import ButtonNext from 'views/ButtonNext/ButtonNext';

import './TicketsPage.css';

export default function TicketsPage() {
  const { route } = useAppSelector((state) => state.activeRoute);
  const { checkedCount } = useAppSelector((state) => state.ticketsCount);
  const { arrival: arrivalChecked, departure: departureChecked } = useAppSelector(
    (state) => state.seatsChecked
  );
  const navigator = useNavigate();

  const isSeatsChecked = useMemo(() => {
    let result = false;

    if (route?.departure && route?.arrival) {
      if (!departureChecked || !arrivalChecked) return result;

      result =
        checkedCount === departureChecked.seats.length &&
        checkedCount === arrivalChecked.seats.length;
    } else if (route?.departure && !route?.arrival) {
      if (!departureChecked) return result;

      result = checkedCount === departureChecked.seats.length;
    }

    return result;
  }, [arrivalChecked, checkedCount, departureChecked, route?.arrival, route?.departure]);

  return (
    <main className="selection-seats">
      <h2 className="selection-seats__title">Выбор мест</h2>
      <div className="selection-seats__container">
        {route?.departure && (
          <div className="selection-seats__container-item">
            <TrainDetails direction={'departure'} />
          </div>
        )}
        {route?.arrival && (
          <div className="selection-seats__container-item">
            <TrainDetails direction={'arrival'} />
          </div>
        )}
      </div>
      <div className="selection-seats__btn-wrapper">
        <ButtonNext
          tittle={'Далее'}
          isActive={isSeatsChecked}
          onClick={() => navigator('/passengers')}
        />
      </div>
    </main>
  );
}
