import styled, { css } from 'styled-components';

import { zIndexes } from 'styles/utils';

export const HamburgerBlock = styled.div`
  z-index: ${zIndexes.HAMBURGER};
  height: 35px;
  width: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 0;
`;

export const HamburgerWrapper = styled.div<{
  width: string;
  height: string;
  spacing: string;
  color: string;
  active: boolean;
}>`
  // Normalize
  color: inherit;
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  overflow: visible;
  cursor: pointer;

  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;

  ${({ width, height, spacing, color, active }) => css`
    & > span.box {
      position: relative;
      display: block;
      width: ${width};
      height: calc(${height} * 3 + ${spacing} * 2);
    }
    & > span.box > span.line {
      display: block;
      top: calc(${height} / 2);
      margin-top: calc(${height} / -2);
      &,
      &:before,
      &:after {
        position: absolute;
        width: ${width};
        height: ${height};
        background-color: ${color};
        transition-property: transform, opacity;
        transition-duration: 0.15s;
        transition-timing-function: ease;
      }
      &:before,
      &:after {
        content: '';
        display: block;
      }
      &:before {
        top: calc(${height} + ${spacing});
      }
      &:after {
        top: calc(${height} * 2 + ${spacing} * 2);
      }
    }
    ${active &&
    css`
      transform: translate3d(0, calc(${spacing} + ${height}), 0) rotate(-45deg);
      &:before {
        transform: rotate(45deg) translate3d(calc(${width} / 7), calc(${spacing} * -1), 0);
        opacity: 0;
      }
      &:after {
        transform: translate3d(0, calc((${spacing} + ${height}) * -2), 0) rotate(90deg);
      }
    `}
  `}
`;
