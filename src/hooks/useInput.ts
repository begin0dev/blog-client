import { useState, ChangeEvent } from 'react';

export function useInput(initValue: string | number) {
  const [input, setInput] = useState(initValue);

  const onChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
    setInput(e.currentTarget.value);
  };

  return [input, onChange] as [string | number, typeof onChange];
}
