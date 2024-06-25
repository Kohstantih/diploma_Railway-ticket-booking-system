import { useCallback, useEffect, useState } from 'react';

export default function usePopover(
  elementRef: React.MutableRefObject<Node | null>,
  defaultVision: boolean
) {
  const [isOpen, setIsOpen] = useState(defaultVision);

  const showPopover = useCallback(() => setIsOpen(true), []);
  const hidePopover = useCallback(() => setIsOpen(false), []);
  const togglePopover = useCallback(() => setIsOpen((status) => !status), []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as Node;

      if (elementRef.current && !elementRef.current.contains(target)) hidePopover();
    };

    window.addEventListener('click', handleClick);

    return () => window.removeEventListener('click', handleClick);
  }, [elementRef, hidePopover]);

  return { isOpen, showPopover, hidePopover, togglePopover };
}
