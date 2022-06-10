import { useEffect, useRef } from 'react';

export function useOnClickOutside(active: boolean, onClick: () => void) {
  const modalEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!active) return;

    const eventHandler = (e: MouseEvent) => {
      if (modalEl.current?.contains(e.target as HTMLElement)) return;
      onClick();
    };

    document.addEventListener('click', eventHandler);
    return () => {
      document.removeEventListener('click', eventHandler);
    };
  }, [active, onClick]);

  return modalEl;
}
