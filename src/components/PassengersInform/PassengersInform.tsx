import CostWidget from '../CostWidget/CostWidget';

import './PassengersInform.css';

export default function PassengersInform() {
  return (
    <div className="passengers-inform">
      <div className="passengers-inform__box">
        <p className="passengers__count">
          <span>{2}</span>
          <span> взрослых</span>
        </p>
        <CostWidget
          value={5840}
          valueColor={'#FFFFFF'}
          valueFont={24}
          valutaWidth={14}
          valutaColor={'#928F94'}
        />
      </div>
      <div className="passengers-inform__box">
        <p className="passengers__count">
          <span>{1}</span>
          <span> ребёнок</span>
        </p>
        <CostWidget
          value={1920}
          valueColor={'#FFFFFF'}
          valueFont={24}
          valutaWidth={14}
          valutaColor={'#928F94'}
        />
      </div>
    </div>
  );
}
