import ManualCard from 'views/ManualCard/ManualCard';

import './HowItWorks.css';

const cardList = [
  {
    image: 'card_monitor',
    content: 'Удобный заказ на сайте',
  },
  {
    image: 'card_building',
    content: 'Нет необходимости ехать в офис',
  },
  {
    image: 'card_earth',
    content: 'Огромный выбор направлений',
  },
];

export default function HowItWorks() {
  return (
    <section id="manual" className="manual">
      <div className="manual__header">
        <h2 className="manual__title">Как это работает</h2>
        <button type="button" className="manual__btn">
          Узнать больше
        </button>
      </div>
      <div className="manual__cards">
        {cardList.map((item, index) => (
          <ManualCard key={index} cardObject={item} />
        ))}
      </div>
    </section>
  );
}
