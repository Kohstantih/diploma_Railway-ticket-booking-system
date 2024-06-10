import './Aside.css';

export default function Aside({ children }: { children: React.ReactNode[] }) {
  return (
    <div className="aside__container">
      {children.map((child, index) => (
        <div key={index} className="aside__item">
          {child}
        </div>
      ))}
    </div>
  );
}
