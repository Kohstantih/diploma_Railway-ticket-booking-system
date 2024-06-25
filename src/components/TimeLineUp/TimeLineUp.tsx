import { useCallback, useEffect, useRef } from 'react';

import { TRangeObject } from 'types/TRangeObject';

import './TimeLineUp.css';

export default function TimeLineUp({
  range,
  changeRange,
}: {
  range: TRangeObject;
  changeRange: React.Dispatch<React.SetStateAction<TRangeObject>>;
}) {
  const { from, to } = range;

  const scaleEl = useRef<HTMLDivElement>(null);
  const rangeEl = useRef<HTMLDivElement>(null);
  const leftPoint = useRef<HTMLParagraphElement>(null);
  const rightPoint = useRef<HTMLParagraphElement>(null);

  const formatTimeValue = useCallback((value: number) => {
    return `0${value}:00`.slice(-5);
  }, []);

  useEffect(() => {
    if (rangeEl.current && leftPoint.current && rightPoint.current && scaleEl.current) {
      rangeEl.current.style.marginLeft = `${Math.round((100 / 24) * from)}%`;
      rangeEl.current.style.marginRight = `${100 - Math.round((100 / 24) * to)}%`;

      const { width: wScale } = scaleEl.current.getBoundingClientRect();
      const { width: wLeft } = leftPoint.current.getBoundingClientRect();
      const { width: wRight } = rightPoint.current.getBoundingClientRect();

      let leftOffset = Math.round((wScale / 24) * from) - wLeft / 2;
      let rightOffset = wScale - Math.round((wScale / 24) * to) - wRight / 2;

      if (leftOffset + rightOffset > wScale - 2 * wRight) {
        leftOffset = leftOffset - wLeft / 2;
        rightOffset = rightOffset - wRight / 2;
      }

      leftOffset = leftOffset < wLeft / 4 ? 0 : leftOffset;
      rightOffset = rightOffset < wRight / 4 ? 0 : rightOffset;

      if (leftOffset === 0 && rightOffset > wScale - 2 * wRight) {
        rightOffset = wScale - 2 * wRight - 3;
      } else if (rightOffset === 0 && leftOffset > wScale - 2 * wRight) {
        leftOffset = wScale - 2 * wRight - 3;
      }

      leftPoint.current.style.left = `${leftOffset}px`;
      rightPoint.current.style.right = `${rightOffset}px`;
    }
  }, [from, to]);

  return (
    <div className="time-lineup">
      <div
        ref={scaleEl}
        onClick={(e) => {
          if (!leftPoint.current || !rightPoint.current || !rangeEl.current) return;
          const xClick = e.clientX;
          const { x: xScale, width: wScale } = e.currentTarget.getBoundingClientRect();
          const { x: xRange, width: wRange } = rangeEl.current.getBoundingClientRect();
          const offset = ((xClick - xScale) / wScale) * 100;

          if (Math.abs(xRange - xClick) < Math.abs(xRange + wRange - xClick)) {
            const value = Math.round(offset / (100 / 24));

            changeRange((obj) => ({ ...obj, from: value }));
          } else {
            const value = Math.round(offset / (100 / 24));

            changeRange((obj) => ({ ...obj, to: value }));
          }
        }}
        className="time-lineup__scale-border"
      >
        <div ref={rangeEl} className="time-lineup__scale-range">
          <div className="scale-range__point scale-range__point_left"></div>
          <div className="scale-range__point scale-range__point_right"></div>
        </div>
      </div>
      <div className="time-lineup__values-box">
        <p ref={leftPoint} className="time-lineup__value time-lineup__value_left">
          {formatTimeValue(from)}
        </p>
        <p ref={rightPoint} className="time-lineup__value time-lineup__value_right">
          {formatTimeValue(to)}
        </p>
      </div>
    </div>
  );
}
