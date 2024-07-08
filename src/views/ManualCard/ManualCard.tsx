import { TManualCardProps } from 'types/TManualCardProps';

import './ManualCard.css';

export default function ManualCard({ cardObject }: TManualCardProps) {
  const { image, content } = cardObject;

  return (
    <div className="manual__card">
      <div className={`manual__image ${image}`}></div>
      <p className="manual__text">{content}</p>
    </div>
  );
}
