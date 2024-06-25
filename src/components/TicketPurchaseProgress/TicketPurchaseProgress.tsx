import { useCallback, useMemo } from 'react';

import './TicketPurchaseProgress.css';

export default function TicketPurchaseProgress({ stage }: { stage: number }) {
  const stageTitles = useMemo(() => {
    return ['Билеты', 'Пассажиры', 'Оплата', 'Проверка'];
  }, []);

  const itemClasses = useCallback(
    (value: number) => {
      return value < stage
        ? 'progress__item progress__item_active'
        : 'progress__item progress__item_disabled';
    },
    [stage]
  );

  return (
    <div className="purchase-progress">
      {stageTitles.map((item, index) => {
        return (
          <div key={index} className={itemClasses(index)}>
            <div className="stage">
              <p className="stage__number">
                <span>{index + 1}</span>
              </p>
              <p className="stage__name">{item}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
