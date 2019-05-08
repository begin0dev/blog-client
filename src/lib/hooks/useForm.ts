import * as React from 'react';

interface IOnChangeAction {
  type: 'onChange';
  name: string;
  value: string | boolean;
}
interface IOnResetAction {
  type: 'onReset';
  defaultValues: any; // TODO 미치도록 any 없애고 싶다!!! 방법이 뭐가있을까?
}

function reducer<T>(state: T, action: IOnChangeAction | IOnResetAction) {
  switch (action.type) {
    case 'onReset':
      return { ...action.defaultValues };
    case 'onChange':
      // TODO immer typescript error ??
      return { ...state, [action.name]: action.value };
    default:
      return state;
  }
}

export default function useForm<T>(defaultValues: T) {
  const [state, dispatch] = React.useReducer(reducer, defaultValues);

  const onReset = React.useCallback(() => {
    dispatch({ type: 'onReset', defaultValues });
  }, [defaultValues]);

  const onChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch({ type: 'onChange', name, value });
  }, []);

  return [state, onChange, onReset] as [T, typeof onChange, typeof onReset];
}
