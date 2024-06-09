import { useCallback, useEffect, useState } from 'react';

import './CarriageStyles.css';

export default function CarriageEconom({ freeSeats }: { freeSeats: number[] }) {
  const [seatsBox, setSeatsBox] = useState<JSX.Element[]>([]);
  const [seatChecked, setSeatChecked] = useState<number[]>([]);

  const createNumberElement = useCallback(
    (value: number, isSide: boolean) => {
      if (freeSeats.includes(value)) {
        return (
          <p
            key={`seat${value}`}
            onClick={() => {
              if (seatChecked.includes(value))
                setSeatChecked((arr) => arr.filter((n) => n !== value));
              else setSeatChecked((arr) => [...arr, value]);
            }}
            className={`seat__number ${
              isSide ? 'seat__number_econom-side' : 'seat__number_econom'
            } seat_free${seatChecked.includes(value) ? ' seat_checked' : ''}`}
          >
            {value}
          </p>
        );
      } else {
        return (
          <p
            key={`seat${value}`}
            className={`seat__number ${
              isSide ? 'seat__number_econom-side' : 'seat__number_econom'
            } seat_disabled`}
          >
            {value}
          </p>
        );
      }
    },
    [freeSeats, seatChecked]
  );

  useEffect(() => {
    const result: JSX.Element[] = [];

    const firstRow: JSX.Element[] = [];

    for (let i = 2; i < 33; i += 2) {
      firstRow.push(createNumberElement(i, false));
    }

    const secondRow: JSX.Element[] = [];

    for (let i = 1; i < 32; i += 2) {
      secondRow.push(createNumberElement(i, false));
    }

    result.push(
      <div key={'section1'} className="seats__section">
        <div className="seats__row">{firstRow}</div>
        <div className="seats__row">{secondRow}</div>
      </div>
    );

    const thirdRow: JSX.Element[] = [];

    for (let i = 33; i < 49; i += 1) {
      thirdRow.push(createNumberElement(i, true));
    }

    result.push(
      <div key={'section2'} className="seats__section seats__section-econom">
        <div className="seats__row">{thirdRow}</div>
      </div>
    );

    setSeatsBox(result);
  }, [createNumberElement, freeSeats]);

  return <div className="carriage-seat__container">{seatsBox.length !== 0 && seatsBox}</div>;
}
