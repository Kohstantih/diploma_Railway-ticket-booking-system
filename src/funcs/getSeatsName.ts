import { TCarriageClassNames } from 'types/TCarriageTypesList';
import { TSeatsPriceName } from 'types/TSeatsPriceName';

export function getSeatsName({
  coachType,
  number,
}: {
  coachType: TCarriageClassNames;
  number: number;
}) {
  let result: TSeatsPriceName = 'price';

  if (coachType === 'second') {
    result = number % 2 ? 'bottom_price' : 'top_price';
  } else if (coachType === 'third') {
    if (number < 33) {
      result = number % 2 ? 'bottom_price' : 'top_price';
    } else {
      result = 'side_price';
    }
  } else if (coachType === 'fourth') {
    result = 'bottom_price';
  }

  return result;
}
