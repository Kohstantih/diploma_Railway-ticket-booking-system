import { useMemo } from 'react';

export default function CarriageTypesItem({ obj, isActive, setActiveId }) {
  const color = useMemo(() => {
    return isActive ? '#FFA800' : '#C4C4C4';
  }, [isActive]);

  return (
    <li onClick={() => setActiveId(obj.id)} className="carriage-types__item">
      {obj.icon({ isActive: isActive })}
      <h5 style={{ color: color }} className="carriage-types__title">
        {obj.title}
      </h5>
    </li>
  );
}
