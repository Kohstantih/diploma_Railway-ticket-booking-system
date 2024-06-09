import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import PassengerDataItem from './PassengerDataItem';
import ButtonNext from '../ButtonNext/ButtonNext';

import './PassengerDataList.css';

export default function PassengerDataList() {
  const navigator = useNavigate();
  const [isReady, setIsReady] = useState(true);

  const [passengerCount, setPassengerCount] = useState(0);
  const [passengerList, setPassengerList] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const list: JSX.Element[] = [];

    for (let i = 1; i <= passengerCount; i += 1) {
      list.push(
        <PassengerDataItem
          key={i}
          number={i}
          delPassenger={() => {
            setPassengerCount(passengerCount - 1);
            setPassengerList((arr) => arr.filter((item) => item.key !== `${i}`));
          }}
        />
      );
    }

    setPassengerList(list);
  }, [passengerCount]);

  return (
    <div className="passenger-data__container">
      {passengerList && <ul className="passenger-data__list">{passengerList}</ul>}
      <div className="passenger-data__header passenger-data__header_last">
        <p className="passenger-add__text">Добавить пассажира</p>
        <div onClick={() => setPassengerCount(passengerCount + 1)} className="passenger-add__icon">
          <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.98836 1.50727L7.98836 7.98839L1.50724 7.98839C0.904343 7.98839 0.452171 8.44056 0.452171 9.04346C0.452171 9.64635 0.904343 10.0985 1.50724 10.0985L7.98836 10.0985L7.98836 16.5796C7.98836 17.1825 8.44053 17.6347 8.96807 17.5594L9.11879 17.5594C9.72169 17.5594 10.1739 17.1072 10.0985 16.5796L10.0985 10.0985L16.4289 10.0985C17.0318 10.0985 17.484 9.64635 17.484 9.04346C17.484 8.44056 17.0318 7.98839 16.4289 7.98839L10.0985 7.98839L10.0985 1.50727C10.0985 0.904371 9.64632 0.4522 9.11879 0.527562L8.96807 0.527561C8.36517 0.527561 7.913 0.979733 7.98836 1.50727Z"
              fill="#FFA800"
            />
          </svg>
        </div>
      </div>
      <div className="passenger-data__btn-wrapper">
        <ButtonNext tittle={'Далее'} isActive={true} onClick={() => navigator('/payment')} />
      </div>
    </div>
  );
}
