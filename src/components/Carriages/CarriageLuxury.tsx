import { useCallback, useEffect, useState } from 'react';

import './CarriageStyles.css';

export default function CarriageLuxury({
  checkedSeats,
  freeSeats,
  addSeat,
  deleteSeat,
}: {
  checkedSeats: number[];
  freeSeats: number[];
  addSeat: (number: number) => void;
  deleteSeat: (number: number) => void;
}) {
  const [seatsBox, setSeatsBox] = useState<JSX.Element[]>([]);

  const createNumberElement = useCallback(
    (value: number) => {
      if (freeSeats.includes(value)) {
        return (
          <p
            key={`seat${value}`}
            onClick={() => {
              if (checkedSeats.includes(value)) deleteSeat(value);
              else addSeat(value);
            }}
            className={`seat__number seat__number_luxury seat_free${
              checkedSeats.includes(value) ? ' seat_checked' : ''
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
    [addSeat, checkedSeats, deleteSeat, freeSeats]
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
