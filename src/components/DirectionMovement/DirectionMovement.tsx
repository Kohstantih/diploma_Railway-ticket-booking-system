import { useState } from 'react';

import TimeLineUp from '../TimeLineUp/TimeLineUp';

import { TDirectionMovementProps } from '../../types/TDirectionMovementProps';

import './DirectionMovement.css';
import CollapseSquareIcon from '../Icons/CollapseSquareIcon/CollapseSquareIcon';

export default function DirectionMovement({ direction, title }: TDirectionMovementProps) {
  const iconClasses = {
    go: 'direction-movement__icon_go',
    back: '',
  };

  const [isActive, setIsActive] = useState(false);
  const [rangeGo, setRangeGo] = useState({ from: 2, to: 23 });
  const [rangeBack, setRangeBack] = useState({ from: 11, to: 12 });

  return (
    <div className="direction-movement">
      <div className="direction-movement__header">
        <div className={`direction-movement__icon ${iconClasses[direction]}`}></div>
        <h5 className="direction-movement__title">{title}</h5>
        <CollapseSquareIcon isActive={isActive} setIsActive={setIsActive} />
      </div>
      {isActive && (
        <div className="direction-movement__body">
          <div className="time-lineup__container">
            <h5 className="time-lineup__container-tittle">Время отбытия</h5>
            <TimeLineUp range={rangeGo} changeRange={setRangeGo} />
          </div>
          <div className="time-lineup__container">
            <h5 className="time-lineup__container-tittle tittle_right">Время прибытия</h5>
            <TimeLineUp range={rangeBack} changeRange={setRangeBack} />
          </div>
        </div>
      )}
    </div>
  );
}
