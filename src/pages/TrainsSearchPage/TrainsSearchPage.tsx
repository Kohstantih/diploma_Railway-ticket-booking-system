import { setOptionFilters } from 'state/reducers/setSearchOptionsSlice';
import { useGetRoutesQuery } from 'state/services/routesApi';

import { useAppSelector, useAppDispatch } from 'hooks/redux';
import { convertInputDateToQueryDate } from 'funcs/convertInputDateToQueryDate';
import { filtrationObject } from 'funcs/filtrationObject';

import FilterTrainsFound from 'components/FilterTrainsFound/FilterTrainsFound';
import CounterTrainFound from 'components/CounterTrainFound/CounterTrainFound';
import PaginationTrainsFound from 'components/PaginationTrainsFound/PaginationTrainsFound';

import CountTrainsFound from 'views/CountTrainsFound/CountTrainsFound';
import TrainsList from 'views/TrainsList/TrainsList';

import { TSearchRoutesQueryArgs } from 'types/TSearchRoutesQueryArgs';

import './TrainsSearchPage.css';

export default function TrainsSearchPage() {
  const { from, to } = useAppSelector((state) => state.directionInfo);
  const { date, hours, facilities, price, filters, sort } = useAppSelector(
    (state) => state.searchOptions
  );
  const { data } = useGetRoutesQuery(
    filtrationObject<TSearchRoutesQueryArgs>({
      from_city_id: from.city._id,
      to_city_id: to.city._id,
      date_start: date.dateStart ? convertInputDateToQueryDate(date.dateStart) : undefined,
      date_end: date.dateEnd ? convertInputDateToQueryDate(date.dateEnd) : undefined,
      date_start_arrival: date.dateStartArrival
        ? convertInputDateToQueryDate(date.dateStartArrival)
        : undefined,
      date_end_arrival: date.dateEndArrival
        ? convertInputDateToQueryDate(date.dateEndArrival)
        : undefined,
      have_first_class: facilities.isFirstClass ? true : undefined,
      have_second_class: facilities.isSecondClass ? true : undefined,
      have_third_class: facilities.isThirdClass ? true : undefined,
      have_fourth_class: facilities.isFourthClass ? true : undefined,
      have_wifi: facilities.isWifi ? true : undefined,
      have_air_conditioning: facilities.isAirConditioning ? true : undefined,
      have_express: facilities.isExpress ? true : undefined,
      price_from: price.priceFrom,
      price_to: price.priceTo,
      start_departure_hour_from: hours.startDepartureHourFrom,
      start_departure_hour_to: hours.startDepartureHourTo,
      start_arrival_hour_from: hours.startArrivalHourFrom,
      start_arrival_hour_to: hours.startArrivalHourTo,
      end_departure_hour_from: hours.endDepartureHourFrom,
      end_departure_hour_to: hours.endDepartureHourTo,
      end_arrival_hour_from: hours.endArrivalHourFrom,
      end_arrival_hour_to: hours.endArrivalHourTo,
      sort,
      limit: filters.limit,
      offset: filters.offset,
    })
  );
  const dispatch = useAppDispatch();

  if (!data) return null;

  return (
    <>
      {data.items.length > 0 && (
        <main className="trains-search">
          <div className="trains-search__header">
            <p className="trains-search__counter">
              найдено <CountTrainsFound count={data.total_count} />
            </p>
            <div className="sorting__container">
              <div className="sorting__filter-types">
                <span>сортировать по: </span>
                <FilterTrainsFound />
              </div>
              <div className="sorting__count">
                <span>показывать по: </span>
                <CounterTrainFound
                  count={filters.limit}
                  setCount={(count) =>
                    dispatch(setOptionFilters({ option: 'limit', value: count }))
                  }
                />
              </div>
            </div>
          </div>
          <div className="trains-list__wrapper">
            <TrainsList list={data.items} />
          </div>
          <div className="pagination-trains__wrapper">
            <PaginationTrainsFound
              countsPage={Math.ceil(data.total_count / filters.limit)}
              setOffset={(value) =>
                dispatch(setOptionFilters({ option: 'offset', value: (value - 1) * filters.limit }))
              }
            />
          </div>
        </main>
      )}
    </>
  );
}
