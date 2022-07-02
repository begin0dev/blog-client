import { useCallback, useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components/macro';

import {
  ToastType,
  ToastAction,
  PositionType,
  ToastCallbackType,
  ToastItemInterface,
} from './types';
import { useUnMount } from 'hooks';
import { IcXCircle, IcCheckCircle, IcExclamationCircle } from 'assets/svgs';
import { palette } from 'styles';
import ToastEventEmitter from './ToastEventEmitter';

interface Props {
  animationDuration?: number;
  maxCount?: number;
  position?: PositionType;
}

function Toast({ maxCount = 10, position = 'top-center', animationDuration = 300 }: Props) {
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
    <ToastsWrap position={position}>
      {toasts.map((toast) => (
        <ToastItem visible={toast.visible} animationDuration={animationDuration} key={toast.id}>
          <div className="item">
            <span className="svg-span">
              {toast.type === ToastType.SUCCESS && <IcCheckCircle className={toast.type} />}
              {toast.type === ToastType.WARNING && <IcExclamationCircle className={toast.type} />}
              {toast.type === ToastType.ERROR && <IcXCircle className={toast.type} />}
            </span>
            <span>{toast.message}</span>
          </div>
        </ToastItem>
      ))}
    </ToastsWrap>
  );
}

export default Toast;

const placements = {
  'top-left': css`
    top: 0;
    left: 0;
  `,
  'top-center': css`
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  `,
  'top-right': css`
    top: 0;
    right: 0;
  `,
  'bottom-left': css`
    bottom: 0;
    left: 0;
  `,
  'bottom-center': css`
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  `,
  'bottom-right': css`
    bottom: 0;
    right: 0;
  `,
};

const ToastsWrap = styled.div<{ position: PositionType }>`
  z-index: 1010;
  position: fixed;
  max-height: 100%;
  ${({ position }) => placements[position]}
`;
const ToastItem = styled.div<{ visible: boolean; animationDuration: number }>`
  ${({ animationDuration }) => css`
    transition: height ${`${animationDuration}ms`};
    > .item {
      width: 320px;
      max-width: 360px;
      background-color: ${palette.black};
      box-shadow: 0 8px 12px 8px rgba(255, 255, 255, 0.05);
      border-radius: 4px;
      color: ${palette.white};
      vertical-align: baseline;
      padding: 10px 14px;
      margin: 8px 0;
      > span {
        font-size: 14px;
      }
      > .svg-span > svg {
        position: relative;
        margin-bottom: -5px;
        font-size: 18px;
        margin-right: 8px;
        &.success {
          color: ${palette.green5};
        }
        &.warning {
          color: ${palette.orange5};
        }
        &.error {
          color: ${palette.red5};
        }
      }
    }
  `}
`;
