import { useCallback } from 'react';

import ToastEventEmitter from './ToastEventEmitter';
import { ToastAddType } from './types';

function useToast() {
  const addToast = useCallback((toast: ToastAddType) => {
    ToastEventEmitter.add(toast);
  }, []);

  const removeToast = useCallback((id: string) => {
    ToastEventEmitter.remove(id);
  }, []);

  return {
    addToast,
    removeToast,
  };
}

export default useToast;
