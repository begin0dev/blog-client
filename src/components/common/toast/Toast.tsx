import { useCallback, useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useUnMount } from 'hooks';

import {
  ToastType,
  ToastAction,
  PositionType,
  ToastCallbackType,
  ToastItemInterface,
} from './types';
import ToastEventEmitter from './ToastEventEmitter';
import { IcXCircle, IcCheckCircle, IcExclamationCircle } from 'assets/svgs';
import { ToastGroupWrapper, ToastItemWrapper } from './toast.styles';

interface Props {
  animationDuration?: number;
  maxCount?: number;
  position?: PositionType;
}

function Toast({ maxCount = 10, position = 'top-center' }: Props) {
  const timers = useRef<Record<string, NodeJS.Timer>>({});

  const [toasts, setToasts] = useState<ToastItemInterface[]>([]);

  const remove = useCallback(
    (id: string) => {
      setToasts((prevState) => prevState.filter((notification) => notification.id !== id));
      delete timers.current[id];
    },
    [setToasts],
  );

  const addToast = useCallback(
    (toast: ToastItemInterface) => {
      setToasts((prevState) => [...prevState, toast].slice(maxCount * -1));
      if (toast.isAutoClose) {
        timers.current[toast.id] = setTimeout(() => remove(toast.id), toast.autoCloseTime);
      }
    },
    [maxCount, remove],
  );

  const eventCallback: ToastCallbackType = useCallback(
    (toast) => {
      if (toast.action === ToastAction.ADD) addToast(toast as ToastItemInterface);
      if (toast.action === ToastAction.REMOVE) remove(toast.id);
    },
    [addToast, remove],
  );

  useEffect(() => {
    ToastEventEmitter.addChangeListener(eventCallback);
    return () => {
      ToastEventEmitter.removeChangeListener(eventCallback);
    };
  }, [eventCallback]);

  useUnMount(() => {
    Object.values(timers.current).forEach((timer) => {
      if (timer) clearTimeout(timer);
    });
  });

  return (
    <ToastGroupWrapper className={position}>
      {toasts.map((toast) => (
        <CSSTransition key={toast.id} timeout={300} classNames="toast">
          <ToastItemWrapper className="toast">
            <div className="item">
              <span className={`icon ${toast.type}`}>
                {toast.type === ToastType.SUCCESS && <IcCheckCircle />}
                {toast.type === ToastType.WARNING && <IcExclamationCircle />}
                {toast.type === ToastType.ERROR && <IcXCircle />}
              </span>
              <span>{toast.message}</span>
            </div>
          </ToastItemWrapper>
        </CSSTransition>
      ))}
    </ToastGroupWrapper>
  );
}

export default Toast;
