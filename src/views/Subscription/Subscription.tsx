import SocialMedia from '../SocialMedia/SocialMedia';
import SubscriptionForm from '../../components/SubscriptionForm/SubscriptionForm';

import './Subscription.css';

export default function Subscription() {
  return (
    <div className="subscription">
      <h3 className="subscription__title">Подписка</h3>
      <SubscriptionForm />
      <div className="social-media__wrapper">
        <SocialMedia />
      </div>
    </div>
  );
}
