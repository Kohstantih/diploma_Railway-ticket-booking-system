import DatePickersAside from '../DatePickersAside/DatePickersAside';
import Facilities from '../Facilities/Facilities';
import CostFilter from '../CostFilter/CostFilter';
import DirectionMovement from '../DirectionMovement/DirectionMovement';

import './SearchOptionsMenu.css';

export default function SearchOptionsMenu() {
  return (
    <section className="search-options">
      <div className="date-picker__container search-options__wrapper">
        <DatePickersAside />
      </div>
      <div className="facilities__container search-options__wrapper">
        <Facilities />
      </div>
      <div className="cost-filter__container search-options__wrapper">
        <CostFilter />
      </div>
      <div className="direction-movement__container search-options__wrapper">
        <DirectionMovement direction={'go'} title={'Туда'} />
      </div>
      <div className="direction-movement__container search-options__wrapper">
        <DirectionMovement direction={'back'} title={'Обратно'} />
      </div>
    </section>
  );
}
