import * as React from 'react';

export default function useInput(defaultValue: string = '') {
  const [input, setInput] = React.useState(defaultValue);
  const onChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }, []);
  return [input, onChange] as [string, typeof onChange];
}
