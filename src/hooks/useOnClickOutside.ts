import { useEffect, useRef } from 'react';

function useOnClickOutside(condition: boolean = true, callback: () => void) {
  const modalEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!condition) return;

    const outSideClick = (e: MouseEvent) => {
      const dom = e.target as HTMLElement;
      if (modalEl.current?.contains(dom)) return;
      callback();
    };

    document.addEventListener('click', outSideClick);
    return () => {
      document.removeEventListener('click', outSideClick);
    };
  }, [callback, condition]);

  return modalEl;
}

export default useOnClickOutside;
