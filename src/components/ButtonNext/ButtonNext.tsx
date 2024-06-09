import './ButtonNext.css';

export default function ButtonNext({
  tittle,
  isActive,
  onClick,
}: {
  tittle: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`btn-next ${isActive ? 'btn-next_active' : 'btn-next_disabled'}`}
    >
      {tittle}
    </button>
  );
}
