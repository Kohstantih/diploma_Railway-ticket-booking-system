import { useState } from 'react';

import CollapseSquareIcon from '../Icons/CollapseSquareIcon/CollapseSquareIcon';

import './AsideSection.css';

export default function AsideSection({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="aside-section__header">
        {icon}
        <h5 className="aside-section__title">{title}</h5>
        <CollapseSquareIcon isActive={isOpen} setIsActive={setIsOpen} />
      </div>
      {isOpen && <div className="aside-section__body">{children}</div>}
    </>
  );
}
