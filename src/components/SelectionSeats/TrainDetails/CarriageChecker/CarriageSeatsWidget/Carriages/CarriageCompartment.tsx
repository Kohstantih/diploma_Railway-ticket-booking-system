import { useCallback, useEffect, useState } from 'react';

import './CarriageStyles.css';

export default function CarriageCompartment({ freeSeats }: { freeSeats: number[] }) {
  const [seatsBox, setSeatsBox] = useState<JSX.Element[]>([]);
  const [seatChecked, setSeatChecked] = useState<number[]>([]);

  const createNumberElement = useCallback(
    (value: number) => {
      if (freeSeats.includes(value)) {
        return (
          <p
            key={`seat${value}`}
            onClick={() => {
              if (seatChecked.includes(value))
                setSeatChecked((arr) => arr.filter((n) => n !== value));
              else setSeatChecked((arr) => [...arr, value]);
            }}
            className={`seat__number seat__number_compartment seat_free${
              seatChecked.includes(value) ? ' seat_checked' : ''
            }`}
          >
            {value}
          </p>
        );
      } else {
        return (
          <p key={`seat${value}`} className={`seat__number seat__number_compartment seat_disabled`}>
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
      firstRow.push(createNumberElement(i));
    }

    const secondRow: JSX.Element[] = [];

    for (let i = 1; i < 32; i += 2) {
      secondRow.push(createNumberElement(i));
    }

    result.push(
      <div key={'section1'} className="seats__section">
        <div className="seats__row">{firstRow}</div>
        <div className="seats__row">{secondRow}</div>
      </div>
    );

    setSeatsBox(result);
  }, [createNumberElement, freeSeats]);

  return (
    <div className="carriage-seat__container carriage-seat__container_small">
      {seatsBox.length !== 0 && seatsBox}
    </div>
  );
}
