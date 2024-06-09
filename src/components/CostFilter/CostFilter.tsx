import { useRef, useState } from 'react';

import './CostFilter.css';

export default function CostFilter() {
  const [range, setRange] = useState({ min: 1920, current: 7000, max: 7000 });
  const [shareCost, setShareCost] = useState(100);
  const currentWidget = useRef<HTMLParagraphElement>(null);

  return (
    <div className="cost-filter">
      <h5 className="cost-filter__tittle">Стоимость</h5>
      <div className="cost-filter__box">
        <div className="cost-filter__limits-tittles">
          <p className="limits-tittle">от</p>
          <p className="limits-tittle">до</p>
        </div>
        <div
          onClick={(e) => {
            const { min, max } = range;
            const { width, x } = e.currentTarget.getBoundingClientRect();
            const clickX = e.clientX + 12;
            const share = (clickX - x) / width;

            setShareCost(Math.round(share * 100));
            setRange((obj) => {
              const result =
                Math.round((share * (max - min) + min) / 100) * 100;
              obj.current = result > max ? max : result;
              return obj;
            });

            if (currentWidget.current) {
              const { width: currentWidth } =
                currentWidget.current.getBoundingClientRect();

              const value = currentWidth ? currentWidth : 32;

              const minLeft = value + 5;
              const maxLeft = width - 2 * value - 5;
              const newLeft = clickX - x - value * 0.85;

              if (newLeft > minLeft && newLeft < maxLeft) {
                currentWidget.current.style.left = `${newLeft}px`;
              } else {
                currentWidget.current.style.left =
                  newLeft < minLeft ? `${minLeft}px` : `${maxLeft}px`;
              }
            }
          }}
          className="cost-filter__scale"
        >
          <div className="scale__point"></div>
          <div
            className="cost-filter__scale_active"
            style={{
              minWidth: '20px',
              maxWidth: '100%',
              width: `${shareCost}%`,
            }}
          >
            <div className="scale__point scale__point_right"></div>
          </div>
        </div>
        <div className="cost-filter__limits-values">
          <p className="limits-value">{range.min}</p>
          <p
            ref={currentWidget}
            className="limits-value limits-value_current"
            style={{}}
          >
            {range.current < range.max && range.current}
          </p>
          <p className="limits-value">{range.max}</p>
        </div>
      </div>
    </div>
  );
}
