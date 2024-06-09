import { facilitiesList } from './facilitiesList';

import FacilitiesItem from './FacilitiesItem';

import './Facilities.css';

export default function Facilities() {
  return (
    <ul className="facilities-list">
      {facilitiesList.map((item, index) => (
        <FacilitiesItem key={index} icon={item.icon} tittle={item.tittle} />
      ))}
    </ul>
  );
}
