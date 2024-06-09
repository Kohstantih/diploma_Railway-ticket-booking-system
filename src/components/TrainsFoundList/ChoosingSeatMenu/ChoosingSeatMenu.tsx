import { useNavigate } from 'react-router-dom';

import CarriagesListItem from './CarriagesListItem/CarriagesListItem';

import './ChoosingSeatMenu.css';

export default function ChoosingSeatMenu() {
  const navigator = useNavigate();

  return (
    <div className="choosing-seat">
      <ul className="carriages__list">
        <CarriagesListItem />
        <CarriagesListItem />
        <CarriagesListItem />
        <CarriagesListItem />
      </ul>
      <div className="choosing-seat__facilities"></div>
      <button onClick={() => navigator('/tickets')} type="button" className="choosing-seat__btn">
        Выбрать места
      </button>
    </div>
  );
}
