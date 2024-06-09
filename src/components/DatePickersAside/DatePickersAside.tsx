import DateEnter from '../DateEnter/DateEnter';

import './DatePickersAside.css';

export default function DatePickersAside() {
  return (
    <div className="date-picker">
        <div className="date-picker__box">
            <h5 className="date-picker__title">Дата поездки</h5>
            <DateEnter isAside={true} />
        </div>
        <div className="date-picker__box">
            <h5 className="date-picker__title"> Дата возвращения</h5>
            <DateEnter isAside={true} />
        </div>
    </div>
  );
}
