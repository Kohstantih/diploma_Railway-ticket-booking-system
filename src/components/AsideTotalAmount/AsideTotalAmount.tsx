import CostWidget from '../CostWidget/CostWidget';

import './AsideTotalAmount.css';

export default function AsideTotalAmount() {
  return (
    <div className="total-amount__container">
      <p className="total-amount__text">итог</p>
      <CostWidget
        value={7760}
        valueColor={'#FFA800'}
        valueFont={48}
        valutaWidth={26}
        valutaColor={'#E5E5E5'}
      />
    </div>
  );
}
