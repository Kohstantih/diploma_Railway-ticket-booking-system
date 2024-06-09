import './ButtonEdit.css';

export default function ButtonEdit({ tittle, onClick }: { tittle: string; onClick: () => void }) {
  return (
    <button onClick={onClick} type="button" className="btn-edit">
      {tittle}
    </button>
  );
}
