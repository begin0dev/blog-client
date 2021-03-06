import { useState, ChangeEvent } from 'react';

function useInput(initValue: string | number) {
  const [input, setInput] = useState(initValue);

  const onChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => setInput(value);

  return [input, onChange] as [string | number, typeof onChange];
}

export default useInput;
