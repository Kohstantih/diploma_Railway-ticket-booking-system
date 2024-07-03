import { useRef } from 'react';

import './EnterCountTicket.css';

export default function EnterCountTicket({
  value,
  text,
  setValue,
}: {
  value: number;
  text: string;
  setValue: (value: number) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div onClick={() => inputRef.current?.focus()} className="count-tickets__box">
      <p className="count-tickets__text">{text} — </p>
      <input
        ref={inputRef}
        value={value}
        onChange={({ target }) => {
          let result = Number(target.value);

          if (isNaN(result) || result < 0) result = 0;

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
        type="text"
        className="count-tickets__input"
      />
    </div>
  );
}
