import capitalizedString from 'funcs/capitalizedString';

import CostWidget from '../CostWidget/CostWidget';

import { TRouteObject } from 'types/TRouteObject';

export default function LastTicketsItem({ ticket }: { ticket: TRouteObject }) {
  const { departure, arrival, min_price } = ticket;

  return (
    <div className="last-ticket">
      {departure && (
        <div className="city-details__box">
          <div className="text_left">
            <h5 className="city-details__tittle">{capitalizedString(departure.from.city.name)}</h5>
            <p className="city-details__station">
              {departure.from.railway_station_name} <br /> вокзал
            </p>
          </div>
          <div className="text_right">
            <h5 className="city-details__tittle">{capitalizedString(departure.to.city.name)}</h5>
            <p className="city-details__station">
              {departure.to.railway_station_name} <br /> вокзал
            </p>
          </div>
        </div>
      )}
      {arrival && (
        <div className="city-details__box">
          <div className="text_left">
            <h5 className="city-details__tittle">{capitalizedString(arrival.from.city.name)}</h5>
            <p className="city-details__station">
              {arrival.from.railway_station_name} <br /> вокзал
            </p>
          </div>
          <div className="text_right">
            <h5 className="city-details__tittle">{capitalizedString(arrival.to.city.name)}</h5>
            <p className="city-details__station">
              {arrival.to.railway_station_name} <br /> вокзал
            </p>
          </div>
        </div>
      )}
      <div className="last-ticket__content">
        <div className="last-ticket__facilities"></div>
        <div className="last-ticket__cost-box">
          <p className="last-ticket__cost-text">от</p>
          <CostWidget
            value={min_price}
            valueColor={'#ffa800'}
            valueFont={36}
            valutaWidth={20}
            valutaColor={'#928F94'}
          />
        </div>
      </div>
    </div>
  );
}
