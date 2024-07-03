import { useCallback, useEffect, useState } from 'react';

import './CarriageStyles.css';

export default function CarriageCompartment({
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
            className={`seat__number seat__number_compartment seat_free${
              checkedSeats.includes(value) ? ' seat_checked' : ''
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
    [addSeat, checkedSeats, deleteSeat, freeSeats]
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
