import { useCallback, useEffect, useState } from 'react';

type TComparison = '>=' | '>' | '<=' | '<';

const comparisonCompare = (comparison: TComparison, a: number, b: number): boolean => {
  if (comparison === '>=') return a >= b;
  if (comparison === '>') return a > b;
  if (comparison === '<=') return a <= b;
  if (comparison === '<') return a < b;
  return a === b;
};

function useCheckBreakPoint(comparison: TComparison, width: number) {
  const [bool, setBool] = useState(comparisonCompare(comparison, window.innerWidth, width));

  const resizeEventListener = useCallback(
    (e) => {
      setBool(comparisonCompare(comparison, e.target.innerWidth, width));
    },
    [width, comparison],
  );

  useEffect(() => {
    window.addEventListener('resize', resizeEventListener);
    return () => {
      window.removeEventListener('resize', resizeEventListener);
    };
  }, [resizeEventListener]);

  return bool;
}

export default useCheckBreakPoint;
