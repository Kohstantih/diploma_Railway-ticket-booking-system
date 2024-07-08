import './ButtonNext.css';

export default function ButtonNext({
  tittle,
  type = 'button',
  isActive,
  onClick,
}: {
  tittle: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={() => {
        if (!isActive) return;
        onClick();
      }}
      type={type}
      className={`btn-next ${isActive ? 'btn-next_active' : 'btn-next_disabled'}`}
    >
      {tittle}
    </button>
  );
}
