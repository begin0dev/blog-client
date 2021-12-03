import ToastEventEmitter from './ToastEventEmitter';
import { ToastAddType } from './types';

function useToast() {
  return {
    add(toast: ToastAddType) {
      return ToastEventEmitter.add(toast);
    },
    remove(id: string) {
      return ToastEventEmitter.remove(id);
    },
  };
}

export default useToast;
