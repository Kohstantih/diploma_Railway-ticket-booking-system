import LastTicketsItem from './LastTicketsItem';

import './LastTickets.css';

export default function LastTickets() {
  return (
    <div className="last-tickets">
      <h4 className="last-ticket__tittle">Последние билеты</h4>
      <ul className="last-ticket__list">
        <LastTicketsItem />
        <LastTicketsItem />
        <LastTicketsItem />
      </ul>
    </div>
  );
}
