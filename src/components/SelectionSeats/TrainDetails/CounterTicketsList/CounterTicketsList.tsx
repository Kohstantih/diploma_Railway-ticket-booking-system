import { useState } from 'react';

import EnterCountTicket from './EnterCountTicket/EnterCountTicket';

import './CounterTicketsList.css';

export default function CounterTicketsList() {
  const [countTicketAdult, setCountTicketAdult] = useState(0);
  const [countTicketChild, setCountTicketChild] = useState(0);
  const [countTicketChildWithoutSeat, setCountTicketChildWithoutSeat] = useState(0);

  return (
    <ul className="counter-tickets__list">
      <li className="counter-tickets__item">
        <div className="counter-tickets__item-wrapper">
          <EnterCountTicket
            text={'Взрослых'}
            value={countTicketAdult}
            setValue={setCountTicketAdult}
            maxValue={5}
          />
          <p className="counter-tickets__details">
            Можно добавить еще
            <br />
            <span>{5 - countTicketAdult}</span> пассажиров
          </p>
        </div>
      </li>
      <li className="counter-tickets__item">
        <div className="counter-tickets__item-wrapper">
          <EnterCountTicket
            text={'Детских'}
            value={countTicketChild}
            setValue={setCountTicketChild}
            maxValue={5}
          />
          <p className="counter-tickets__details">
            Можно добавить еще <span>{5 - countTicketChild}</span> детей до 10 лет.Свое место в
            вагоне, как у взрослых, но дешевле в среднем на 50-65%
          </p>
        </div>
      </li>
      <li className="counter-tickets__item">
        <div className="counter-tickets__item-wrapper">
          <EnterCountTicket
            text={'Детских «без места»'}
            value={countTicketChildWithoutSeat}
            setValue={setCountTicketChildWithoutSeat}
            maxValue={5}
          />
        </div>
      </li>
    </ul>
  );
}
