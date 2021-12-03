import { useEffect, RefObject } from 'react';

function useOnClickOutside(
  ref: RefObject<HTMLElement>,
  callback: () => void,
  condition: boolean = true,
) {
  useEffect(() => {
    const outSideClick = (e: MouseEvent) => {
      const dom = e.target as HTMLElement;
      if (ref.current?.contains(dom)) return;
      callback();
    };

    if (condition) document.addEventListener('click', outSideClick);
    return () => {
      if (condition) document.removeEventListener('click', outSideClick);
    };
  }, [ref, callback, condition]);
}

export default useOnClickOutside;
