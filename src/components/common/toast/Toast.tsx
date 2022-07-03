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
import { CSSTransition, TransitionGroup } from 'react-transition-group';

interface Props {
  animationDuration?: number;
  maxCount?: number;
  position?: PositionType;
}

function Toast({ maxCount = 10, position = 'top-center', animationDuration = 250 }: Props) {
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
        <CSSTransition key={toast.id} timeout={animationDuration} classNames="toast">
          <ToastItem animationDuration={animationDuration} key={toast.id}>
            <span className={`svg-span ${toast.type}`}>
              {toast.type === ToastType.SUCCESS && <IcCheckCircle />}
              {toast.type === ToastType.WARNING && <IcExclamationCircle />}
              {toast.type === ToastType.ERROR && <IcXCircle />}
            </span>
            <span>{toast.message}</span>
          </ToastItem>
        </CSSTransition>
      ))}
    </ToastsWrap>
  );
}

export default Toast;

const positionsMapper = {
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
const initPositionCss = (position: PositionType) => {
  if (position.includes('right'))
    return css`
      transform: translateX(150%);
    `;
  if (position.includes('lef'))
    return css`
      transform: translateX(-50%);
    `;
  if (position.includes('top'))
    return css`
      max-height: 0;
      margin: 0 10px;
      transform: translateY(-50%); ;
    `;
  return css`
    max-height: 0;
    margin: 0 10px;
    transform: translateY(150%);
  `;
};

const ToastsWrap = styled(TransitionGroup)<{ position: PositionType }>`
  z-index: 9999;
  position: fixed;
  max-height: 100%;
  ${({ position }) => css`
    ${positionsMapper[position]};

    .toast-enter-active,
    .toast-exit {
      transform: translate(0, 0);
      opacity: 1;
    }
    .toast-enter,
    .toast-exit-active {
      ${initPositionCss(position)};
      opacity: 0;
    }
  `}
`;
const ToastItem = styled.div<{ animationDuration: number }>`
  ${({ animationDuration }) => css`
    display: flex;
    align-items: flex-start;
    width: 320px;
    max-width: 360px;
    font-size: 14px;
    color: ${palette.white};
    background-color: ${palette.black};
    box-shadow: 0 2px 8px 3px rgba(255, 255, 255, 0.03);
    border-radius: 4px;
    padding: 10px 14px;
    margin: 10px;
    transition: all ${`${animationDuration}ms`};

    .svg-span {
      display: inline-flex;
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
  `}
`;
