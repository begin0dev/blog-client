import * as React from 'react';

import { TextInputBlock, InputSlot, Input, Label } from './TextInput.styles';

interface IProps {
  type: string;
  name: string;
  color: string;
  value?: string;
  label?: string;
  placeholder?: string;
  defaultBorderColor: string;
  setValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: React.FunctionComponent<IProps> = React.memo(
  ({ type, name, label, placeholder, value, color, defaultBorderColor, setValue }) => {
    const inputRef = React.useRef<HTMLInputElement>(null);
    const [focus, setFocus] = React.useState<boolean>(false);

    const toggleInputFocus = React.useCallback(
      (focusing: boolean) => (): void => {
        setFocus(focusing);
      },
      [],
    );

    const labelClick = React.useCallback((): void => {
      if (inputRef && inputRef.current && !focus) inputRef.current.focus();
    }, [focus, inputRef]);

    const existContent = React.useMemo(
      (): boolean =>
        focus ||
        !!placeholder ||
        !!(inputRef && inputRef.current && inputRef.current.value.length > 0) ||
        !!(value && value.length > 0),
      [placeholder, value, focus, inputRef],
    );

    return (
      <TextInputBlock>
        <InputSlot focus={focus} color={color} defaultBorderColor={defaultBorderColor}>
          {label && (
            <Label aria-hidden="true" existContent={existContent} onClick={labelClick}>
              {label}
            </Label>
          )}
          <Input
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            onFocus={toggleInputFocus(true)}
            onBlur={toggleInputFocus(false)}
            onChange={setValue}
            ref={inputRef}
          />
        </InputSlot>
      </TextInputBlock>
    );
  },
);

export default TextInput;
