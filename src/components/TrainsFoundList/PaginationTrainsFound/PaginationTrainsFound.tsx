import { useCallback, useEffect, useState } from 'react';

import './PaginationTrainsFound.css';

export default function PaginationTrainsFound({ countsPage }: { countsPage: number }) {
  const [activePage, setActivePage] = useState(1);
  const [pages, setPages] = useState<JSX.Element[]>([]);

  const checkClass = useCallback(
    (value: number) => {
      return value === activePage
        ? ' pagination-train__item_active'
        : ' pagination-train__item_other';
    },
    [activePage]
  );

  const incrementActivePage = useCallback(() => {
    setActivePage(activePage < countsPage ? activePage + 1 : countsPage);
  }, [activePage, countsPage]);

  const decrementActivePage = useCallback(() => {
    setActivePage(activePage > 1 ? activePage - 1 : 1);
  }, [activePage]);

  const createItem = useCallback(
    (arr: JSX.Element[], value: number) => {
      arr.push(
        <div
          key={`page${value}`}
          onClick={() => {
            if (value !== activePage) setActivePage(value);
            return;
          }}
          className={`pagination-train__item${checkClass(value)}`}
        >
          <span>{value}</span>
        </div>
      );
    },
    [activePage, checkClass]
  );

  const createItemUndefined = useCallback(
    (arr: JSX.Element[], value: number, status: 'last' | 'next') => {
      arr.push(
        <div
          onClick={() => {
            status === 'last' && setActivePage(activePage - 2);
            status === 'next' && setActivePage(activePage + 2);
          }}
          key={`pagePoints${value}`}
          className={'pagination-train__item pagination-train__item_other'}
        >
          <span>{'. . .'}</span>
        </div>
      );
    },
    [activePage]
  );

  useEffect(() => {
    const result: JSX.Element[] = [];
    if (countsPage < 7) {
      for (let i = 1; i <= countsPage; i += 1) {
        createItem(result, i);
      }
    } else {
      for (let j = 1; j < 7; j += 1) {
        if (j === 1) {
          if (activePage < 3 || activePage > countsPage - 3) {
            createItem(result, 1);
          } else {
            createItemUndefined(result, j, 'last');
          }
        } else if (activePage < countsPage - 3 && j === 5) {
          createItemUndefined(result, j, 'next');
        } else if (j === 6) {
          createItem(result, countsPage);
        } else if (activePage > 2 && activePage < countsPage - 2) {
          createItem(result, activePage - 3 + j);
        } else if (activePage > countsPage - 3) {
          if (j === 2) {
            createItemUndefined(result, j, 'last');
          } else {
            createItem(result, countsPage + j - 6);
          }
        } else {
          createItem(result, j);
        }
      }
    }

    setPages(result);
  }, [activePage, checkClass, countsPage, createItem, createItemUndefined]);

  return (
    <div className="pagination-train__container">
      <div
        onClick={() => decrementActivePage()}
        className="pagination-train__item pagination-train__item_other"
      >
        <svg
          width="18"
          height="29"
          viewBox="0 0 18 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="pagination-arrow"
            d="M6.33625 14.5C9.82076 11.0945 13.1201 7.89424 16.3731 4.72332C17.2669 3.85207 17.1987 2.34671 16.3094 1.47083C15.4416 0.616038 14.1195 0.686134 13.2516 1.54092C9.06317 5.66637 4.86165 9.80466 0.72327 13.8808C0.325571 14.2725 0.325472 14.9137 0.723293 15.3053C4.70972 19.2293 8.86225 23.2984 12.9949 27.3844C13.8955 28.2748 15.2685 28.3485 16.1445 27.4338C16.9987 26.5419 17.0517 25.0479 16.1744 24.1785C13.0758 21.1078 9.80952 17.8945 6.33625 14.5Z"
          />
        </svg>
      </div>

      {pages && pages}

      <div
        onClick={() => incrementActivePage()}
        className="pagination-train__item pagination-train__item_other"
      >
        <svg
          className="pagination-arrow_next"
          width="18"
          height="29"
          viewBox="0 0 18 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="pagination-arrow"
            d="M6.33625 14.5C9.82076 11.0945 13.1201 7.89424 16.3731 4.72332C17.2669 3.85207 17.1987 2.34671 16.3094 1.47083C15.4416 0.616038 14.1195 0.686134 13.2516 1.54092C9.06317 5.66637 4.86165 9.80466 0.72327 13.8808C0.325571 14.2725 0.325472 14.9137 0.723293 15.3053C4.70972 19.2293 8.86225 23.2984 12.9949 27.3844C13.8955 28.2748 15.2685 28.3485 16.1445 27.4338C16.9987 26.5419 17.0517 25.0479 16.1744 24.1785C13.0758 21.1078 9.80952 17.8945 6.33625 14.5Z"
          />
        </svg>
      </div>
    </div>
  );
}
