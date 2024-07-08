import './ButtonGoToChooseSeat.css';

export default function ButtonGoToChooseSeat({
  onClick,
  isActive,
}: {
  onClick: () => void;
  isActive: boolean;
}) {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`go-ticket__button${!isActive ? ' go-ticket__button_disabled' : ''}`}
    >
      {'Выбрать места'}
    </button>
  );
}
