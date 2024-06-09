import Contacts from '../Contacts/Contacts';
import Subscription from '../Subscription/Subscription';

import './Footer.css';

export default function Footer() {
  return (
    <footer id="footer" className="footer">
        <Contacts />
        <Subscription />
    </footer>
  );
}
