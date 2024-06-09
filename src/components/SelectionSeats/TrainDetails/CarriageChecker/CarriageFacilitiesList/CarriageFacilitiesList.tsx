import ConditionerIcon from '../../../../Icons/FacilitiesIcons/ConditionerIcon/ConditionerIcon';
import WiFiIcon from '../../../../Icons/FacilitiesIcons/WiFiIcon/WiFiIcon';
import BedSheetsIcon from '../../../../Icons/FacilitiesIcons/BedSheetsIcon/BedSheetsIcon';
import FoodIcon from '../../../../Icons/FacilitiesIcons/FoodIcon/FoodIcon';

import './CarriageFacilitiesList.css';

export default function CarriageFacilitiesList({ list, setList }) {
  const facilities = ['conditioner', 'wifi', 'bedSheets', 'food'];
  const facilitiesIcons = [ConditionerIcon, WiFiIcon, BedSheetsIcon, FoodIcon];

  return (
    <ul className="carriage-facilities__list">
      {facilities.map((item, index) => {
        if (!list[item]) return;

        return (
          <li
            key={index}
            onClick={() => {
              if (list[item] === 'disabled') return;

              const result = list[item] === 'inactive' ? 'active' : 'inactive';

              setList((obj) => ({
                ...obj,
                [item]: result,
              }));
            }}
            className="carriage-facilities__list-item"
          >
            {facilitiesIcons[index]({ status: list[item] })}
          </li>
        );
      })}
    </ul>
  );
}
