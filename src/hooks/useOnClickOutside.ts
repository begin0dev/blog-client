import { useEffect, useRef } from 'react';

function useOnClickOutside(active: boolean, onClick: () => void) {
  const modalEl = useRef<HTMLDivElement>(null);
  const onClickFun = useRef(onClick);

  useEffect(() => {
    if (!active) return;

    const eventHandler = (e: MouseEvent) => {
      if (modalEl.current?.contains(e.target as HTMLElement)) return;
      onClickFun.current();
    };

    document.addEventListener('click', eventHandler);
    return () => {
      document.removeEventListener('click', eventHandler);
    };
  }, [active]);

  return modalEl;
}

export default useOnClickOutside;
