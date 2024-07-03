import { useEffect, useState } from 'react';

import { useGetSeatsQuery } from 'state/services/seatsApi';
import { createAvailableSeatsList } from 'funcs/createAvailableSeatsList';

import CostWidget from 'components/CostWidget/CostWidget';

import { TCarriageClassNames } from 'types/TCarriageTypesList';
import { TSeatsList } from 'types/TSeatsList';

import './AvailableSeatsDetailsList.css';

export default function AvailableSeatsDetailsList({
  id,
  typeClass,
}: {
  id: string;
  typeClass: TCarriageClassNames;
}) {
  const { data } = useGetSeatsQuery({ id });
  const [list, setList] = useState<TSeatsList[]>([]);

  useEffect(() => {
    if (data) {
      const seatsList = createAvailableSeatsList({
        carriagesList: data,
        type: typeClass,
      });
      setList(seatsList);
    }
  }, [data, typeClass]);

  return (
    <>
      {list && (
        <ul className="available-seats__list">
          {list.map((item, index) => (
            <li key={index} className="available-seats__item">
              <p className="seats__name">{item.name}</p>
              <p className="seats__count">{item.count}</p>
              <CostWidget
                value={item.cost}
                valueColor={'#2D2B2F'}
                valueFont={24}
                valutaWidth={16}
                valutaColor={'#928F94'}
              />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
