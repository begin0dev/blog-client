import { useCallback } from 'react';
import { useRecoilState } from 'recoil';

import { TToast, TType } from './types';
import { toastState } from './ToastState';

export const animationDuration = 300;

interface IProps {
  duration?: number;
}

function useToasts({ duration = 3000 }: IProps = {}) {
  const [, setToast] = useRecoilState<TToast[]>(toastState);

  const clear = useCallback(
    (id: number) => {
      setToast((prevState) => prevState.filter((notification) => notification.id !== id));
    },
    [setToast],
  );

  const update = useCallback(
    (id: number) => {
      setToast((prevState) => {
        const next = [...prevState];
        const index = prevState.findIndex((notification) => notification.id === id);
        next.splice(index, 1, { ...prevState[index], visible: false });
        return next;
      });
      setTimeout(() => clear(id), animationDuration);
    },
    [clear, setToast],
  );

  const addToast = useCallback(
    (type: TType, message: string) => {
      const id = new Date().getTime();
      setToast((prevState) => [...prevState, { id, type, message, visible: true }]);
      setTimeout(() => update(id), duration);
    },
    [duration, update, setToast],
  );

  return { addToast, removeToast: update };
}

export default useToasts;
