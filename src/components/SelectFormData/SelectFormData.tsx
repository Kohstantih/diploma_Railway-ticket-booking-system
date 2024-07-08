import { useRef } from 'react';

import usePopover from 'hooks/usePopover';

import './SelectFormData.css';

export default function SelectFormData({
  optionList,
  activeOption,
  setActiveOption,
}: {
  optionList: { value: string; name: string }[];
  activeOption: { value: string; name: string };
  setActiveOption: (value: string) => void;
}) {
  const selectElement = useRef<HTMLDivElement>(null);
  const { isOpen, showPopover, hidePopover } = usePopover(selectElement, false);

  return (
    <div ref={selectElement} onClick={() => showPopover()} className="data-select__container">
      <p className="data-select__option-selected">{activeOption.name}</p>
      {isOpen && (
        <ul className="data-select__options-list">
          {optionList.map((item) => (
            <li
              key={item.value}
              onClick={(e) => {
                e.stopPropagation();

                hidePopover();
                setActiveOption(item.value);
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
