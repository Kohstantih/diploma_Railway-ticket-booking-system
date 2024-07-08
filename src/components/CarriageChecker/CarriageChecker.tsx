import { useMemo, useState } from 'react';

import { useAppSelector } from 'hooks/redux';

import CarriageTypesList from 'components/CarriageTypesList/CarriageTypesList';
import CarriageDetails from 'components/CarriageDetails/CarriageDetails';

import { TCarriageClassNames } from 'types/TCarriageTypesList';

import './CarriageChecker.css';

export default function CarriageChecker({ direction }: { direction: 'departure' | 'arrival' }) {
  const { route } = useAppSelector((state) => state.activeRoute);

  const [activeType, setActiveType] = useState<TCarriageClassNames | null>(null);

  const detailsElement = useMemo(() => {
    if (route && activeType)
      return <CarriageDetails direction={direction} type={activeType} route={route} />;
  }, [activeType, direction, route]);

  const element = useMemo(() => {
    if (!route) return null;
    else {
      const { [direction]: routeObj } = route;

      return (
        <div className="carriage-checker__container">
          <div className="carriage-checker__header">
            <h3 className="carriage-checker__title">Тип вагона</h3>
            <CarriageTypesList
              validList={Object.keys(routeObj.available_seats_info) as TCarriageClassNames[]}
              activeType={activeType}
              setActiveType={setActiveType}
            />
          </div>
          {detailsElement}
        </div>
      );
    }
  }, [activeType, detailsElement, direction, route]);

  return element;
}
