import { useRecoilValue } from 'recoil';

import { TPosition, TToast } from './types';
import { toastState } from './ToastState';
import { ToastsWrap, ToastItem } from './Toast.styles';
import { XCircle, CheckCircle, ExclamationCircle } from '../../../assets/svgs';

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
