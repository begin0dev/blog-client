import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { palette } from 'styles/palette';
import { zIndexes, themes, sizes } from 'styles/utils';
import { baseButtonCSS } from '../../styles/baseCss';

export const HeaderBlock = styled.header`
  z-index: ${zIndexes.HEADER};
  position: relative;
  width: 100%;
  background-color: ${themes.HEADER};
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: row wrap;
  height: ${sizes.HEADER}px;
  max-width: 1400px;
  padding: 0 35px;
  margin: 0 auto;
`;

// left
export const LogoBlock = styled(NavLink)`
  margin-right: 55px;
  line-height: 0;
  svg {
    height: 36px;
    margin-top: -8px;
  }
`;

export const DesktopNavWrapper = styled.div`
  display: flex;
  align-items: center;
  a + a {
    margin-left: 40px;
  }
`;

export const NavBtn = styled(NavLink)`
  position: relative;
  font-size: 15px;
  font-weight: 600;
  padding: 8px 0;
  color: ${palette.gray6};
  user-select: none;
  margin: 0 2px;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    width: 0;
    margin: 0 auto;
    border-radius: 2px;
    background-color: ${palette.green9};
    transition: width 0.2s ease-in-out;
  }
  &.current {
    color: ${palette.green9};
    &:after {
      width: 90%;
    }
  }
`;

// right
export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const hamburgerSize = '34px';

export const SearchIconBtn = styled.button`
  background-color: transparent;
  line-height: 0;
  margin-right: calc(4px + ${hamburgerSize});
  > svg {
    font-size: 18px;
    color: ${palette.green9};
  }
`;

export const HamburgerBlock = styled.div`
  z-index: ${zIndexes.HAMBURGER};
  position: fixed;
  top: calc(${sizes.HEADER}px / 2);
  transform: translateY(-50%);
  right: 28px;
  width: ${hamburgerSize};
  height: ${hamburgerSize};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.7);
`;

export const LoginBtn = styled.button`
  ${baseButtonCSS};
  font-size: 13px;
  color: ${palette.white};
  background-color: ${palette.green9};
  border-radius: 18px;
  padding: 7px 18px;
  margin-left: 18px;
`;
