import styled, { css } from 'styled-components';
import { themes } from 'styles/utils';

export const TextInputBlock = styled.div`
  display: flex;
  flex: 1 1 auto;
  margin: 0.9rem 0 1.3rem;
  text-align: left;
`;

export const InputSlot = styled.div<{ color: string; focus: boolean; defaultBorderColor: string }>`
  display: flex;
  flex: 1;
  align-items: center;
  color: ${props => props.color};

  &:before {
    content: '';
    position: absolute;
    left: 0;
    bottom: -1px;
    width: 100%;
    border-bottom: 1px solid ${props => props.defaultBorderColor};
  }
  &:after {
    position: absolute;
    content: '';
    left: 0;
    bottom: -1px;
    width: 100%;
    border: 1px solid currentColor;
    transition: 0.4s cubic-bezier(0.25, 0.8, 0.5, 1);
    transform: scaleX(0);
  }

  ${props =>
    props.focus &&
    css`
      &:after {
        transform: scaleX(1);
      }
      ${Label} {
        color: currentColor;
      }
    `}
`;

export const Input = styled.input`
  display: inline-flex;
  color: ${themes.fontColor};
  font-size: inherit;
  flex: 1 1 auto;
  margin: 0;
  padding: 0.65rem 0 0.7rem;
  line-height: 1;
  background-color: transparent;
  -webkit-tap-highlight-color: transparent;
  border-style: none;
  outline: none;
  &::placeholder {
    color: ${themes.fontColor};
    font-size: inherit;
    line-height: 1rem;
    opacity: 0.4;
  }
`;

export const Label = styled.label`
  position: absolute;
  left: 0;
  top: 0.75rem;
  right: auto;
  font-size: inherit;
  letter-spacing: 0.1px;
  color: ${themes.fontColor};
  text-overflow: ellipsis;
  transform-origin: top left;
  transition: 0.4s cubic-bezier(0.25, 0.8, 0.5, 1);
  overflow: hidden;
`;
