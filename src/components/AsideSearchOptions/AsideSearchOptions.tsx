import { useMemo } from 'react';

import { useAppSelector } from 'hooks/redux';

import Aside from 'components/Aside/Aside';
import DatePickersAside from 'components/DatePickersAside/DatePickersAside';
import Facilities from 'components/Facilities/Facilities';
import CostFilter from 'components/CostFilter/CostFilter';
import AsideSection from 'components/AsideSection/AsideSection';
import TransparentArrowIcon from 'components/Icons/TransparentArrowIcon/TransparentArrowIcon';
import DirectionMovement from 'components/DirectionMovement/DirectionMovement';
import LastTicketsList from 'components/LastTicketsList/LastTicketsList';

import './AsideSearchOptions.css';

export default function AsideSearchOptions() {
  const { date } = useAppSelector((state) => state.searchOptions);

  const checkIsActiveTo = useMemo(
    () => (date.dateStart || date.dateStartArrival ? true : false),
    [date.dateStart, date.dateStartArrival]
  );

  const checkIsActiveFrom = useMemo(
    () => (date.dateEnd || date.dateEndArrival ? true : false),
    [date.dateEnd, date.dateEndArrival]
  );

  return (
    <div className="aside-search__wrapper">
      <Aside
        children={[
          <DatePickersAside key={'aside-date-picker'} />,
          <Facilities key={'facilities'} />,
          <CostFilter key={'cost-filter'} />,
          <AsideSection
            key={'direction-to'}
            icon={<TransparentArrowIcon width={32} direction={'to'} />}
            title={'Туда'}
            isActive={checkIsActiveTo}
            children={<DirectionMovement position={'start'} />}
          />,
          <AsideSection
            key={'direction-from'}
            icon={<TransparentArrowIcon width={32} direction={'from'} />}
            title={'Обратно'}
            isActive={checkIsActiveFrom}
            children={<DirectionMovement position={'end'} />}
          />,
        ]}
      />
      <div className="last-ticket__wrapper">
        <LastTicketsList />
      </div>
    </div>
  );
}
