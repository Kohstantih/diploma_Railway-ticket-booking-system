import { useCallback, useEffect, useState } from 'react';

import './CarriageStyles.css';

export default function CarriageLuxury({ freeSeats }: { freeSeats: number[] }) {
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
            className={`seat__number seat__number_luxury seat_free${
              seatChecked.includes(value) ? ' seat_checked' : ''
            }`}
          >
            {value}
          </p>
        );
      } else {
        return (
          <p key={`seat${value}`} className={`seat__number seat__number_luxury seat_disabled`}>
            {value}
          </p>
        );
      }
    },
    [freeSeats, seatChecked]
  );

  useEffect(() => {
    const result: JSX.Element[] = [];

    for (let i = 1; i < 17; i += 1) {
        result.push(createNumberElement(i));
    }

    setSeatsBox(result);
  }, [createNumberElement, freeSeats]);

  return (
    <div className="carriage-seat__container carriage-seat__container_small seats__row">
      {seatsBox.length !== 0 && seatsBox}
    </div>
  );
}
