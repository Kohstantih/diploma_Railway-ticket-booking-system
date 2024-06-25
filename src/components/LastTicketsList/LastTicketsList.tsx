import { useGetLastTicketQuery } from 'state/services/lastTicketApi';

import LastTicket from './LastTicket';

import './LastTicketsList.css';

export default function LastTicketsList() {
  const { data } = useGetLastTicketQuery('');

  return (
    <div className="last-tickets__container">
      <h4 className="last-tickets__title">Последние билеты</h4>
      <ul className="last-tickets__list">
        {data &&
          data.map((item, index) => (
            <li key={index} className="last-tickets__item">
              <LastTicket ticket={item} />
            </li>
          ))}
      </ul>
    </div>
  );
}
