import { useEffect } from 'react';

import { useGetCitiesQuery } from 'state/services/citiesApi';
import { clearCity, setCity } from 'state/reducers/setDirectionsInfoSlice';

import { useAppDispatch } from 'hooks/redux';

import { TCityObject } from 'types/TRouteObject';
import { TDirectionString } from 'types/TDirectionString';

import './CitiesList.css';

export default function CitiesList({
  cityName,
  direction,
  selectCity,
}: {
  cityName: string;
  direction: TDirectionString;
  selectCity: (city: TCityObject) => void;
}) {
  const { data } = useGetCitiesQuery(cityName);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data?.length === 1) dispatch(setCity({ direction: direction, city: data[0] }));
    else dispatch(clearCity(direction));
  }, [data, direction, dispatch]);

  if (!data) return;

  return (
    <ul className="cities-list">
      {data.map((item) => {
        return (
          <li key={item._id} onClick={() => selectCity(item)} className="cities-list__item">
            {item.name}
          </li>
        );
      })}
    </ul>
  );
}
