import './SubscriptionForm.css';

export default function SubscriptionForm() {
  return (
    <form className="subscription-form">
      <div className="subscription__box">
        <label htmlFor="email" className="subscription__label">
          Будьте в курсе событий
        </label>
        <input
          id="email"
          type="email"
          className="subscription__input"
          placeholder="email"
        />
      </div>
      <button type="submit" className="subscription__btn">
        Отправить
      </button>
    </form>
  );
}
