import { ReactNode } from 'react';
import { RecoilRoot } from 'recoil';

import Toast from './Toast';

interface IProps {
  children: ReactNode;
}

function ToastRoot({ children }: IProps) {
  return (
    <RecoilRoot>
      {children}
      <Toast />
    </RecoilRoot>
  );
}

export default ToastRoot;
