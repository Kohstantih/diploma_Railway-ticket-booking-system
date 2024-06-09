import { useState } from 'react';

import { TFacilitiesItemProps } from '../../types/TFacilitiesItemProps';

export default function FacilitiesItem({ icon, tittle }: TFacilitiesItemProps) {
  const [isActive, setIsActive] = useState(false);

  return (
    <li className="facilities__item">
      <div className={`facilities__icon ${icon}`}></div>
      <h5 className="facilities__title">{tittle}</h5>
      <div
        onClick={() => setIsActive(!isActive)}
        className={`facilities-toggle__box ${
          isActive && 'facilities-toggle__box_active'
        }`}
      >
        <div
          className={`facilities-toggle ${
            isActive && 'facilities-toggle_active'
          }`}
        ></div>
      </div>
    </li>
  );
}
