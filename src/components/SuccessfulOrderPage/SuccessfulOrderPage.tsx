import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import CostWidget from 'components/CostWidget/CostWidget';
import RatingStars from 'components/RatingStars/RatingStars';

import './SuccessfulOrderPage.css';

export default function SuccessfulOrderPage() {
  const navigator = useNavigate();
  const [rating, setRating] = useState(0);

  console.log(rating);

  return (
    <div className="wrapper">
      <div className="successful-order__wrapper">
        <main className="successful-order__container">
          <div className="successful-order__header">
            <p className="order-number">№Заказа {'285АА'}</p>
            <div className="order-cost">
              <p className="order-cost__text">сумма</p>
              <CostWidget
                value={7760}
                valueColor={'#3E3C41'}
                valueFont={36}
                valutaWidth={20}
                valutaColor={'#928F94'}
              />
            </div>
          </div>
          <div className="instruction__wrapper">
            <ul className="instruction__list">
              <li className="instruction__item">
                <div className="instruction__icon instruction__icon_email"></div>
                <p className="instruction__text">
                  билеты будут отправлены на ваш <span className="text_bold">e-mail</span>
                </p>
              </li>
              <li className="instruction__item">
                <div className="instruction__icon instruction__icon_print"></div>
                <p className="instruction__text">
                  <span className="text_bold">распечатайте</span> и сохраняйте билеты до даты
                  поездки
                </p>
              </li>
              <li className="instruction__item">
                <div className="instruction__icon instruction__icon_person"></div>
                <p className="instruction__text">
                  <span className="text_bold">предъявите</span> распечатанные билеты при посадке
                </p>
              </li>
            </ul>
          </div>
          <div className="successful-order__content">
            <p className="successful-order__passenger-name">{'Ирина Эдуардовна'}!</p>
            <p className="successful-order__info">
              <span>Ваш заказ успешно оформлен.</span>
              <br />
              <span>В ближайшее время с вами свяжется наш оператор для подтверждения.</span>
            </p>
            <p className="successful-order__info text_bold">
              Благодарим Вас за оказанное доверие и желаем приятного путешествия!
            </p>
          </div>
          <div className="successful-order__footer">
            <div className="rating__container">
              <p className="rating__text">Оценить сервис</p>
              <div className="rating-star__wrapper">
                <RatingStars count={5} setRating={(number) => setRating(number)} />
              </div>
            </div>
            <button onClick={() => navigator('/')} type="button" className="successful-order__btn">
              вернуться на главную
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
