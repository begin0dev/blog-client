import * as React from 'react';
import { memo, useCallback, useRef, useState } from 'react';

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

function TextInput({
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
}: IProps): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);
  const [focus, setFocus] = useState<boolean>(false);

  const existContent: boolean =
    focus ||
    !!placeholder ||
    (inputRef.current?.value || '').length > 0 ||
    (value || '').length > 0;

  const onFocusEvent = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      setFocus(true);
      onFocus?.(e);
    },
    [onFocus],
  );

  const onBlurEvent = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      setFocus(false);
      onBlur?.(e);
    },
    [onBlur],
  );

  const labelClick = useCallback(() => {
    if (!focus) inputRef.current?.focus();
  }, [focus]);

  return (
    <TextInputBlock
      defaultBorderColor={defaultBorderColor}
      errorBorderColor={errorBorderColor}
      error={error}
    >
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
      {message && <FormExplainBlock>{message}</FormExplainBlock>}
    </TextInputBlock>
  );
}

export default memo(TextInput);
