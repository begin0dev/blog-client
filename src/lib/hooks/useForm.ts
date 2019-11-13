import * as React from 'react';

interface IOnChangeAction {
  type: 'ON_CHANGE';
  payload: {
    name: string;
    value: string | number | boolean;
  };
}
interface IOnResetAction<T> {
  type: 'ON_RESET';
  initState: T;
}

function reducer<T>(state: T, action: IOnChangeAction | IOnResetAction<T>) {
  switch (action.type) {
    case 'ON_RESET':
      return { ...action.initState };
    case 'ON_CHANGE':
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    default:
      return state;
  }
}

export default function useForm<T>(defaultState: T) {
  const initState = React.useRef(defaultState);
  const [state, dispatch] = React.useReducer(reducer, defaultState);

  const onReset = React.useCallback(() => {
    dispatch({ type: 'ON_RESET', initState: initState.current });
  }, [initState]);

  const onChange = React.useCallback(
    ({
      target: { name, value },
    }: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
      dispatch({ type: 'ON_CHANGE', payload: { name, value } });
    },
    [],
  );

  const setValue = React.useCallback(
    ({ name, value }: { name: string; value: string | number | boolean }) => {
      dispatch({ type: 'ON_CHANGE', payload: { name, value } });
    },
    [],
  );

  return [state, onChange, setValue, onReset] as [
    T,
    typeof onChange,
    typeof setValue,
    typeof onReset,
  ];
}
