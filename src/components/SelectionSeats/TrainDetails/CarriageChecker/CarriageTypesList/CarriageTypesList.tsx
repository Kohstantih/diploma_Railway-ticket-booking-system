import SeatCarriageIcon from '../../../../Icons/CarriageTypeIcons/SeatCarriageIcon/SeatCarriageIcon';
import EconomClassCarriageIcon from '../../../../Icons/CarriageTypeIcons/EconomClassCarriageIcon/EconomClassCarriageIcon';
import CompartmentCarriageIcon from '../../../../Icons/CarriageTypeIcons/CompartmentCarriageIcon/CompartmentCarriageIcon';
import LuxuryCarriageIcon from '../../../../Icons/CarriageTypeIcons/LuxuryCarriageIcon/LuxuryCarriageIcon';
import CarriageTypesItem from './CarriageTypesItem';

import './CarriageTypesList.css';

export default function CarriageTypesList({ activeType, setActiveType }) {
  const typesList = [
    {
      id: 'seat',
      title: 'Сидячий',
      icon: SeatCarriageIcon,
    },
    {
      id: 'econom',
      title: 'Плацкарт',
      icon: EconomClassCarriageIcon,
    },
    {
      id: 'compartment',
      title: 'Купе',
      icon: CompartmentCarriageIcon,
    },
    {
      id: 'luxury',
      title: 'Люкс',
      icon: LuxuryCarriageIcon,
    },
  ];

  return (
    <ul className="carriage-types__list">
      {typesList.map((item) => {
        const activeStatus = item.id === activeType;
        return (
          <CarriageTypesItem
            key={item.id}
            obj={item}
            isActive={activeStatus}
            setActiveId={setActiveType}
          />
        );
      })}
    </ul>
  );
}
