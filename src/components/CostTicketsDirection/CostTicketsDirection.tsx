import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { setPrice } from 'state/reducers/setPriceSlice';
import { getSeatsName } from 'funcs/getSeatsName';

import CostWidget from 'components/CostWidget/CostWidget';

export default function CostTicketsDirection({
  direction,
}: {
  direction: 'departure' | 'arrival';
}) {
  const { [direction]: seatsChecked } = useAppSelector((state) => state.seatsChecked);
  const { carriages } = useAppSelector((state) => state.services);
  const { [direction]: value } = useAppSelector((state) => state.price);
  const dispatch = useAppDispatch();

  useEffect(() => {
    let result = 0;

    if (seatsChecked?.seats && carriages) {
      seatsChecked!.seats.map((s) => {
        result += s.price[getSeatsName({ coachType: s.type, number: s.seatNumber })]!;
        carriages.map((c) => {
          if (c.id === s.coachId) c.services.map((o) => (result += o.price));
        });
      });
    }

    dispatch(setPrice({ option: direction, value: result }));
  }, [carriages, direction, dispatch, seatsChecked]);

  if (value !== 0) {
    return (
      <CostWidget
        value={value}
        valueColor={'#FFA800'}
        valueFont={24}
        valutaWidth={14}
        valutaColor={'#928F94'}
      />
    );
  } else {
    return null;
  }
}
