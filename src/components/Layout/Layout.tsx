import { Outlet } from 'react-router-dom';

import ScrollToHashElement from 'components/ScrollToHashElement/ScrollToHashElement';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import FooterNav from 'components/FooterNav/FooterNav';
import Loading from 'components/Loading/Loading';

import './Layout.css';

export default function Layout() {
  const isLOading = false;

  return (
    <>
      <ScrollToHashElement />
      <Header />
      {isLOading && <Loading />}
      {!isLOading && <Outlet />}
      <div className="footer__living">
        <div className="wrapper" style={{ marginBottom: '52px' }}>
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
