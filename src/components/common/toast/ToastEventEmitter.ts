import { EventEmitter } from 'events';

import { ToastAction, ToastAddType, ToastCallbackType, ToastType } from './types';
import { generateID } from '../../../hooks/useId';

class ToastEventEmitter extends EventEmitter {
  private readonly CHANGE_EVENT_NAME = 'change' as const;

  addChangeListener(callback: ToastCallbackType) {
    this.addListener(this.CHANGE_EVENT_NAME, callback);
  }

  removeChangeListener(callback: ToastCallbackType) {
    this.removeListener(this.CHANGE_EVENT_NAME, callback);
  }

  add({ message, type, autoCloseTime, isAutoClose }: ToastAddType) {
    this.emit(this.CHANGE_EVENT_NAME, {
      id: generateID('toast-message-'),
      action: ToastAction.ADD,
      visible: true,
      type: type ?? ToastType.SUCCESS,
      autoCloseTime: autoCloseTime ?? 3000,
      isAutoClose: isAutoClose ?? true,
      message,
    });
  }

  remove(id: string) {
    this.emit(this.CHANGE_EVENT_NAME, {
      id,
      action: ToastAction.REMOVE,
    });
  }
}

export default new ToastEventEmitter();
