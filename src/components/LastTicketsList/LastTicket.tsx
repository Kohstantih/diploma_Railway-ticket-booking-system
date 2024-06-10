import CostWidget from '../CostWidget/CostWidget';

export default function LastTicketsItem({
  ticket,
}: {
  ticket: {
    from: { city: string; station: string };
    to: { city: string; station: string };
    cost: number;
  };
}) {
  const { from, to, cost } = ticket;

  return (
    <div className="last-ticket">
      <div className="city-details__box">
        <div className="text_left">
          <h5 className="city-details__tittle">{from.city}</h5>
          <p className="city-details__station">
            {from.station} <br /> вокзал
          </p>
        </div>
        <div className="text_right">
          <h5 className="city-details__tittle">{to.city}</h5>
          <p className="city-details__station">
            {to.station} <br /> вокзал
          </p>
        </div>
      </div>
      <div className="last-ticket__content">
        <div className="last-ticket__facilities"></div>
        <div className="last-ticket__cost-box">
          <p className="last-ticket__cost-text">от</p>
          <CostWidget
            value={cost}
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
