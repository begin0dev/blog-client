import * as React from 'react';

interface IOnChangeAction<T> {
  type: 'onChange';
  name: keyof T;
  value: string | number | boolean;
}
interface IOnResetAction<T> {
  type: 'onReset';
  defaultValues: T;
}

function reducer<T>(state: T, action: IOnChangeAction<T> | IOnResetAction<T>) {
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

  const onChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
      const { name, value } = e.target;
      dispatch({ type: 'onChange', name, value });
    },
    [],
  );

  return [state, onChange, onReset] as [T, typeof onChange, typeof onReset];
}
