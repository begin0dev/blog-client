import styled, { css } from 'styled-components';

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
  color: inherit;
  font-size: inherit;
  flex: 1 1 auto;
  margin: 0;
  padding: 0.62rem 0 0.7rem;
  line-height: 1;
  background-color: inherit;
  -webkit-tap-highlight-color: inherit;
  border-style: none;
  outline: none;
  &::placeholder {
    color: inherit;
    font-size: inherit;
    line-height: 1rem;
    opacity: 0.4;
  }
`;

export const Label = styled.label<{ existContent: boolean }>`
  position: absolute;
  top: 0.75rem;
  left: 0;
  right: auto;
  color: inherit;
  font-size: inherit;
  font-weight: 500;
  text-overflow: ellipsis;
  transform-origin: top left;
  transition: 0.35s cubic-bezier(0.25, 0.8, 0.5, 1);
  overflow: hidden;
  ${props =>
    props.existContent &&
    css`
      transform: translateY(-1.55rem) scale(0.9);
    `}
`;
