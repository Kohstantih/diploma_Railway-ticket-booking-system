import { useMemo, useRef } from 'react';

import usePopover from 'hooks/usePopover';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { setOptionSort } from 'state/reducers/setSearchOptionsSlice';

import './FilterTrainsFound.css';

export default function FilterTrainsFound() {
  const { sort } = useAppSelector((state) => state.searchOptions);
  const dispatch = useAppDispatch();
  const filtersRef = useRef(null);
  const { isOpen, showPopover, hidePopover } = usePopover(filtersRef, false);

  const filtersList = useMemo(
    () => [
      {
        id: 'date',
        name: 'времени',
      },
      {
        id: 'price',
        name: 'стоимости',
      },
      {
        id: 'duration',
        name: 'длительности',
      },
    ],
    []
  );

  return (
    <div ref={filtersRef} onClick={() => showPopover()} className="filters__container">
      <p className="filters__active">{filtersList.find((o) => o.id === sort)?.name}</p>
      {isOpen && (
        <div className="filters__list-wrapper">
          <ul className="filters__list">
            {filtersList.map((item) => (
              <li
                key={item.id}
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch(setOptionSort(item.id));
                  hidePopover();
                }}
                className={
                  item.id === sort ? 'filters__item filters__item_active' : 'filters__item'
                }
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
