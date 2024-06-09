import './Checkbox.css';

export default function Checkbox({
  tittle,
  status,
  setStatus,
}: {
  tittle: string;
  status: boolean;
  setStatus: (status: boolean) => void;
}) {
  return (
    <div className={`checkbox__container${status ? ' checkbox_on' : ''}`}>
      <label className="checkbox__label">
        <input
          onChange={(e) => setStatus(e.target.checked)}
          type="checkbox"
          className="visually-hidden"
        />
      </label>
      <p className="checkbox__tittle">{tittle}</p>
    </div>
  );
}
