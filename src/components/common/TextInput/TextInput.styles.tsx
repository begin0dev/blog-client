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
    transition: 0.4s ease-in;
    transform: scaleX(0);
  }

  ${props =>
    props.focus &&
    css`
      &:after {
        transform: scaleX(1);
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
  font-weight: 500;
  text-overflow: ellipsis;
  transform-origin: top;
  transition: all 0.35s;
  overflow: hidden;
  ${props =>
    props.existContent &&
    css`
      top: -0.9rem;
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
  bottom: -19px;
  left: 0;
  right: 0;
  font-size: 12px;
  transition: all 0.3s ease-in;
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
