import { useLocation } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';

import Logo from '../Logo/Logo';
import Navbar from '../Navbar/Navbar';
import SearchTrainForm from '../SearchTrainForm/SearchTrainForm';

import './Header.css';

export default function Header() {
  const location = useLocation();
  const [isMain, setIsMain] = useState(true);

  const headerImage = useMemo(() => {
    return isMain ? 'header__image_main' : 'header__image_other';
  }, [isMain]);

  const headerClasses = useMemo(() => {
    return isMain ? '' : ' header__other';
  }, [isMain]);

  useEffect(() => {
    if (location.pathname === '/') setIsMain(true);
    else setIsMain(false);
  }, [location.pathname]);

  return (
    <div className={`header__lining${headerClasses}`}>
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
        <div className="wrapper">
          <div className="header__content-container">
            {isMain && (
              <h1 className="header__title">
                Вся жизнь - <br />
                <span className="header__title_bold">путешествие!</span>
              </h1>
            )}
            <div className="header__form-container">
              <SearchTrainForm isVertical={isMain} />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
