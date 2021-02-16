import * as React from 'react';
import { useState, useCallback } from 'react';

function useInput(initValue: string | number) {
  const [input, setInput] = useState(initValue);

  const onChange = useCallback(
    ({
      target: { value },
    }: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
      setInput(value);
    },
    [],
  );

  return [input, onChange] as [string | number, typeof onChange];
}

export default useInput;
