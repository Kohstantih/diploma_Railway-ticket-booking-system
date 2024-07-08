import CostWidget from 'components/CostWidget/CostWidget';

import { useAppSelector } from 'hooks/redux';

import './AsideTotalAmount.css';

export default function AsideTotalAmount() {
  const { total } = useAppSelector((state) => state.price);

  return (
    <div className="total-amount__container">
      <p className="total-amount__text">итог</p>
      <CostWidget
        value={total}
        valueColor={'#FFA800'}
        valueFont={48}
        valutaWidth={26}
        valutaColor={'#E5E5E5'}
      />
    </div>
  );
}
