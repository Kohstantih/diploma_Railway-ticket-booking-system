import { useMemo, useState } from 'react';

import Calendar from '../Calendar/Calendar';

import './DateEnter.css';

export default function DateEnter({ isAside }) {
  const [isOpen, setIsOpen] = useState(false);
  const [dateValue, setDateValue] = useState('');

  const asideClass = useMemo(() => {
    return isAside ? ' date-enter_aside' : '';
  }, [isAside]);

  return (
    <div className={`date-enter__box${asideClass}`}>
      <input
        onChange={(e) => e.target.value}
        value={dateValue}
        type="text"
        className="date-enter__input"
        placeholder="ДД/ММ/ГГ"
      />
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="date-enter__calendar_icon icon_date"
      ></div>
      {isOpen && (
        <div className="date-enter__calendar-wrapper">
          <Calendar setDate={setDateValue} />
        </div>
      )}
    </div>
  );
}
