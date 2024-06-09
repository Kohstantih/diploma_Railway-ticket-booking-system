import { useMemo } from 'react';
import './CollapseRoundIcon.css';

export default function CollapseRoundIcon({
  isActive,
  setIsActive,
}: {
  isActive: boolean;
  setIsActive: (prop: boolean) => void;
}) {
  const collapseClass = useMemo(() => {
    return isActive ? 'collapse-round_active' : 'collapse-round_inactive';
  }, [isActive]);

  return (
    <div onClick={() => setIsActive(!isActive)} className={`collapse-round__box ${collapseClass}`}>
      {!isActive && (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.94491 1.46381L7.94491 7.94493L1.46378 7.94493C0.860886 7.94493 0.408714 8.3971 0.408714 9C0.408714 9.6029 0.860886 10.0551 1.46378 10.0551L7.94491 10.0551L7.94491 16.5362C7.94491 17.1391 8.39708 17.5913 8.92461 17.5159L9.07533 17.5159C9.67823 17.5159 10.1304 17.0637 10.055 16.5362L10.055 10.0551L16.3854 10.0551C16.9883 10.0551 17.4405 9.6029 17.4405 9C17.4405 8.3971 16.9883 7.94493 16.3854 7.94493L10.055 7.94493L10.055 1.46381C10.055 0.860914 9.60287 0.408743 9.07533 0.484105L8.92461 0.484104C8.32172 0.484104 7.86954 0.936276 7.94491 1.46381Z"
            fill="#FFA800"
          />
        </svg>
      )}
      {isActive && (
        <svg
          width="18"
          height="2"
          viewBox="0 0 18 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            className="collapse-round_stroke"
            x1="1"
            y1="1"
            x2="17"
            y2="1"
            stroke="#928F94"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </div>
  );
}
