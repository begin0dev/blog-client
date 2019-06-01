import * as React from 'react';

import { TextInputBlock, InputSlot, Input, Label } from './TextInput.styles';

interface IProps {
  type: string;
  name: string;
  color: string;
  defaultBorderColor: string;
  value?: string;
  label?: string;
  placeholder?: string;
  setValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: React.FunctionComponent<IProps> = React.memo(({
  type,
  name,
  label,
  placeholder,
  value,
  color,
  defaultBorderColor,
  setValue,
}) => {
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

  const labelPosition = React.useMemo((): object => {
    let position = {};
    if (placeholder || focus || (inputRef && inputRef.current && inputRef.current.value.length > 0)) {
      position = {
        transform: 'translateY(-1.45rem) scale(0.9)',
        fontWeight: '500',
      };
    }
    return position;
  }, [placeholder, focus, inputRef]);

  return (
    <TextInputBlock>
      <InputSlot focus={focus} color={color} defaultBorderColor={defaultBorderColor}>
        {label && (
          <Label aria-hidden="true" style={{ ...labelPosition }} onClick={labelClick}>
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
});

export default TextInput;
