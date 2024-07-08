import reviews1 from 'assets/images/reviews_img1.svg';
import reviews2 from 'assets/images/reviews_img2.svg';

import ReviewsCard from 'views/ReviewsCard/ReviewsCard';
import ReviewsBulletPoint from 'components/ReviewsBulletPoint/ReviewsBulletPoint';

import './Reviews.css';

const reviewsList = [
  {
    author: 'Екатерина Вальнова',
    image: reviews1,
    text: '"Доброжелательные подсказки на всех этапах помогут правильно заполнить поля и без затруднений купить авиа или ж/д билет, даже если вы заказываете онлайн билет впервые."',
  },
  {
    author: 'Евгений Стрыкало',
    image: reviews2,
    text: '"СМС-сопровождение до посадки. Сразу после оплаты ж/д билетов и за 3 часа до отправления мы пришлем вам СМС-напоминание о поездке."',
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="reviews">
      <h2 className="reviews__title">Отзывы</h2>
      <div className="reviews__container">
        {reviewsList.map((item, index) => (
          <ReviewsCard key={index} reviewsObject={item} />
        ))}
      </div>
      <ReviewsBulletPoint />
    </section>
  );
}
