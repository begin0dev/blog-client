import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { palette } from 'styles/palette';
import { zIndexes, themes, includeMedia } from 'styles/utils';
import { baseButtonCSS } from '../../../styles/baseCss';

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
  max-width: 1400px;
  padding: 0 45px;
  margin: 0 auto;

  ${includeMedia('<=md')} {
    padding: 0 35px;
  }
`;

// left
export const LogoBlock = styled(NavLink)`
  padding-right: 55px;
  line-height: 0;
  svg {
    height: 36px;
    margin-top: -8px;
  }
`;

export const NavWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  ${includeMedia('<=md')} {
    flex-basis: 100%;
    order: 2;
  }

  a + a {
    margin-left: 45px;
  }
`;

export const NavBtn = styled(NavLink)`
  ${includeMedia('<=md')} {
    display: none;
  }
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
  height: 80px;
`;

export const LoginBtn = styled.button`
  ${baseButtonCSS};
  font-size: 13px;
  color: ${palette.white};
  background-color: ${palette.green9};
  padding: 7px 22px;
  border-radius: 18px;
`;
