import { Outlet } from 'react-router-dom';

import ScrollToHashElement from '../ScrollToHashElement/ScrollToHashElement';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import FooterNav from '../FooterNav/FooterNav';

import './Layout.css';

export default function Layout() {
  return (
    <>
      <ScrollToHashElement />
      <Header />
      <Outlet />
      <div className="footer__living">
        <div className="wrapper" style={{marginBottom: '52px'}} >
          <Footer />
        </div>
        <div className="footer__boundary"></div>
        <div className="wrapper">
          <FooterNav />
        </div>
      </div>
    </>
  );
}
