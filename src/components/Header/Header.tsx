import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Logo from '../Logo/Logo';
import Navbar from '../Navbar/Navbar';
import SearchTrainForm from '../SearchTrainForm/SearchTrainForm';

import './Header.css';

export default function Header() {
  const location = useLocation();
  const [page, setPage] = useState('main');
  const [headerImage, setHeaderImage] = useState('header__image_main');
  const [headerClass, setHeaderClass] = useState('');

  useEffect(() => {
    if (location.pathname === '/') {
      setPage('main');
      setHeaderImage('header__image_main');
      setHeaderClass('');
    } else if (location.pathname === '/successful-order') {
      setPage('order');
      setHeaderImage('header__image_order');
      setHeaderClass('header__order');
    } else {
      setPage('other');
      setHeaderImage('header__image_other');
      setHeaderClass('header__other');
    }
  }, [location.pathname]);

  return (
    <div className={`header__lining ${headerClass}`}>
      <div className={`header__lining_mask ${headerImage}`}></div>
      <header id="header" className="header">
        <div className="wrapper">
          <Logo />
        </div>
        <div className="header__nav-lining">
          <div className="wrapper">
            <Navbar />
          </div>
        </div>
        {page !== 'order' && (
          <div className="wrapper">
            <div className="header__content-container">
              {page === 'main' && (
                <h1 className="header__title">
                  Вся жизнь - <br />
                  <span className="header__title_bold">путешествие!</span>
                </h1>
              )}
              <div className="header__form-container">
                <SearchTrainForm isVertical={page === 'main' ? true : false} />
              </div>
            </div>
          </div>
        )}
        {page === 'order' && (
          <div className="wrapper">
            <h1 className="header-order__tittle">Благодарим Вас за заказ!</h1>
          </div>
        )}
      </header>
    </div>
  );
}
