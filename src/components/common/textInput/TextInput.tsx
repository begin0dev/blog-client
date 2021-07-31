import { useRef, useState, FocusEvent, InputHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

import { palette } from 'styles/palette';

interface IProps extends InputHTMLAttributes<any> {
  type?: string;
  label?: string;
  name: string;
  value?: string;
  color?: string;
  placeholder?: string;
  error?: boolean;
  errorBorderColor?: string;
  defaultBorderColor?: string;
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

  const onFocusEvent = (e: FocusEvent<HTMLInputElement>) => {
    setFocus(true);
    onFocus?.(e);
  };

  const onBlurEvent = (e: FocusEvent<HTMLInputElement>) => {
    setFocus(false);
    onBlur?.(e);
  };

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

export default TextInput;

const InputSlot = styled.div<{ color: string; focus: boolean }>`
  display: flex;
  flex: 1;
  align-items: center;
  color: ${({ color }) => color};
  &:before {
    content: '';
    position: absolute;
    left: 0;
    bottom: -1px;
    width: 100%;
  }
  &:after {
    position: absolute;
    content: '';
    left: 0;
    bottom: -1px;
    width: 100%;
    transition: 0.4s ease-in;
    transform: scaleX(0);
  }
  ${({ focus }) =>
    focus &&
    css`
      &:after {
        transform: scaleX(1);
      }
    `}
`;
const Label = styled.label<{ existContent: boolean }>`
  position: absolute;
  top: 0.75rem;
  left: 0;
  right: auto;
  color: inherit;
  font-size: inherit;
  font-weight: 500;
  text-overflow: ellipsis;
  transform-origin: top;
  transition: all 0.35s;
  overflow: hidden;
  ${({ existContent }) =>
    existContent &&
    css`
      top: -0.9rem;
    `}
`;
const Input = styled.input`
  display: flex;
  color: inherit;
  font-size: inherit;
  flex: 1;
  margin: 0;
  padding: 0.68rem 0 0.7rem;
  line-height: 1;
  background-color: inherit;
  border-style: none;
  &::placeholder {
    color: inherit;
    font-size: inherit;
    line-height: 1rem;
    opacity: 0.4;
  }
`;
const FormExplainBlock = styled.div`
  position: absolute;
  bottom: -19px;
  left: 0;
  right: 0;
  font-size: 12px;
  transition: all 0.3s ease-in;
`;
const TextInputBlock = styled.div<{
  error: boolean;
  errorBorderColor: string;
  defaultBorderColor: string;
}>`
  display: flex;
  flex-flow: column wrap;
  flex: 1 1 auto;
  margin: 17px 0 23px;
  text-align: left;
  ${({ error, errorBorderColor, defaultBorderColor }) => css`
    ${InputSlot} {
      &:before {
        border-bottom: 1px solid ${error ? errorBorderColor : defaultBorderColor};
      }
      &:after {
        border: 1px solid ${error ? errorBorderColor : defaultBorderColor};
      }
    }
    ${FormExplainBlock} {
      display: ${error ? 'block' : 'none'};
      color: ${error ? errorBorderColor : defaultBorderColor};
    }
  `}
`;
