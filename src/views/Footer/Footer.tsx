import Contacts from 'views/Contacts/Contacts';
import Subscription from 'views/Subscription/Subscription';

import './Footer.css';

export default function Footer() {
  return (
    <footer id="footer" className="footer">
      <Contacts />
      <Subscription />
    </footer>
  );
}
