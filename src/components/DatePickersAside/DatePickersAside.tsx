import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { setOptionDate } from 'state/reducers/setSearchOptionsSlice';

import DateEnter from 'components/DateEnter/DateEnter';

import './DatePickersAside.css';

export default function DatePickersAside() {
  const { date } = useAppSelector((state) => state.searchOptions);
  const dispatch = useAppDispatch();

  return (
    <div className="date-picker">
      <div className="date-picker__box">
        <h5 className="date-picker__title">Дата поездки</h5>
        <DateEnter
          date={date.dateStartArrival}
          setDate={(date) => dispatch(setOptionDate({ option: 'dateStartArrival', value: date }))}
          isAside={true}
        />
      </div>
      <div className="date-picker__box">
        <h5 className="date-picker__title"> Дата возвращения</h5>
        <DateEnter
          date={date.dateEndArrival}
          setDate={(date) => dispatch(setOptionDate({ option: 'dateEndArrival', value: date }))}
          isAside={true}
        />
      </div>
    </div>
  );
}
