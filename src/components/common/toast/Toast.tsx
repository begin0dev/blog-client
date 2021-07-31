import { useRecoilValue } from 'recoil';
import styled, { css, keyframes } from 'styled-components';

import { TPosition, TToast } from './types';
import { toastState } from './ToastState';
import { XCircle, CheckCircle, ExclamationCircle } from '../../../assets/svgs';
import { animationDuration } from './useToasts';
import { palette } from '../../../styles/palette';

interface IProps {
  position?: TPosition;
}

function Toast({ position = 'top-center' }: IProps) {
  const toasts = useRecoilValue<TToast[]>(toastState);

  return (
    <ToastsWrap position={position}>
      {toasts.map((toast) => (
        <ToastItem visible={toast.visible} key={toast.id}>
          <div className="item">
            <span className="svg-span">
              {toast.type === 'success' && <CheckCircle className={toast.type} />}
              {toast.type === 'warning' && <ExclamationCircle className={toast.type} />}
              {toast.type === 'error' && <XCircle className={toast.type} />}
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

const enteringKeyframes = keyframes`
  0% { transform: translate3d(0, -100%, 0); }
  100% { transform: translate3d(0, 0, 0); }
`;
const exitingKeyframes = keyframes`
  0% { transform: translate3d(0,0,0); }
  100% { 
    transform: scale(0.66);
    opacity: 0;
  }
`;
const ToastsWrap = styled.div<{ position: TPosition }>`
  z-index: 1010;
  position: fixed;
  max-height: 100%;
  ${({ position }) => placements[position]}
`;
const ToastItem = styled.div<{ visible: boolean }>`
  transition: height ${`${animationDuration}ms`} ease;
  > .item {
    width: 320px;
    max-width: 360px;
    background-color: ${palette.white};
    box-shadow: 0 3px 6px -4px #0000001f, 0 6px 10px #00000014, 0 9px 20px 8px #0000000d;
    border-radius: 4px;
    vertical-align: baseline;
    padding: 10px 14px;
    margin: 8px 0;
    animation: ${({ visible }) => (visible ? enteringKeyframes : exitingKeyframes)}
      ${`${animationDuration}ms`};
    > span {
      font-size: 14px;
    }
    > .svg-span > svg {
      position: relative;
      margin-bottom: -5px;
      font-size: 18px;
      margin-right: 8px;
      &.success {
        color: #52c41a;
      }
      &.warning {
        color: #faad14;
      }
      &.error {
        color: #ff4d4f;
      }
    }
  }
`;
