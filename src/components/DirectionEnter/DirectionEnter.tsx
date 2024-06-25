import { useMemo, useRef } from 'react';

import usePopover from 'hooks/usePopover';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { setCity } from 'state/reducers/setDirectionsInfoSlice';
import capitalizedString from 'funcs/capitalizedString';

import CitiesList from 'components/CitiesList/CitiesList';

import { TDirectionString } from 'types/TDirectionString';
import { TCityObject } from 'types/TRouteObject';

import './DirectionEnter.css';

export default function DirectionEnter({
  direction,
  value,
  setValue,
}: {
  direction: TDirectionString;
  value: string;
  setValue: (value: string) => void;
}) {
  const popoverRef = useRef(null);
  const { isOpen, showPopover, hidePopover } = usePopover(popoverRef, false);
  const { [direction]: directionInfo } = useAppSelector((state) => state.directionInfo);
  const dispatch = useAppDispatch();

  const placeholderValue = useMemo(() => {
    return direction === 'from' ? 'Откуда' : 'Куда';
  }, [direction]);

  return (
    <div className="direction-enter__box">
      <input
        value={capitalizedString(value)}
        onChange={(e) => {
          showPopover();
          setValue(e.target.value);
        }}
        onBlur={() => {
          if (directionInfo.city.name) setValue(directionInfo.city.name);
        }}
        type="text"
        className="direction-enter__input"
        placeholder={placeholderValue}
        required={true}
      />
      <div className="direction-enter__icon icon_direction"></div>
      {isOpen && value && (
        <div ref={popoverRef} className="cities-list__container">
          <CitiesList
            selectCity={(city: TCityObject) => {
              setValue(city.name);
              dispatch(setCity({ direction, city }));
              hidePopover();
            }}
            cityName={value}
            direction={direction}
          />
        </div>
      )}
    </div>
  );
}
