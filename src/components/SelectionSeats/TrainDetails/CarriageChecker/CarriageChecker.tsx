import { useState } from 'react';

import CarriageTypesList from './CarriageTypesList/CarriageTypesList';
import CarriageDetails from './CarriageDetails/CarriageDetails';

import './CarriageChecker.css';

export default function CarriageChecker() {
  const [activeType, setActiveType] = useState<string | null>(null);

  return (
    <div className="carriage-checker__container">
      <div className="carriage-checker__header">
        <h3 className="carriage-checker__title">Тип вагона</h3>
        <CarriageTypesList activeType={activeType} setActiveType={setActiveType} />
      </div>
      {activeType && <CarriageDetails type={activeType} />}
    </div>
  );
}
