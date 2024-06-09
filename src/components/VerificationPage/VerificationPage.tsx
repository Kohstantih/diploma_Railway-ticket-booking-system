import { useNavigate } from 'react-router-dom';

import ButtonNext from '../ButtonNext/ButtonNext';
import ButtonEdit from '../ButtonEdit/ButtonEdit';
import TrainsListItem from '../TrainsFoundList/TrainsList/TrainsListItem';
import PassengerCardList from '../PassengerCardList/PassengerCardList';
import CostWidget from '../CostWidget/CostWidget';

import './VerificationPage.css';

export default function VerificationPage() {
  const navigator = useNavigate();

  return (
    <div className="verification__container">
      <ul className="verification__list">
        <li className="verification__item">
          <div className="verification__header">
            <h4 className="verification__tittle">Поезд</h4>
          </div>
          <TrainsListItem />
        </li>
        <li className="verification__item">
          <div className="verification__header">
            <h4 className="verification__tittle">Пассажиры</h4>
          </div>
          <div className="verification__body">
            <div className="verification__content">
              <PassengerCardList />
            </div>
            <div className="verification__aside">
              <p className="verification__total-cost">
                <span>Всего</span>
                <CostWidget
                  value={7760}
                  valueColor={'#292929'}
                  valueFont={30}
                  valutaWidth={20}
                  valutaColor={'#928F94'}
                />
              </p>
              <ButtonEdit tittle={'Изменить'} onClick={() => navigator('/passengers')} />
            </div>
          </div>
        </li>
        <li className="verification__item">
          <div className="verification__header">
            <h4 className="verification__tittle">Способ оплаты</h4>
          </div>
          <div className="verification__body">
            <div className="verification__content">
              <p className="verification__payment-method">{'Наличными'}</p>
            </div>
            <div className="verification__aside">
              <ButtonEdit tittle={'Изменить'} onClick={() => navigator('/payment')} />
            </div>
          </div>
        </li>
      </ul>
      <div className="verification__btn-wrapper">
        <ButtonNext
          tittle={'подтвердить'}
          isActive={true}
          onClick={() => navigator('/successful-order')}
        />
      </div>
    </div>
  );
}
