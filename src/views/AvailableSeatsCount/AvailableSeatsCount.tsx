import { useRef } from 'react';

import usePopover from 'hooks/usePopover';

import AvailableSeatsDetailsList from 'components/AvailableSeatsDetailsList/AvailableSeatsDetailsList';

import './AvailableSeatsCount.css';

export default function AvailableSeatsCount({
  count,
  directionId,
  typeClass,
}: {
  count: number;
  directionId?: string;
  typeClass: 'first' | 'second' | 'third' | 'fourth';
}) {
  const carriageRef = useRef(null);
  const { isOpen, togglePopover } = usePopover(carriageRef, false);

  if (!directionId) return <p className="available-seats__count">{count}</p>;

  return (
    <div ref={carriageRef} onClick={() => togglePopover()} className="available-seats__container">
      <p className="available-seats__count">{count}</p>
      {isOpen && <AvailableSeatsDetailsList id={directionId} typeClass={typeClass} />}
    </div>
  );
}
