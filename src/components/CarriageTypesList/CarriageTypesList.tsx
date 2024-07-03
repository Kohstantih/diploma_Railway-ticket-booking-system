import { useMemo } from 'react';

import SeatCarriageIcon from 'components/Icons/CarriageTypeIcons/SeatCarriageIcon/SeatCarriageIcon';
import EconomClassCarriageIcon from 'components/Icons/CarriageTypeIcons/EconomClassCarriageIcon/EconomClassCarriageIcon';
import CompartmentCarriageIcon from 'components/Icons/CarriageTypeIcons/CompartmentCarriageIcon/CompartmentCarriageIcon';
import LuxuryCarriageIcon from 'components/Icons/CarriageTypeIcons/LuxuryCarriageIcon/LuxuryCarriageIcon';
import CarriageTypesItem from './CarriageTypesItem';

import { TCarriageClassNames, TCarriageTypesList } from 'types/TCarriageTypesList';

import './CarriageTypesList.css';

export default function CarriageTypesList({
  validList,
  activeType,
  setActiveType,
}: {
  validList: TCarriageClassNames[];
  activeType: TCarriageClassNames | null;
  setActiveType: (type: TCarriageClassNames) => void;
}) {
  const carriageTypesList: TCarriageTypesList = useMemo(
    () => ({
      first: {
        id: 'first',
        title: 'Люкс',
        icon: LuxuryCarriageIcon,
      },
      second: {
        id: 'second',
        title: 'Купе',
        icon: CompartmentCarriageIcon,
      },
      third: {
        id: 'third',
        title: 'Плацкарт',
        icon: EconomClassCarriageIcon,
      },
      fourth: {
        id: 'fourth',
        title: 'Сидячий',
        icon: SeatCarriageIcon,
      },
    }),
    []
  );

  return (
    <ul className="carriage-types__list">
      {validList.map((item) => (
        <CarriageTypesItem
          key={carriageTypesList[item].id}
          obj={carriageTypesList[item]}
          isActive={carriageTypesList[item].id === activeType}
          setActiveId={setActiveType}
        />
      ))}
    </ul>
  );
}
