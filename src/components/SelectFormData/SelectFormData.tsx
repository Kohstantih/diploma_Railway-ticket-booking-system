import { useCallback, useEffect, useRef, useState } from 'react';

import './SelectFormData.css';

export default function SelectFormData({
  optionList,
  activeOption,
  setActiveOption,
}: {
  optionList: { value: string; name: string }[];
  activeOption: { value: string; name: string };
  setActiveOption: ({ value, name }: { value: string; name: string }) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const selectElement = useRef<HTMLDivElement>(null);

  const handleClick = useCallback(
    (ev: MouseEvent) => {
      const { target } = ev;
      if (
        selectElement.current &&
        target instanceof Element &&
        isOpen &&
        !selectElement.current.contains(target)
      )
        setIsOpen(false);
    },
    [isOpen]
  );

  useEffect(() => {
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, [handleClick, isOpen]);

  return (
    <div ref={selectElement} onClick={() => setIsOpen(true)} className="data-select__container">
      <p className="data-select__option-selected">{activeOption.name}</p>
      {isOpen && (
        <ul className="data-select__options-list">
          {optionList.map((item) => (
            <li
              key={item.value}
              onClick={(e) => {
                e.stopPropagation();

                setIsOpen(false);
                setActiveOption(item);
              }}
              className="data-select__option"
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
