import * as React from 'react';

import { palette } from 'styles/palette';
import { TextInputBlock, InputSlot, Label, Input, FormExplainBlock } from './TextInput.styles';

interface IProps {
  type: string;
  name: string;
  value?: string;
  label?: string;
  color: string;
  defaultBorderColor: string;
  errorBorderColor?: string;
  placeholder?: string;
  error?: boolean;
  message?: string | null;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const TextInput: React.FunctionComponent<IProps> = React.memo(
  ({
    type,
    name,
    label,
    placeholder,
    value,
    color,
    defaultBorderColor,
    errorBorderColor = palette.red7,
    error = false,
    message,
    onChange,
    onFocus,
    onBlur,
  }) => {
    const inputRef = React.useRef<HTMLInputElement>(null);
    const [focus, setFocus] = React.useState<boolean>(false);

    const onFocusEvent = React.useCallback(
      (e: React.FocusEvent<HTMLInputElement>) => {
        setFocus(true);
        onFocus && onFocus(e);
      },
      [onFocus],
    );

    const onBlurEvent = React.useCallback(
      (e: React.FocusEvent<HTMLInputElement>) => {
        setFocus(false);
        onBlur && onBlur(e);
      },
      [onBlur],
    );

    const labelClick = React.useCallback(() => {
      if (!inputRef.current) return;
      if (!focus) inputRef.current.focus();
    }, [focus]);

    const existContent: boolean = React.useMemo(
      () =>
        !!(
          focus ||
          placeholder ||
          (inputRef.current && inputRef.current.value.length > 0) ||
          (value && value.length > 0)
        ),
      [placeholder, value, focus],
    );

    return (
      <TextInputBlock defaultBorderColor={defaultBorderColor} errorBorderColor={errorBorderColor} error={error}>
        <InputSlot focus={focus} color={color}>
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
            onFocus={onFocusEvent}
            onBlur={onBlurEvent}
            onChange={onChange}
            ref={inputRef}
          />
        </InputSlot>
        <FormExplainBlock>{message}</FormExplainBlock>
      </TextInputBlock>
    );
  },
);

export default TextInput;
