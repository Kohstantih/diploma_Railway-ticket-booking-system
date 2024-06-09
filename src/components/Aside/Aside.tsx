import './Aside.css';

export default function Aside({ children }: { children: React.ReactNode[] }) {
  return (
    <div className="trip-details__container">
      {children.map((child, index) => (
        <div key={index} className="trip-details__item">
          {child}
        </div>
      ))}
    </div>
  );
}
