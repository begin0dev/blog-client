import * as React from 'react';

export default function useInput(defaultValue: string | number) {
  const [input, setInput] = React.useState(defaultValue);

  const onChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
      setInput(e.target.value);
    },
    [],
  );

  return [input, onChange] as [string | number, typeof onChange];
}
