import { useCallback, useEffect, useState } from 'react';
import { months } from '../Months';

import DatePicker from './DatePicker';

import { TCalendarTableProps } from 'types/TCalendarTableProps';
import { TTimeState } from 'types/TDatePickerProps';

import './CalendarTable.css';

export default function CalendarTable({ setDate, year, month, today, now }: TCalendarTableProps) {
  const [list, setList] = useState<JSX.Element[]>([]);
  const [dateChecked, setDateChecked] = useState<number>(0);

  const checkDate = useCallback(
    (date: number) => {
      setDateChecked(date);
      setDate(`${`0${date}`.slice(-2)}.${`0${month + 1}`.slice(-2)}.${`${year}`.slice(-2)}`);
    },
    [month, setDate, year]
  );

  useEffect(() => {
    const dateBeginMonth = new Date(year, month, 1);
    const firstDayNumber = dateBeginMonth.getDay() === 0 ? 7 : dateBeginMonth.getDay();
    const numberLastMonth = month === 0 ? 11 : month - 1;
    const lastMonthLength =
      year % 4 === 0 && numberLastMonth === 1
        ? months[numberLastMonth].leapDuration
        : months[numberLastMonth].duration;
    const thisMonthLength =
      year % 4 === 0 && month === 1 ? months[month].leapDuration : months[month].duration;

    let lastValue = 0;
    let timeState: TTimeState = 'now';

    if (year === now.getFullYear() && month === now.getMonth()) {
      timeState = 'now';
    } else if (year > now.getFullYear() || (year === now.getFullYear() && month > now.getMonth())) {
      timeState = 'future';
    } else {
      timeState = 'past';
    }

    const firstWeek: JSX.Element[] = [];

    for (let j = 1; j < 8; j += 1) {
      if (j < firstDayNumber && lastMonthLength) {
        const value = lastMonthLength - firstDayNumber + j + 1;
        firstWeek.push(
          <DatePicker
            key={`other${value}`}
            value={value}
            status={'otherMonth'}
            today={today}
            timeState={timeState}
            checked={dateChecked}
            toggleChecked={checkDate}
          />
        );
      } else if (j === firstDayNumber) {
        firstWeek.push(
          <DatePicker
            key={`this${1}`}
            value={1}
            status={'thisMonth'}
            today={today}
            timeState={timeState}
            checked={dateChecked}
            toggleChecked={checkDate}
          />
        );
      } else if (j > firstDayNumber) {
        const value = j - firstDayNumber + 1;
        firstWeek.push(
          <DatePicker
            key={`this${value}`}
            value={value}
            status={'thisMonth'}
            today={today}
            timeState={timeState}
            checked={dateChecked}
            toggleChecked={checkDate}
          />
        );
      }

      if (j === 7) lastValue = j - firstDayNumber + 1;
    }

    setList((value) => [
      ...value,
      <tr className="calendar__table-row" key={'firstWeek'}>
        {firstWeek}
      </tr>,
    ]);

    if (thisMonthLength) {
      for (let u = 0; u < thisMonthLength / 7; u += 1) {
        const otherWeek: JSX.Element[] = [];

        for (let o = 1; o < 8; o += 1) {
          const value = lastValue + o;

          if (value < thisMonthLength) {
            otherWeek.push(
              <DatePicker
                key={`this${value}`}
                value={value}
                status={'thisMonth'}
                today={today}
                timeState={timeState}
                checked={dateChecked}
                toggleChecked={checkDate}
              />
            );

            if (o === 7) lastValue = value;
          }
        }

        if (otherWeek.length === 7) {
          setList((value) => [
            ...value,
            <tr className="calendar__table-row" key={`week${u}`}>
              {otherWeek}
            </tr>,
          ]);
        }
      }
    }

    if (thisMonthLength && lastValue < thisMonthLength) {
      const lastWeek: JSX.Element[] = [];

      let toggle = true;

      for (let l = 1; l < 8; l += 1) {
        if (toggle) {
          const value = lastValue + l;
          lastWeek.push(
            <DatePicker
              key={`this${value}`}
              value={value}
              status={'thisMonth'}
              today={today}
              timeState={timeState}
              checked={dateChecked}
              toggleChecked={checkDate}
            />
          );
          if (value === thisMonthLength) {
            toggle = false;
            lastValue = 0;
          }
        } else {
          lastValue += 1;
          lastWeek.push(
            <DatePicker
              key={`next${lastValue}`}
              value={lastValue}
              status={'otherMonth'}
              today={today}
              timeState={timeState}
              checked={dateChecked}
              toggleChecked={checkDate}
            />
          );
        }
      }

      setList((value) => [
        ...value,
        <tr className="calendar__table-row" key={'lastWeek'}>
          {lastWeek}
        </tr>,
      ]);
    }

    return () => {
      setList([]);
    };
  }, [checkDate, dateChecked, month, now, today, year]);

  return (
    <table className="calendar__table">
      <tbody>{list}</tbody>
    </table>
  );
}
