import { TCarriageClassNames } from 'types/TCarriageTypesList';
import { TSeatsRequestObject } from 'types/TSeatsRequestObject';

export function createAvailableSeatsList({
  carriagesList,
  type,
}: {
  carriagesList: TSeatsRequestObject[];
  type: TCarriageClassNames;
}) {
  const coachObj = carriagesList.find((el) => el.coach.class_type === type);
  const resultArr = [];
  let countBottom = 0;
  let countTop = 0;
  let countSide = 0;
  let countSeat = 0;

  if (type === 'first' || type === 'fourth') {
    carriagesList.forEach((el) => {
      if (el.coach.class_type === type) {
        for (let i = 0; i < el.seats.length; i += 1) {
          const element = el.seats[i];

          if (!element.available) continue;

          countSeat += 1;
        }
      }
    });
  } else if (type === 'second') {
    carriagesList.forEach((el) => {
      if (el.coach.class_type === type) {
        for (let i = 0; i < el.seats.length; i += 1) {
          const element = el.seats[i];

          if (!element.available) continue;

          if (element.index % 2) countBottom += 1;
          else countTop += 1;
        }
      }
    });
  } else if (type === 'third') {
    carriagesList.forEach((el) => {
      if (el.coach.class_type === type) {
        for (let i = 0; i < el.seats.length; i += 1) {
          const element = el.seats[i];

          if (!element.available) continue;

          const { index } = element;

          if (index > 32) countSide += 1;
          else if (index < 33 && index % 2) countBottom += 1;
          else countTop += 1;
        }
      }
    });
  }

  if (coachObj && countBottom !== 0)
    resultArr.push({ name: 'нижние', count: countBottom, cost: coachObj.coach.bottom_price });
  if (coachObj && countTop !== 0)
    resultArr.push({ name: 'верхние', count: countTop, cost: coachObj.coach.top_price });
  if (coachObj && countSide !== 0)
    resultArr.push({ name: 'боковые', count: countSide, cost: coachObj.coach.side_price });
  if (coachObj && countSeat !== 0)
    resultArr.push({
      name: 'места',
      count: countSeat,
      cost: coachObj.coach[type === 'first' ? 'price' : 'bottom_price'],
    });

  return resultArr;
}
