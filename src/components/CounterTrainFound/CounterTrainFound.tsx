import { useMemo } from 'react';

import './CounterTrainFound.css';

export default function CounterTrainFound({
  count,
  setCount,
}: {
  count: number;
  setCount: (count: number) => void;
}) {
  const countsList = useMemo(() => [5, 10, 20], []);

  return (
    <ul className="train-count__list">
      {countsList.map((item) => (
        <li
          key={item}
          onClick={() => setCount(item)}
          className={
            item === count ? 'train-count__item train-count__item_active' : 'train-count__item'
          }
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
