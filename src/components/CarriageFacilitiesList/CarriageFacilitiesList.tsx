import { useMemo } from 'react';

import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { delService, setService } from 'state/reducers/setServicesSlice';

import ConditionerIcon from 'components/Icons/FacilitiesIcons/ConditionerIcon/ConditionerIcon';
import WiFiIcon from 'components/Icons/FacilitiesIcons/WiFiIcon/WiFiIcon';
import BedSheetsIcon from 'components/Icons/FacilitiesIcons/BedSheetsIcon/BedSheetsIcon';
import FoodIcon from 'components/Icons/FacilitiesIcons/FoodIcon/FoodIcon';

import { TFacilitiesList } from 'types/TFacilitiesList';
import { TCoachObject } from 'types/TSeatsRequestObject';

import './CarriageFacilitiesList.css';

const facilitiesIcons = [ConditionerIcon, WiFiIcon, BedSheetsIcon, FoodIcon];

export default function CarriageFacilitiesList({
  coachObj,
  list,
  setList,
}: {
  coachObj: TCoachObject;
  list: TFacilitiesList;
  setList: React.Dispatch<React.SetStateAction<TFacilitiesList>>;
}) {
  const listFacilities = useMemo(() => Object.keys(list) as (keyof TFacilitiesList)[], [list]);
  const dispatch = useAppDispatch();
  const { carriages } = useAppSelector((state) => state.services);

  return (
    <ul className="carriage-facilities__list">
      {listFacilities.map((item, index) => {
        if (list[item].have) {
          const carriage = carriages.find((el) => el.id === coachObj._id);
          if (carriage && carriage.services.find((c) => c.name === item))
            list[item].status = 'active';

          return (
            <li
              key={index}
              onClick={() => {
                if (list[item].status === 'disabled') return;

                let result = 'inactive';

                if (list[item].status === 'inactive') {
                  result = 'active';
                  if (list[item].priceName)
                    dispatch(
                      setService({
                        carriageId: coachObj._id,
                        serviceObj: { name: item, price: coachObj[list[item].priceName!] },
                      })
                    );
                } else if (list[item].status === 'active') {
                  result = 'inactive';
                  dispatch(delService({ carriageId: coachObj._id, serviceName: item }));
                }

                setList((obj) => ({
                  ...obj,
                  [item]: { ...list[item], status: result },
                }));
              }}
              className="carriage-facilities__list-item"
            >
              {facilitiesIcons[index]({ status: list[item].status })}
            </li>
          );
        }
      })}
    </ul>
  );
}
