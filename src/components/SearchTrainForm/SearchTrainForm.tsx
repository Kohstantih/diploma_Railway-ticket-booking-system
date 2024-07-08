import { useNavigate } from 'react-router-dom';
import { useCallback, useState } from 'react';

import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { switchCity } from 'state/reducers/setDirectionsInfoSlice';
import { setOptionDate } from 'state/reducers/setSearchOptionsSlice';

import DirectionEnter from 'components/DirectionEnter/DirectionEnter';
import DateEnter from 'views/DateEnter/DateEnter';

import './SearchTrainForm.css';

export default function SearchTrainForm({ isVertical }: { isVertical: boolean }) {
  const navigator = useNavigate();
  const { date } = useAppSelector((state) => state.searchOptions);
  const dispatch = useAppDispatch();

  const [directionFrom, setDirectionFrom] = useState('');
  const [directionTo, setDirectionTo] = useState('');

  const switchDirections = useCallback(() => {
    setDirectionFrom(directionTo);
    setDirectionTo(directionFrom);
  }, [directionFrom, directionTo]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        navigator('/trains');
      }}
      className={`search-train ${isVertical ? 'search-train_vertical' : 'search-train_horizontal'}`}
    >
      <div className="search-train__containers-wrapper">
        <div className="search-train__container">
          <h4 className="search-train_title">Направление</h4>
          <div className="search-train__inputs">
            <DirectionEnter value={directionFrom} direction={'from'} setValue={setDirectionFrom} />
            <button
              onClick={() => {
                switchDirections();
                dispatch(switchCity());
              }}
              type="button"
              className="search-train__btn-switch"
            ></button>
            <DirectionEnter value={directionTo} direction={'to'} setValue={setDirectionTo} />
          </div>
        </div>
        <div className="search-train__container">
          <h4 className="search-train_title">Дата</h4>
          <div className="search-train__inputs">
            <DateEnter
              date={date.dateStart}
              setDate={(date) => dispatch(setOptionDate({ option: 'dateStart', value: date }))}
              isAside={false}
            />
            <DateEnter
              date={date.dateEnd}
              setDate={(date) => dispatch(setOptionDate({ option: 'dateEnd', value: date }))}
              isAside={false}
            />
          </div>
        </div>
      </div>
      <button type="submit" className="search-train__button">
        Найти билеты
      </button>
    </form>
  );
}
