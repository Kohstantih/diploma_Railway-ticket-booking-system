import { useMemo } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

export default function Navbar() {
  const navList = useMemo(
    () => [
      {
        name: 'О нас',
        link: 'about',
      },
      {
        name: 'Как это работает',
        link: 'manual',
      },
      {
        name: 'Отзывы',
        link: 'reviews',
      },
      {
        name: 'Контакты',
        link: 'footer',
      },
    ],
    []
  );

  return (
    <nav className="navigation__list logo">
      {navList.map((item, index) => (
        <Link className="nav__link" key={index} to={`/#${item.link}`}>
          {item.name}
        </Link>
      ))}
    </nav>
  );
}
