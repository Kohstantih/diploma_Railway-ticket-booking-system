import './GenderSelection.css';

export default function GenderSelection({ setActive }: { setActive: (active: string) => void }) {
  return (
    <div className="gender-select__container">
      <p className="gender-select__tittle">Пол</p>
      <div className="gender-select__inputs">
        <div className="gender-select__inputs-section">
          <input
            onChange={({ target }) => setActive(target.value)}
            className="gender-select__input visually-hidden"
            type="radio"
            name="male"
            id="male"
            value={'male'}
          />
          <label htmlFor="male" className="gender-select__label">
            М
          </label>
        </div>
        <div className="gender-select__inputs-section">
          <input
            onChange={({ target }) => setActive(target.value)}
            className="gender-select__input visually-hidden"
            type="radio"
            name="male"
            id="female"
            value={'female'}
          />
          <label htmlFor="female" className="gender-select__label">
            Ж
          </label>
        </div>
      </div>
    </div>
  );
}
