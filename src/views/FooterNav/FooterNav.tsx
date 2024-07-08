import { Link } from 'react-router-dom';

import Logo from 'components/Logo/Logo';

import './FooterNav.css';

export default function FooterNav() {
  return (
    <div className="footer__nav-container">
      <Logo />
      <nav className="footer__nav">
        <Link to="#header" className="footer__nav-link" />
      </nav>
      <a href="#" className="footer__design-link">
        2024 WEB
      </a>
    </div>
  );
}
