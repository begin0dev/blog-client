import { atom } from 'recoil';

import { ToastInterface } from './types';

export const toastState = atom<ToastInterface[]>({
  key: 'notificationState',
  default: [],
});
