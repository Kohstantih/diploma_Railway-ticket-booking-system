import './Contacts.css';

export default function Contacts() {
  return (
    <div className="contacts">
      <h3 className="contacts__title">Свяжитесь с нами</h3>
      <ul className="contacts__list">
        <li className="contacts__list-item">
          <div className="contacts__image contacts__image-phone"></div>
          <a href="tel:+8-800-000-00-00" className="contacts__link">
            8 (800) 000 00 00
          </a>
        </li>
        <li className="contacts__list-item">
          <div className="contacts__image contacts__image-email"></div>
          <a href="mailto:inbox@mail.ru" className="contacts__link">
            inbox@mail.ru
          </a>
        </li>
        <li className="contacts__list-item">
          <div className="contacts__image contacts__image-skype"></div>
          <a href="skype:tu.train.tickets?call" className="contacts__link">
            tu.train.tickets
          </a>
        </li>
        <li className="contacts__list-item">
          <div className="contacts__image contacts__image-address"></div>
          <a
            href="http://maps.google.com/?q=г. Москва ул. Московская 27-35 555 555"
            className="contacts__link"
          >
            г. Москва <br /> ул. Московская 27-35 <br /> 555 555
          </a>
        </li>
      </ul>
    </div>
  );
}
