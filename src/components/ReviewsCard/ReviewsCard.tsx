import { TReviewsCardProps } from '../../types/TReviewsCardProps';
import './ReviewsCard.css';

export default function ReviewsCard({ reviewsObject }: TReviewsCardProps) {
    const { author, image, text } = reviewsObject;
  return (
    <div className="reviews__card">
      <div className="reviews__image-box">
        <img src={image} alt="Изображение" className="reviews__image" />
      </div>
      <div className="reviews__content">
        <h4 className="reviews__title">{author}</h4>
        <p className="reviews__text">{text}</p>
      </div>
    </div>
  );
}
