import { useState } from 'react';

import './FilterTrainsFound.css';

export default function FilterTrainsFound() {
  const filtersList = [
    {
      id: 1,
      name: 'времени',
    },
    {
      id: 2,
      name: 'стоимости',
    },
    {
      id: 3,
      name: 'длительности',
    },
  ];
  const [activeFilter, setActiveFilter] = useState(filtersList[0]);
  const [isOpen, setIsOpen] = useState(false);

  const checkClass = (id: number) => {
    return id === activeFilter.id ? 'filters__item filters__item_active' : 'filters__item';
  };

  return (
    <div onClick={() => setIsOpen(!isOpen)} className="filters__container">
      <p className="filters__active">{activeFilter.name}</p>
      {isOpen && (
        <ul className="filters__list">
          {filtersList.map((item) => (
            <li key={item.id} onClick={() => setActiveFilter(item)} className={checkClass(item.id)}>
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
