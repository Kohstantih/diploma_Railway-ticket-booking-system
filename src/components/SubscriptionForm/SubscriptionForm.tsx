import { useEffect, useState } from 'react';

import { useSubscribeMutation } from 'state/services/subscribeApi';

import './SubscriptionForm.css';

export default function SubscriptionForm() {
  const [subscribe, { data, isLoading }] = useSubscribeMutation();
  const [isInfo, setIsInfo] = useState(false);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (isLoading) return;
    const target = e.target as HTMLFormElement;
    await subscribe(target.email.value);
    target.reset();
  };

  useEffect(() => {
    if (data?.status) setIsInfo(true);

    setTimeout(() => {
      setIsInfo(false);
    }, 1000);
  }, [data?.status]);

  return (
    <form onSubmit={handleSubmit} name="subscribe" className="subscription-form">
      <div className="subscription__box">
        <label htmlFor="email" className="subscription__label">
          Будьте в курсе событий
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="subscription__input"
          placeholder="email"
          required
        />
      </div>
      <button type="submit" className="subscription__btn">
        Отправить
      </button>
      {isInfo && (
        <div className="subscription-form__info">
          <p className="subscription-form__info-text">
            {data?.status && 'Вы успешно подписались!'}
            {!data?.status && 'Подписаться не удалось'}
          </p>
        </div>
      )}
    </form>
  );
}
