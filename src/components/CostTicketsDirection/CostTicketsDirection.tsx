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
  const { [direction]: priceObj } = useAppSelector((state) => state.price);
  const { adultCount } = useAppSelector((state) => state.ticketsCount);
  const dispatch = useAppDispatch();

  useEffect(() => {
    let adultPrice = 0;
    let childrenPrice = 0;

    if (seatsChecked?.seats && carriages) {
      seatsChecked!.seats.map((s, index) => {
        let price = 0;

        price += s.price[getSeatsName({ coachType: s.type, number: s.seatNumber })]!;
        carriages.map((c) => {
          if (c.id === s.coachId) c.services.map((o) => (price += o.price));
        });

        if (index + 1 <= adultCount) {
          adultPrice += price;
        } else {
          childrenPrice += Math.round(price / 2);
        }
      });
    }

    dispatch(setPrice({ section: direction, option: 'adultPrice', value: adultPrice }));
    dispatch(setPrice({ section: direction, option: 'childrenPrice', value: childrenPrice }));
    dispatch(setPrice({ section: direction, option: 'total', value: adultPrice + childrenPrice }));
  }, [adultCount, carriages, direction, dispatch, seatsChecked]);

  if (priceObj.total !== 0) {
    return (
      <CostWidget
        value={priceObj.total}
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
