import { useEffect, useState } from 'react';

import { useAppDispatch } from 'hooks/redux';
import { setOptionFacilities } from 'state/reducers/setSearchOptionsSlice';

import { TSearchOptionFacilities } from 'types/TSearchOptionsSlice';

export default function FacilitiesItem({
  icon,
  tittle,
  optionName,
}: {
  icon: string;
  tittle: string;
  optionName: keyof TSearchOptionFacilities;
}) {
  const [isActive, setIsActive] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setOptionFacilities({ option: optionName, value: isActive }));
  }, [dispatch, isActive, optionName]);

  return (
    <li className="facilities__item">
      <div className={`facilities__icon ${icon}`}></div>
      <h5 className="facilities__title">{tittle}</h5>
      <div
        onClick={() => setIsActive((status) => !status)}
        className={`facilities-toggle__box ${isActive && 'facilities-toggle__box_active'}`}
      >
        <div className={`facilities-toggle ${isActive && 'facilities-toggle_active'}`}></div>
      </div>
    </li>
  );
}
