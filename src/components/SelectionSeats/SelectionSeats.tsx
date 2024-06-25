import { useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import TrainDetails from './TrainDetails/TrainDetails';

import './SelectionSeats.css';

export default function SelectionSeats() {
  const { state } = useLocation();

  const navigator = useNavigate();

  const [isActiveBtn, setIsActiveBtn] = useState(true);

  const classesBtn = useMemo(() => {
    return isActiveBtn ? 'selection-seats__btn_active' : 'selection-seats__btn_disabled';
  }, [isActiveBtn]);

  return (
    <main className="selection-seats">
      <h2 className="selection-seats__title">Выбор мест</h2>
      <div className="selection-seats__container">
        <div className="selection-seats__container-item">
          <TrainDetails direction={'go'} />
        </div>
        <div className="selection-seats__container-item">
          <TrainDetails direction={'back'} />
        </div>
      </div>
      <div className="selection-seats__btn-container">
        <button
          onClick={() => navigator('/passengers')}
          type="button"
          className={`selection-seats__btn ${classesBtn}`}
        >
          Далее
        </button>
      </div>
    </main>
  );
}
