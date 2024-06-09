import { useMemo, useState } from 'react';
import CitiesList from '../CitiesList/CitiesList';

import './DirectionEnter.css';

export default function DirectionEnter({
  position,
  direction,
  setDirection,
}: {
  position: string;
  direction: string;
  setDirection: (value: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const placeholderValue = useMemo(() => {
    return position === 'start' ? 'Откуда' : 'Куда';
  }, [position]);

  return (
    <div className="direction-enter__box">
      <input
        value={direction}
        // onBlur={() => setIsOpen(false)}
        onChange={(e) => setDirection(e.target.value)}
        type="text"
        className="direction-enter__input"
        placeholder={placeholderValue}
      />
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="direction-enter__icon icon_direction"
      ></div>
      {isOpen && (
        <div className="cities-list__container">
          <CitiesList selectCity={setDirection} />
        </div>
      )}
    </div>
  );
}
