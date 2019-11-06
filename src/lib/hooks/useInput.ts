import * as React from 'react';

export default function useInput(initValue: string | number | boolean) {
  const [input, setInput] = React.useState(initValue);

  const onChange = React.useCallback(
    ({ target: { value } }: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
      setInput(value);
    },
    [],
  );

  return [input, onChange] as [string | number, typeof onChange];
}
