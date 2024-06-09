import LastTickets from '../LastTickets/LastTickets';
import SearchOptionsMenu from '../SearchOptionsMenu/SearchOptionsMenu';
import SelectionSeats from '../SelectionSeats/SelectionSeats';

import './SelectionOfSeatsPage.css';

export default function SelectionOfSeatsPage() {
  return (
    <div className="wrapper" style={{ marginTop: '95px' }}>
      <div className="selection-seats__wrapper">
        <aside className="selection-seats__aside-wrapper">
          <SearchOptionsMenu />
          <div style={{ marginTop: '94px' }}>
            <LastTickets />
          </div>
        </aside>
        <SelectionSeats />
      </div>
    </div>
  );
}
