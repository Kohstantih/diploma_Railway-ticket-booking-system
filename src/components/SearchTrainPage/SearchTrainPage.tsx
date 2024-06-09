import SearchOptionsMenu from '../SearchOptionsMenu/SearchOptionsMenu';
import LastTickets from '../LastTickets/LastTickets';
import TrainsFoundList from '../TrainsFoundList/TrainsFoundList';

import './SearchTrainPage.css';

export default function SearchTrainPage() {
  return (
    <div className="wrapper" style={{ marginTop: '95px' }}>
      <div className="search-page__wrapper">
        <aside className="search-page__aside-wrapper">
          <SearchOptionsMenu />
          <div style={{ marginTop: '94px' }}>
            <LastTickets />
          </div>
        </aside>
        <TrainsFoundList />
      </div>
    </div>
  );
}
