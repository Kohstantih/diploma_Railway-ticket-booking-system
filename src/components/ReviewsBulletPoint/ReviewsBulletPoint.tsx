import './ReviewsBulletPoint.css';

export default function ReviewsBulletPoint() {
  const countBullet = 5;
  const activeBullet = 1;

  const bullets = [];

  for (let i = 1; i <= countBullet; i++) {
    const className = i === activeBullet ? ' reviews__bullet-point_active' : '';
    bullets.push(<div key={i} className={`reviews__bullet-point${className}`}></div>);
  }

  return <div className="reviews__bullet-points">{bullets}</div>;
}
