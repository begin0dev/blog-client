import { memo } from 'react';
import styled, { css } from 'styled-components';

import { themes } from 'styles';

interface Props {
  width?: number;
  height?: number;
  spacing?: number;
  color?: string;
  active: boolean;
  toggleHamburger: () => void;
}

function Hamburger({
  width,
  height,
  spacing,
  color = themes.PRIMARY,
  active,
  toggleHamburger,
}: Props) {
  return (
    <HamburgerWrapper
      width={`${width || 18}px`}
      height={`${height || 2}px`}
      spacing={`${spacing || 4}px`}
      color={color}
      active={active}
      onClick={toggleHamburger}
    >
      <div className="box">
        <div className="line" />
      </div>
    </HamburgerWrapper>
  );
}

export default memo(Hamburger);

const HamburgerWrapper = styled.button<{
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
    & > .box {
      position: relative;
      display: block;
      width: ${width};
      height: calc(${height} * 3 + ${spacing} * 2);
    }
    & > .box > .line {
      display: block;
      top: calc(${height} / 2);
      margin-top: calc(${height} / -2);
      &,
      &:before,
      &:after {
        position: absolute;
        width: ${width};
        height: ${height};
        border-radius: calc(${height} / 2);
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
      & > .box > .line {
        transform: translate3d(0, calc(${spacing} + ${height}), 0) rotate(-45deg);
        &:before {
          transform: rotate(45deg) translate3d(calc(${width} / 7), calc(${spacing} * -1), 0);
          opacity: 0;
        }
        &:after {
          transform: translate3d(0, calc((${spacing} + ${height}) * -2), 0) rotate(90deg);
        }
      }
    `}
  `}
`;
