import { useState } from 'react';

import './CounterTrainFound.css';

export default function CounterTrainFound() {
  const countsList = [5, 10, 20];
  const [actualCount, setActualCount] = useState(countsList[0]);

  const checkClasses = (value: number) => {
    return value === actualCount
      ? 'train-count__item train-count__item_active'
      : 'train-count__item';
  };

  return (
    <ul className="train-count__list">
      {countsList.map((item) => (
        <li key={item} onClick={() => setActualCount(item)} className={checkClasses(item)}>
          {item}
        </li>
      ))}
    </ul>
  );
}
