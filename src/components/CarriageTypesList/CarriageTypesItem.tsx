import { TCarriageClassNames, TCarriageTypesObject } from 'types/TCarriageTypesList';

export default function CarriageTypesItem({
  obj,
  isActive,
  setActiveId,
}: {
  obj: TCarriageTypesObject;
  isActive: boolean;
  setActiveId: (type: TCarriageClassNames) => void;
}) {
  return (
    <li onClick={() => setActiveId(obj.id)} className="carriage-types__item">
      {obj.icon({ isActive: isActive })}
      <h5 style={{ color: isActive ? '#FFA800' : '#C4C4C4' }} className="carriage-types__title">
        {obj.title}
      </h5>
    </li>
  );
}
