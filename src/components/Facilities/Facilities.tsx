import FacilitiesItem from './FacilitiesItem';
import { facilitiesList } from './facilitiesList';

import { TSearchOptionFacilities } from 'types/TSearchOptionsSlice';

import './Facilities.css';

export default function Facilities() {
  return (
    <ul className="facilities-list">
      {facilitiesList.map((item, index) => (
        <FacilitiesItem
          key={index}
          icon={item.icon}
          tittle={item.title}
          optionName={item.name as keyof TSearchOptionFacilities}
        />
      ))}
    </ul>
  );
}
