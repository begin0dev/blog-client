import { useEffect } from 'react';

import { useRafState } from './useRafState';

type Comparison = '>=' | '>' | '<=' | '<';

const comparisonCompare = (comparison: Comparison, width: number): boolean => {
  const windowWidth = window.innerWidth;
  if (comparison === '>=') return windowWidth >= width;
  if (comparison === '>') return windowWidth > width;
  if (comparison === '<=') return windowWidth <= width;
  if (comparison === '<') return windowWidth < width;
  return windowWidth === width;
};

export function useCheckBreakPoint(comparison: Comparison, width: number) {
  const [bool, setBool] = useRafState<boolean>(comparisonCompare(comparison, width));

  useEffect(() => {
    const resizeEventListener = () => {
      setBool(comparisonCompare(comparison, width));
    };

    window.addEventListener('resize', resizeEventListener);
    return () => {
      window.removeEventListener('resize', resizeEventListener);
    };
  }, [width, comparison, setBool]);

  return bool;
}
