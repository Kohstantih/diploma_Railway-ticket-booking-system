import './EnterCountTicket.css';

export default function EnterCountTicket({ value, maxValue, text, setValue }) {
  return (
    <div className="count-tickets__box">
      <p className="count-tickets__text">{text} — </p>
      <input
        value={value}
        onChange={({ target }) => {
          let result = Number(target.value);

          if (result < 0) result = 0;
          if (result > maxValue) result = maxValue;

          setValue(result);
        }}
        onFocus={({ target }) => {
          if (target.closest('li'))
            target.closest('li')?.classList.add('counter-tickets__item_active');
        }}
        onBlur={({ target }) => {
          if (target.closest('li'))
            target.closest('li')?.classList.remove('counter-tickets__item_active');
        }}
        type="number"
        className="count-tickets__input"
      />
    </div>
  );
}
