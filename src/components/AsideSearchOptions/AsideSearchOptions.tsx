import Aside from '../Aside/Aside';
import DatePickersAside from '../DatePickersAside/DatePickersAside';
import Facilities from '../Facilities/Facilities';
import CostFilter from '../CostFilter/CostFilter';
import DirectionMovement from '../DirectionMovement/DirectionMovement';
import LastTicketsList from '../LastTicketsList/LastTicketsList';

import './AsideSearchOptions.css';

export default function AsideSearchOptions() {
  return (
    <div className="aside-search__wrapper">
      <Aside
        children={[
          <DatePickersAside key={'aside-date-picker'} />,
          <Facilities key={'facilities'} />,
          <CostFilter key={'cost-filter'} />,
          <DirectionMovement key={'direction-to'} direction={'to'} title={'Туда'} />,
          <DirectionMovement key={'direction-from'} direction={'from'} title={'Обратно'} />,
        ]}
      />
      <div className="last-ticket__wrapper">
        <LastTicketsList />
      </div>
    </div>
  );
}
