import { useEffect, useRef, useState } from 'react';

import { useAppDispatch } from 'hooks/redux';
import { setOptionPrice } from 'state/reducers/setSearchOptionsSlice';

import './CostFilter.css';

export default function CostFilter() {
  const [range, setRange] = useState({ min: 0, current: 10000, max: 10000 });
  const [shareCost, setShareCost] = useState(100);

  const minWidget = useRef<HTMLParagraphElement>(null);
  const currentWidget = useRef<HTMLParagraphElement>(null);
  const maxWidget = useRef<HTMLParagraphElement>(null);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setOptionPrice({ option: 'priceFrom', value: range.min }));
    dispatch(setOptionPrice({ option: 'priceTo', value: range.current }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, range.current, range.min]);

  return (
    <div className="cost-filter">
      <h5 className="cost-filter__title">Стоимость</h5>
      <div className="cost-filter__box">
        <div className="cost-filter__limits-titles">
          <p className="limits-title">от</p>
          <p className="limits-title">до</p>
        </div>
        <div
          onClick={(e) => {
            const { min, max } = range;
            const { width, x } = e.currentTarget.getBoundingClientRect();
            const clickX = e.clientX + 12;
            const share = (clickX - x) / width;

            setShareCost(Math.round(share * 100));
            setRange((obj) => {
              const result = Math.round((share * (max - min) + min) / 100) * 100;
              obj.current = result > max ? max : result;
              return obj;
            });

            if (currentWidget.current && minWidget.current && maxWidget.current) {
              const { width: currentWidth } = currentWidget.current.getBoundingClientRect();
              const { width: minWidgetWidth } = minWidget.current.getBoundingClientRect();
              const { width: maxWidgetWidth } = maxWidget.current.getBoundingClientRect();

              const value = currentWidth ? currentWidth : 32;

              const minLeft = minWidgetWidth + 5;
              const maxLeft = width - 2 * maxWidgetWidth + 5;
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
          <p ref={minWidget} className="limits-value">
            {range.min}
          </p>
          <p ref={currentWidget} className="limits-value limits-value_current">
            {range.current < range.max && range.current}
          </p>
          <p ref={maxWidget} className="limits-value">
            {range.max}
          </p>
        </div>
      </div>
    </div>
  );
}
