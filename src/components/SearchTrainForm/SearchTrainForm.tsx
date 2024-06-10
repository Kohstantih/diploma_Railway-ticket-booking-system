import { useNavigate } from 'react-router-dom';
import { useCallback, useMemo, useState } from 'react';

import DirectionEnter from '../DirectionEnter/DirectionEnter';
import DateEnter from '../DateEnter/DateEnter';

import './SearchTrainForm.css';

export default function SearchTrainForm({ isVertical }: { isVertical: boolean }) {
  const navigator = useNavigate();

  const [directionFrom, setDirectionFrom] = useState('');
  const [directionTo, setDirectionTo] = useState('');

  const containerArrangement = useMemo(() => {
    return isVertical ? 'search-train_vertical' : 'search-train_horizontal';
  }, [isVertical]);

  const switchDirections = useCallback(() => {
    setDirectionFrom(directionTo);
    setDirectionTo(directionFrom);
  }, [directionFrom, directionTo]);

  return (
    <form className={`search-train ${containerArrangement}`}>
      <div className="search-train__containers-wrapper">
        <div className="search-train__container">
          <h4 className="search-train_title">Направление</h4>
          <div className="search-train__inputs">
            <DirectionEnter
              position={'start'}
              direction={directionFrom}
              setDirection={setDirectionFrom}
            />
            <button
              onClick={() => switchDirections()}
              type="button"
              className="search-train__btn-switch"
            ></button>
            <DirectionEnter
              position={'finish'}
              direction={directionTo}
              setDirection={setDirectionTo}
            />
          </div>
        </div>
        <div className="search-train__container">
          <h4 className="search-train_title">Дата</h4>
          <div className="search-train__inputs">
            <DateEnter isAside={false} />
            <DateEnter isAside={false} />
          </div>
        </div>
      </div>
      <button
        onClick={() => {
          navigator('/trains');
        }}
        type="button"
        className="search-train__button"
      >
        Найти билеты
      </button>
    </form>
  );
}
