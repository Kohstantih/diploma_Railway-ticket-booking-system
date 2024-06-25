import './CollapseSquareIcon.css';

export default function CollapseSquareIcon({
  isOpen,
  toggleIsOpen,
}: {
  isOpen: boolean;
  toggleIsOpen: () => void;
}) {
  return (
    <div onClick={() => toggleIsOpen()} className="collapse-square__container">
      {!isOpen && (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="collapse-square__fill"
            d="M9.22204 4.20293L9.22204 9.18841L4.23656 9.18841C3.7728 9.18841 3.42497 9.53623 3.42497 10C3.42497 10.4638 3.7728 10.8116 4.23656 10.8116L9.22204 10.8116L9.22204 15.7971C9.22204 16.2608 9.56987 16.6087 9.97566 16.5507L10.0916 16.5507C10.5554 16.5507 10.9032 16.2029 10.8452 15.7971V10.8116H15.7148C16.1785 10.8116 16.5264 10.4638 16.5264 10C16.5264 9.53623 16.1785 9.18841 15.7148 9.18841H10.8452V4.20293C10.8452 3.73917 10.4974 3.39134 10.0916 3.44931L9.97566 3.44931C9.5119 3.44931 9.16407 3.79714 9.22204 4.20293Z"
            fill="white"
          />
          <rect
            className="collapse-square__stroke"
            x="1"
            y="1"
            width="18"
            height="18"
            rx="4"
            stroke="white"
            strokeWidth="2"
          />
        </svg>
      )}
      {isOpen && (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            className="collapse-square__stroke"
            x="1"
            y="1"
            width="18"
            height="18"
            rx="4"
            stroke="#C4C4C4"
            strokeWidth="2"
          />
          <line
            className="collapse-square__stroke"
            x1="5.61523"
            y1="9.76929"
            x2="14.3845"
            y2="9.76929"
            stroke="#C4C4C4"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </div>
  );
}
