import { useAppSelector } from 'hooks/redux';

import CostWidget from 'components/CostWidget/CostWidget';

import './PassengersInform.css';

export default function PassengersInform() {
  const { adultCount, childrenCount, childrenWithoutSeatCount } = useAppSelector(
    (state) => state.ticketsCount
  );

  const { departure, arrival } = useAppSelector((state) => state.price);

  return (
    <div className="passengers-inform">
      {adultCount && (
        <div className="passengers-inform__box">
          <p className="passengers__count">
            <span>{adultCount}</span> <span>{adultCount === 1 ? 'взрослый' : 'взрослых'}</span>
          </p>
          <CostWidget
            value={departure.adultPrice + arrival.adultPrice}
            valueColor={'#FFFFFF'}
            valueFont={24}
            valutaWidth={14}
            valutaColor={'#928F94'}
          />
        </div>
      )}
      {(childrenCount || childrenWithoutSeatCount) && (
        <div className="passengers-inform__box">
          <p className="passengers__count">
            <span>{childrenCount + childrenWithoutSeatCount}</span>{' '}
            <span>{childrenCount + childrenWithoutSeatCount === 1 ? 'ребёнок' : 'детей'}</span>
          </p>
          <CostWidget
            value={departure.childrenPrice + arrival.childrenPrice}
            valueColor={'#FFFFFF'}
            valueFont={24}
            valutaWidth={14}
            valutaColor={'#928F94'}
          />
        </div>
      )}
    </div>
  );
}
