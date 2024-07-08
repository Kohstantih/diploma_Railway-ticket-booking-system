import { useRef } from 'react';

import usePopover from 'hooks/usePopover';

import Calendar from 'components/Calendar/Calendar';

import './DateEnter.css';

export default function DateEnter({
  date,
  setDate,
  isAside,
}: {
  date: string;
  setDate: (date: string) => void;
  isAside: boolean;
}) {
  const calendarRef = useRef(null);
  const { isOpen, togglePopover } = usePopover(calendarRef, false);

  return (
    <div
      onClick={() => {
        if (!isOpen) setDate('');
        togglePopover();
      }}
      ref={calendarRef}
      className={`date-enter__box${isAside ? ' date-enter_aside' : ''}`}
    >
      <input
        readOnly
        value={date}
        type="text"
        className="date-enter__input"
        placeholder="ДД/ММ/ГГ"
      />
      <div className="date-enter__calendar_icon icon_date"></div>
      {isOpen && (
        <div className="date-enter__calendar-wrapper">
          <Calendar setDate={setDate} />
        </div>
      )}
    </div>
  );
}
