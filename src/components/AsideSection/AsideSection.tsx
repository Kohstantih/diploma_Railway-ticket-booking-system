import { useState } from 'react';

import CollapseSquareIcon from '../Icons/CollapseSquareIcon/CollapseSquareIcon';

import './AsideSection.css';

export default function AsideSection({
  icon,
  title,
  isActive,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  isActive: boolean;
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="aside-section__header">
        {icon}
        <h5 className="aside-section__title">{title}</h5>
        <CollapseSquareIcon isOpen={isOpen} toggleIsOpen={() => {
          if (!isActive) {
            setIsOpen(false);
            return;
          }

          setIsOpen(status => !status);
          }} />
      </div>
      {isOpen && <div className="aside-section__body">{children}</div>}
    </>
  );
}
