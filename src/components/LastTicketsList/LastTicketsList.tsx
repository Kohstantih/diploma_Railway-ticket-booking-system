import { useMemo } from 'react';

import LastTicket from './LastTicket';

import './LastTicketsList.css';

export default function LastTicketsList() {
  const list = useMemo(
    () => [
      {
        from: { city: 'Санкт-Петербург', station: 'Курский' },
        to: { city: 'Самара', station: 'Московский' },
        cost: 2500,
      },
      {
        from: { city: 'Москва', station: 'Курский' },
        to: { city: 'Казань', station: 'Московский' },
        cost: 3500,
      },
      {
        from: { city: 'Казань', station: 'Курский' },
        to: { city: 'Нижний Новгород', station: 'Московский' },
        cost: 3800,
      },
    ],
    []
  );

  return (
    <div className="last-tickets__container">
      <h4 className="last-tickets__tittle">Последние билеты</h4>
      <ul className="last-tickets__list">
        {list.map((item, index) => (
          <li key={index} className="last-tickets__item">
            <LastTicket ticket={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
