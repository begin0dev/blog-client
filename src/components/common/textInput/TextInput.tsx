import { memo, useCallback, useRef, useState, FocusEvent, InputHTMLAttributes } from 'react';

import { palette } from 'styles/palette';
import { TextInputBlock, InputSlot, Label, Input, FormExplainBlock } from './TextInput.styles';

interface IProps extends InputHTMLAttributes<any> {
  type?: string;
  name: string;
  value?: string;
  label?: string;
  color?: string;
  defaultBorderColor?: string;
  errorBorderColor?: string;
  placeholder?: string;
  error?: boolean;
  message?: string | null;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
}

function TextInput({
  type = 'text',
  name,
  label,
  placeholder,
  value,
  color = palette.gray9,
  defaultBorderColor = palette.gray4,
  errorBorderColor = palette.red7,
  error = false,
  message,
  onFocus,
  onBlur,
  ...restProps
}: IProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [focus, setFocus] = useState<boolean>(false);

  const existContent: boolean =
    focus ||
    !!placeholder ||
    (inputRef.current?.value || '').length > 0 ||
    (value || '').length > 0;

  const labelClick = () => {
    if (!focus) inputRef.current?.focus();
  };

  const onFocusEvent = useCallback(
    (e: FocusEvent<HTMLInputElement>) => {
      setFocus(true);
      onFocus?.(e);
    },
    [onFocus],
  );

  const onBlurEvent = useCallback(
    (e: FocusEvent<HTMLInputElement>) => {
      setFocus(false);
      onBlur?.(e);
    },
    [onBlur],
  );

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
          ref={inputRef}
          {...restProps}
        />
      </InputSlot>
      {message && <FormExplainBlock>{message}</FormExplainBlock>}
    </TextInputBlock>
  );
}

export default memo(TextInput);
