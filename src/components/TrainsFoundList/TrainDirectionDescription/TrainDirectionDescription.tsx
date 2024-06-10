import ArrowIcon from '../../Icons/ArrowIcon/ArrowIcon';
import './TrainDirectionDescription.css';

export default function TrainDirectionDescription({
  direction,
}: {
  direction: 'to' | 'from';
}) {
  if (direction === 'to') {
    return (
      <div className="direction-description">
        <div className="direction__point">
          <p className="direction__time">00:10</p>
          <p className="direction__city">Москва</p>
          <p className="direction__station">Курский вокзал</p>
        </div>
        <div className="direction__travel">
          <p className="travel__time">9:42</p>
          <ArrowIcon direction={direction} />
        </div>
        <div className="direction__point">
          <p className="direction__time">9:52</p>
          <p className="direction__city">Санкт-Петербург</p>
          <p className="direction__station">Ладожский вокзал</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="direction-description">
        <div className="direction__point">
          <p className="direction__time">00:10</p>
          <p className="direction__city">Москва</p>
          <p className="direction__station">Курский вокзал</p>
        </div>
        <div className="direction__travel">
          <p className="travel__time">9:42</p>
          <ArrowIcon direction={direction} />
        </div>
        <div className="direction__point">
          <p className="direction__time">9:52</p>
          <p className="direction__city">Санкт-Петербург</p>
          <p className="direction__station">Ладожский вокзал</p>
        </div>
      </div>
    );
  }
}
