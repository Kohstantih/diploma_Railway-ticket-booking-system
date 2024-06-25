import { useCallback, useEffect, useState } from 'react';

import AvailableSeatsCount from 'views/AvailableSeatsCount/AvailableSeatsCount';
import CostWidget from 'components/CostWidget/CostWidget';

import { TRouteObjectDirection, TSeatsInfoObject } from 'types/TRouteObject';

import './TrainCarriageSeatsList.css';

export default function TrainCarriagesSeatsList({
  availableObj,
  departureObj,
  arrivalObj,
}: {
  availableObj: TSeatsInfoObject;
  departureObj: TRouteObjectDirection;
  arrivalObj: TRouteObjectDirection | undefined;
}) {
  const [list, setList] = useState<JSX.Element[]>([]);

  const determinationIdDirection = useCallback((nameClass: 'second' | 'third') => {
    return departureObj.available_seats_info[nameClass] === availableObj[nameClass] ? departureObj._id : arrivalObj?._id;
    
  }, [arrivalObj?._id, availableObj, departureObj._id, departureObj.available_seats_info]);

  const minPriceFirst = useCallback(() => {
    let min = 0;

    if (departureObj.price_info.first && !arrivalObj) {
      min = departureObj.price_info.first.price;
    } else if (departureObj.price_info.first && arrivalObj?.price_info.first) {
      Math.min(departureObj.price_info.first.price, arrivalObj.price_info.first.price);
    } else if (arrivalObj) {
      min = arrivalObj.price_info.first.price;
    }

    return min;
  }, [arrivalObj, departureObj.price_info.first]);

  const minPriceSecond = useCallback(() => {
    let min = 0;

    if (departureObj.price_info.second && !arrivalObj) {
      min = Math.min(
        departureObj.price_info.second.bottom_price,
        departureObj.price_info.second.top_price
      );
    } else if (departureObj.price_info.second && arrivalObj?.price_info.second) {
      min = Math.min(
        departureObj.price_info.second.bottom_price,
        departureObj.price_info.second.top_price,
        arrivalObj.price_info.second.bottom_price,
        arrivalObj.price_info.second.top_price
      );
    } else if (arrivalObj) {
      min = Math.min(
        arrivalObj.price_info.second.bottom_price,
        arrivalObj.price_info.second.top_price
      );
    }

    return min;
  }, [arrivalObj, departureObj.price_info.second]);

  const minPriceThird = useCallback(() => {
    let min = 0;

    if (departureObj.price_info.third && !arrivalObj) {
      min = Math.min(
        departureObj.price_info.third.bottom_price,
        departureObj.price_info.third.top_price,
        departureObj.price_info.third.side_price
      );
    } else if (departureObj.price_info.third && arrivalObj?.price_info.third) {
      min = Math.min(
        departureObj.price_info.third.bottom_price,
        departureObj.price_info.third.top_price,
        departureObj.price_info.third.side_price,
        arrivalObj.price_info.third.bottom_price,
        arrivalObj.price_info.third.top_price,
        arrivalObj.price_info.third.side_price
      );
    } else if (arrivalObj?.price_info.third) {
      min = Math.min(
        arrivalObj.price_info.third.bottom_price,
        arrivalObj.price_info.third.top_price,
        arrivalObj.price_info.third.side_price
      );
    }

    return min;
  }, [arrivalObj, departureObj.price_info.third]);

  const minPriceForth = useCallback(() => {
    let min = 0;

    if (departureObj.price_info.fourth && !arrivalObj) {
      min = departureObj.price_info.fourth.bottom_price;
    } else if (departureObj.price_info.fourth && arrivalObj?.price_info.fourth) {
      Math.min(
        departureObj.price_info.fourth.bottom_price,
        arrivalObj.price_info.fourth.bottom_price
      );
    } else if (arrivalObj) {
      min = arrivalObj.price_info.fourth.bottom_price;
    }

    return min;
  }, [arrivalObj, departureObj.price_info.fourth]);

  useEffect(() => {
    const result: JSX.Element[] = [];

    if (availableObj.first) {
      result.push(
        <li key={'carriage-first-class'} className="carriage-seats__item">
          <p className="carriage__name">Люкс</p>
          <div className="available-seats__wrapper">
            <AvailableSeatsCount count={availableObj.first} typeClass={'first'} />
          </div>
          <div className="carriage-cost__box">
            <p className="carriage-cost__text">от</p>
            <CostWidget
              value={minPriceFirst()}
              valueColor={'#2D2B2F'}
              valueFont={24}
              valutaWidth={16}
              valutaColor={'#928F94'}
            />
          </div>
        </li>
      );
    }

    if (availableObj.second) {
      result.push(
        <li key={'carriage-second-class'} className="carriage-seats__item">
          <p className="carriage__name">Купе</p>
          <div className="available-seats__wrapper">
            <AvailableSeatsCount count={availableObj.second} directionId={determinationIdDirection('second')} typeClass={'second'} />
          </div>
          <div className="carriage-cost__box">
            <p className="carriage-cost__text">от</p>
            <CostWidget
              value={minPriceSecond()}
              valueColor={'#2D2B2F'}
              valueFont={24}
              valutaWidth={16}
              valutaColor={'#928F94'}
            />
          </div>
        </li>
      );
    }

    if (availableObj.third) {
      result.push(
        <li key={'carriage-third-class'} className="carriage-seats__item">
          <p className="carriage__name">Плацкарт</p>
          <div className="available-seats__wrapper">
            <AvailableSeatsCount count={availableObj.third} directionId={determinationIdDirection('third')} typeClass={'third'} />
          </div>
          <div className="carriage-cost__box">
            <p className="carriage-cost__text">от</p>
            <CostWidget
              value={minPriceThird()}
              valueColor={'#2D2B2F'}
              valueFont={24}
              valutaWidth={16}
              valutaColor={'#928F94'}
            />
          </div>
        </li>
      );
    }

    if (availableObj.fourth) {
      result.push(
        <li key={'carriage-fourth-class'} className="carriage-seats__item">
          <p className="carriage__name">Сидячий</p>
          <div className="available-seats__wrapper">
            <AvailableSeatsCount count={availableObj.fourth} typeClass={'fourth'} />
          </div>
          <div className="carriage-cost__box">
            <p className="carriage-cost__text">от</p>
            <CostWidget
              value={minPriceForth()}
              valueColor={'#2D2B2F'}
              valueFont={24}
              valutaWidth={16}
              valutaColor={'#928F94'}
            />
          </div>
        </li>
      );
    }

    setList(result);
  }, [availableObj.first, availableObj.fourth, availableObj.second, availableObj.third, determinationIdDirection, minPriceFirst, minPriceForth, minPriceSecond, minPriceThird]);

  return <>{list.length > 0 && <ul className="carriage-seats__list">{list}</ul>}</>;
}
