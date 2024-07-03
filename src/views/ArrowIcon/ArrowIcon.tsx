import './ArrowIcon.css';

export default function ArrowIcon({ direction = 'to' }: { direction: 'from' | 'to' }) {
  return <div className={`arrow-icon${direction === 'from' ? ' arrow-icon_from' : ''}`}></div>;
}
