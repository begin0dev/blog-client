import { Dispatch, SetStateAction, useCallback, useRef, useState } from 'react';

import { useUnMount } from './useUnMount';

export const useRafState = <S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>] => {
  const frame = useRef(0);

  const [state, setState] = useState(initialState);

  const setRafState = useCallback((value: S | ((prevState: S) => S)) => {
    cancelAnimationFrame(frame.current);

    frame.current = requestAnimationFrame(() => {
      setState(value);
    });
  }, []);

  useUnMount(() => {
    cancelAnimationFrame(frame.current);
  });

  return [state, setRafState];
};
