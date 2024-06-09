import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Checkbox from '../Checkbox/Checkbox';
import FullNameInputs from '../FullNameInputs/FullNameInputs';
import InputData from '../InputData/InputData';
import ButtonNext from '../ButtonNext/ButtonNext';

import './PaymentPage.css';

export default function PaymentPage() {
  const navigator = useNavigate();

  const [isOnLine, setIsOnLine] = useState(false);
  const [isCash, setIsCash] = useState(false);

  return (
    <div className="payment__wrapper">
      <div className="payment__container">
        <div className="payment__header">
          <h3 className="payment__tittle">Персональные данные</h3>
        </div>
        <div className="personal-data__body">
          <FullNameInputs />
          <div className="payment-item__wrapper">
            <InputData
              tittle={'Контактный телефон'}
              id={'phone'}
              setValue={console.log}
              placeholder="+7 __ __ _ _"
            />
          </div>
          <div className="payment-item__wrapper">
            <InputData
              tittle={'E-mail'}
              id={'mail'}
              setValue={console.log}
              placeholder="inbox@gmail.ru"
            />
          </div>
        </div>
        <div className="payment__header">
          <h3 className="payment__tittle">Способ оплаты</h3>
        </div>
        <div className="payment-method__box">
          <Checkbox
            tittle={'Онлайн'}
            status={isOnLine}
            setStatus={() => {
              setIsCash(false);
              setIsOnLine(true);
            }}
          />
          <ul className="payment-method__list">
            <li className="payment-method__item">Банковской картой</li>
            <li className="payment-method__item">PayPal</li>
            <li className="payment-method__item">Visa QIWI Wallet</li>
          </ul>
        </div>
        <div className="payment-method__box">
          <Checkbox
            tittle={'Наличными'}
            status={isCash}
            setStatus={() => {
              setIsCash(true);
              setIsOnLine(false);
            }}
          />
        </div>
      </div>
      <div className="payment-btn__wrapper">
        <ButtonNext tittle={'Купить билеты'} isActive={true} onClick={() => navigator('/verification')} />
      </div>
    </div>
  );
}
