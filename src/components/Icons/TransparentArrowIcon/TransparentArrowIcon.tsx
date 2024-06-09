import { useMemo } from 'react';

import './TransparentArrowIcon.css';

export default function TransparentArrowIcon({
  width = 32,
  direction = 'to',
}: {
  width: number;
  direction: 'from' | 'to';
}) {
  const widthDefault = 32;
  const scale = useMemo(() => Math.round(Number((width / widthDefault).toFixed(1))), [width]);
  const height = Math.round(width * 0.8125);

  return (
    <div
      style={{ height: `${height}px` }}
      className={`transparent-arrow${direction === 'from' ? ' transparent-arrow_from' : ''}`}
    >
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform={`scale(${scale})`}>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5 0C2.23828 0 0 2.23859 0 5V21C0 23.7614 2.23828 26 5 26H27C29.7617 26 32 23.7614 32 21V5C32 2.23859 29.7617 0 27 0H5ZM17.8369 14.2237V17.3333C19.3447 15.8793 20.8672 14.4108 22.3164 13.0288L20.5342 11.2945C19.6396 10.4247 18.7334 9.54568 17.8223 8.66666V11.949H9.68457V14.2237H17.8369Z"
            fill="#FFA800"
          />
        </g>
      </svg>
    </div>
  );
}
