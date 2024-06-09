import CostWidget from '../CostWidget/CostWidget';

export default function LastTicketsItem() {
  return (
    <li className="last-ticket__item">
      <div className="last-ticket__cities-box">
        <div className="city-details_left">
          <h5 className="city-details__tittle">Санкт-Петербург</h5>
          <p className="city-details__station">
            Курский <br /> вокзал
          </p>
        </div>
        <div className="city-details_right">
          <h5 className="city-details__tittle">Самара</h5>
          <p className="city-details__station">
            Московский <br /> вокзал
          </p>
        </div>
      </div>
      <div className="last-ticket__content">
        <div className="last-ticket__facilities"></div>
        <div className="last-ticket__cost-box">
          <p className="cost__text">от</p>
          <CostWidget
            value={2500}
            valueColor={'#ffa800'}
            valueFont={36}
            valutaWidth={20}
            valutaColor={'#928F94'}
          />
        </div>
      </div>
    </li>
  );
}
