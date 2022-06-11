import { useEffect, useRef } from 'react';

export function useClickOutside(onClick: () => void) {
  const modalEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!modalEl.current) return;

    const eventHandler = (e: MouseEvent) => {
      if (modalEl.current?.contains(e.target as HTMLElement)) return;
      onClick();
    };

    document.addEventListener('click', eventHandler);
    return () => {
      document.removeEventListener('click', eventHandler);
    };
  }, [modalEl, onClick]);

  return modalEl;
}
