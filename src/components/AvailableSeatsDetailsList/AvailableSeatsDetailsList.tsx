import { useEffect, useState } from 'react';

import CostWidget from 'components/CostWidget/CostWidget';

import { useGetSeatsQuery } from 'state/services/seatsApi';

import './AvailableSeatsDetailsList.css';

export default function AvailableSeatsDetailsList({
  id,
  typeClass,
}: {
  id: string;
  typeClass: 'first' | 'second' | 'third' | 'fourth';
}) {
  const { data } = useGetSeatsQuery({ id });
  const [list, setList] = useState<{ name: string; count: number; cost: number }[]>([]);

  useEffect(() => {
    const coachObj = data?.find((el) => el.coach.class_type === typeClass);
    const resultArr = [];
    let countBottom = 0;
    let countTop = 0;
    let countSide = 0;

    if (typeClass === 'second') {
      data?.forEach((el) => {
        if (el.coach.class_type === typeClass) {
          for (let i = 0; i < el.seats.length; i += 1) {
            const element = el.seats[i];

            if (!element.available) break;

            if (element.index % 2) countTop += 1;
            else countBottom += 1;
          }
        }
      });
    }

    if (typeClass === 'third') {
      data?.forEach((el) => {
        if (el.coach.class_type === typeClass) {
          for (let i = 0; i < el.seats.length; i += 1) {
            const element = el.seats[i];

            if (!element.available) break;

            const { index } = element;

            if (index > 32) countSide += 1;
            else if (index < 33 && index % 2) countTop += 1;
            else countBottom += 1;
          }
        }
      });
    }

    if (coachObj && countBottom !== 0)
      resultArr.push({ name: 'нижние', count: countBottom, cost: coachObj.coach.bottom_price });
    if (coachObj && countTop !== 0)
      resultArr.push({ name: 'верхние', count: countTop, cost: coachObj.coach.top_price });
    if (coachObj && countSide !== 0)
      resultArr.push({ name: 'боковые', count: countSide, cost: coachObj.coach.side_price });

    setList(resultArr);
  }, [data, typeClass]);

  return (
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
  );
}
