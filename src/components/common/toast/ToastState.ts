import { atom } from 'recoil';

import { TToast } from './types';

export const toastState = atom<TToast[]>({
  key: 'notificationState',
  default: [],
});
