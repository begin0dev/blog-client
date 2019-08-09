import styled, { css } from 'styled-components';

export const InputSlot = styled.div<{ color: string; focus: boolean }>`
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
  }
  &:after {
    position: absolute;
    content: '';
    left: 0;
    bottom: -1px;
    width: 100%;
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

export const Label = styled.label<{ existContent: boolean }>`
  position: absolute;
  top: 0.75rem;
  left: 0;
  right: auto;
  color: inherit;
  font-size: inherit;
  font-weight: 600;
  text-overflow: ellipsis;
  transform-origin: top left;
  transition: 0.35s cubic-bezier(0.25, 0.8, 0.5, 1);
  overflow: hidden;
  ${props =>
    props.existContent &&
    css`
      transform: translateY(-1.60rem);
    `}
`;

export const Input = styled.input`
  display: flex;
  color: inherit;
  font-size: inherit;
  flex: 1;
  margin: 0;
  padding: 0.68rem 0 0.7rem;
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

export const FormExplainBlock = styled.div`
  position: absolute;
  bottom: -18px;
  left: 0;
  right: 0;
  font-size: 12px;
  transition: color 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
`;

export const TextInputBlock = styled.div<{ defaultBorderColor: string; errorBorderColor: string; error: boolean }>`
  display: flex;
  flex-flow: column wrap;
  flex: 1 1 auto;
  margin: 17px 0 23px;
  text-align: left;
  ${InputSlot} {
    &:before {
      border-bottom: 1px solid ${props => (props.error ? props.errorBorderColor : props.defaultBorderColor)};
    }
    &:after {
      border: 1px solid ${props => (props.error ? props.errorBorderColor : props.defaultBorderColor)};
    }
  }
  ${FormExplainBlock} {
    display: ${props => (props.error ? 'block' : 'none')};
    color: ${props => (props.error ? props.errorBorderColor : props.defaultBorderColor)};
  }
`;
