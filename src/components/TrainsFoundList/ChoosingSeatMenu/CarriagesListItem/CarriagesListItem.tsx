import { useState } from 'react';

import './CarriagesListItem.css';

export default function CarriagesListItem() {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="carriage">
      <p className="carriage__name">Сидячий</p>
      <div onClick={() => setIsOpen(!isOpen)} className="carriage__tickets-count">
        <span>88</span>
        {isOpen && <div className="carriage__tickets-descriptions">
            <div className="tickets-descriptions__item">
                <p className="tickets-descriptions__name">верхние</p>
                <p className="tickets-descriptions__count">53</p>
                <p className="tickets-descriptions__cost">
                    <span className="tickets-descriptions__cost_value">2 500</span>
                    <span className="tickets-descriptions__cost_valuta"></span>
                </p>
            </div>
            <div className="tickets-descriptions__item">
                <p className="tickets-descriptions__name">нижние</p>
                <p className="tickets-descriptions__count">25</p>
                <p className="tickets-descriptions__cost">
                    <span className="tickets-descriptions__cost_value">3 800</span>
                    <span className="tickets-descriptions__cost_valuta"></span>
                </p>
            </div>
        </div>}
      </div>
      <p className="carriage__cost-box">
        <span className="carriage__cost_text">от</span>
        <span className="carriage__cost_value">2 500</span>
        <span className="carriage__cost_valuta"></span>
      </p>
    </li>
  );
}
