import './InputData.css';

export default function InputData({
  tittle,
  id,
  type = 'text',
  placeholder = '',
  setValue,
}: {
  tittle: string;
  id: string;
  type?: string;
  placeholder?: string;
  setValue: (value: string) => void;
}) {
  return (
    <div className="input-data__box">
      <label htmlFor={id} className="input-data__label">
        {tittle}
      </label>
      <input
        onChange={({ target }) => setValue(target.value)}
        id={id}
        type={type}
        className="input-data"
        placeholder={placeholder}
        required
      />
    </div>
  );
}
