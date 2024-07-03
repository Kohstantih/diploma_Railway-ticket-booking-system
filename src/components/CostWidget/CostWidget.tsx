import { useMemo } from 'react';

import ValutaIcon from 'views/ValutaIcon/ValutaIcon';

import './CostWidget.css';

export default function CostWidget({
  value,
  valueColor,
  valueFont,
  valutaWidth,
  valutaColor = '#E5E5E5',
}: {
  value: number;
  valueColor: string;
  valueFont: number;
  valutaWidth: number;
  valutaColor: string;
}) {
  const valueString = useMemo(() => {
    const string = value.toString();

    return `${string.slice(0, -3)} ${string.slice(-3)}`;
  }, [value]);

  return (
    <div className="cost-widget">
      <p
        style={{ color: `${valueColor}`, fontSize: `${valueFont}px` }}
        className="cost-widget__value"
      >
        {valueString}
      </p>
      <ValutaIcon width={valutaWidth} color={valutaColor} />
    </div>
  );
}
