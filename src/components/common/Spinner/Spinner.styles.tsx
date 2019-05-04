import styled, { css, keyframes } from 'styled-components';

import { themes } from 'styles/utils';

export const SpinnerBlock = styled.div<{ size?: string }>`
  position: relative;
  ${props =>
    props.size
      ? css`
          width: ${props.size};
          height: ${props.size};
        `
      : css`
          width: 12px;
          height: 12px;
        `}
`;

const circleFadeDelay = keyframes`
  0%, 39%, 100% { opacity: 0; }
  40% { opacity: 1; }
`;

export const Circle = styled.span<{ color?: string }>`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  &:before {
    content: '';
    display: block;
    margin: 0 auto;
    width: 15%;
    height: 15%;
    background-color: ${props => (props.color ? props.color : themes.secondary)};
    border-radius: 100%;
    animation: ${circleFadeDelay} 1.2s infinite ease-in-out both;
  }

  &.circle1 {
    transform: rotate(30deg);
    &:before {
      animation-delay: -1.1s;
    }
  }
  &.circle2 {
    transform: rotate(60deg);
    &:before {
      animation-delay: -1s;
    }
  }
  &.circle3 {
    transform: rotate(90deg);
    &:before {
      animation-delay: -0.9s;
    }
  }
  &.circle4 {
    transform: rotate(120deg);
    &:before {
      animation-delay: -0.8s;
    }
  }
  &.circle5 {
    transform: rotate(150deg);
    &:before {
      animation-delay: -0.7s;
    }
  }
  &.circle6 {
    transform: rotate(180deg);
    &:before {
      animation-delay: -0.6s;
    }
  }
  &.circle7 {
    transform: rotate(210deg);
    &:before {
      animation-delay: -0.5s;
    }
  }
  &.circle8 {
    transform: rotate(240deg);
    &:before {
      animation-delay: -0.4s;
    }
  }
  &.circle9 {
    transform: rotate(270deg);
    &:before {
      animation-delay: -0.3s;
    }
  }
  &.circle10 {
    transform: rotate(300deg);
    &:before {
      animation-delay: -0.2s;
    }
  }
  &.circle11 {
    transform: rotate(330deg);
    &:before {
      animation-delay: -0.1s;
    }
  }
`;
