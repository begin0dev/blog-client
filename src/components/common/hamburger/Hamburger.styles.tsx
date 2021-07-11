import styled, { css } from 'styled-components';

import { zIndexes } from 'styles/utils';

interface IHamburgerVariable {
  paddingX: string;
  paddingY: string;
  width: string;
  height: string;
  spacing: string;
  color: string;
  activeColor: string;
  borderRadius: string;
  hoverOpacity: number;
  activeHoverOpacity: number;
  hoverUseFilter: boolean;
  hoverFilter: string;
  activeHoverFilter: string;
}

const hamburgerVariable: IHamburgerVariable = {
  paddingX: '3px',
  paddingY: '3px',
  width: '15px',
  height: '1px',
  spacing: '4px',
  color: '#ffffff',
  activeColor: '#ffffff',
  borderRadius: '3px',
  hoverOpacity: 1,
  activeHoverOpacity: 1,
  hoverUseFilter: false,
  hoverFilter: 'opacity(50%)',
  activeHoverFilter: 'opacity(50%)',
};

export const HamburgerBlock = styled.div`
  z-index: ${zIndexes.HAMBURGER};
  height: 35px;
  width: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
  line-height: 0;
`;

export const HamburgerWrapper = styled.div<{ active: boolean }>`
  padding: ${hamburgerVariable.paddingX} ${hamburgerVariable.paddingY};
  display: inline-block;
  cursor: pointer;

  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;

  // Normalize
  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  overflow: visible;

  &:hover {
    ${hamburgerVariable.hoverUseFilter
      ? { filter: hamburgerVariable.hoverFilter }
      : { opacity: hamburgerVariable.hoverOpacity }}
    ${({ active }) =>
      active &&
      (hamburgerVariable.hoverUseFilter
        ? { filter: hamburgerVariable.activeHoverFilter }
        : { opacity: hamburgerVariable.activeHoverOpacity })}
  }

  & > span > span {
    ${({ active }) =>
      active &&
      css`
        transform: translate3d(
            0,
            calc(${hamburgerVariable.spacing} + ${hamburgerVariable.height}),
            0
          )
          rotate(-45deg);
        &,
        &:before,
        &:after {
          background-color: ${hamburgerVariable.activeColor};
        }
        &:before {
          transform: rotate(45deg)
            translate3d(
              calc(${hamburgerVariable.width} / 7),
              calc(${hamburgerVariable.spacing} * -1),
              0
            );
          opacity: 0;
        }
        &:after {
          transform: translate3d(
              0,
              calc((${hamburgerVariable.spacing} + ${hamburgerVariable.height}) * -2),
              0
            )
            rotate(90deg);
        }
      `}
  }
`;

export const Box = styled.span`
  width: ${hamburgerVariable.width};
  height: calc(${hamburgerVariable.height} * 3 + ${hamburgerVariable.spacing} * 2);
  display: inline-block;
  position: relative;
`;

export const Inner = styled.span`
  display: block;
  top: calc(${hamburgerVariable.height} / 2);
  margin-top: calc(${hamburgerVariable.height} / -2);

  &,
  &:before,
  &:after {
    width: ${hamburgerVariable.width};
    height: ${hamburgerVariable.height};
    background-color: ${hamburgerVariable.color};
    position: absolute;
    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease;
  }
  &:before,
  &:after {
    content: '';
    display: block;
  }
  &:before {
    top: calc((${hamburgerVariable.spacing} + ${hamburgerVariable.height}));
    transition-property: transform, opacity;
    transition-timing-function: ease;
    transition-duration: 0.15s;
  }
  &:after {
    top: calc(${hamburgerVariable.height} * 2 + ${hamburgerVariable.spacing} * 2);
  }
`;
