import CounterTrainFound from './CounterTrainFound/CounterTrainFound';
import FilterTrainsFound from './FilterTrainsFound/FilterTrainsFound';
import PaginationTrainsFound from './PaginationTrainsFound/PaginationTrainsFound';
import TrainsList from './TrainsList/TrainsList';

import './TrainsFoundList.css';

export default function TrainsFoundList() {
  const countFound = 20;

  return (
    <main className="trains-found">
      <div className="trains-found__header">
        <p className="trains-found__counter">
          найдено <span>{countFound}</span>
        </p>
        <div className="sorting__container">
          <div className="sorting__filter-types">
            <span>сортировать по: </span>
            <FilterTrainsFound />
          </div>
          <div className="sorting__count">
            <span>показывать по: </span>
            <CounterTrainFound />
          </div>
        </div>
      </div>
      <div className="trains-list__wrapper">
        <TrainsList />
      </div>
      <div className="pagination-trains__wrapper">
        <PaginationTrainsFound countsPage={10} />
      </div>
    </main>
  );
}
