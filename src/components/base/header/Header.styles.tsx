import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

import { palette } from 'styles/palette';
import { zIndexes, themes, includeMedia } from 'styles/utils';

export const HeaderBlock = styled.header`
  z-index: ${zIndexes.header};
  position: relative;
  width: 100%;
  background-color: ${themes.header};
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 33px;
  height: 98px;

  ${includeMedia('>sm')} {
    padding: 0 60px;
    height: 80px;
    max-width: 1200px;
    margin: 0 auto;
  }
`;

export const LogoBlock = styled(NavLink)`
  line-height: 0;
  svg {
    height: 36px;
    margin-top: -10px;
  }
`;

export const LoginBtn = styled.button`
  font-size: 13px;
  background-color: ${palette.green9};
  color: ${palette.gray0};
  padding: 7px 18px;
  border-radius: 4px;
`;

export const NavWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 0 33px;
  justify-content: space-between;

  ${includeMedia('>sm')} {
    max-width: 420px;
    padding: 0 45px;
    align-items: center;
  }
`;

export const NavBtn = styled(NavLink)`
  position: relative;
  font-size: 15px;
  font-weight: 600;
  color: ${palette.gray6};
  padding: 0 0 6px;
  margin: 0 2px;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: 0;
    background-color: ${palette.green9};
    transition: width 0.2s ease-in;
  }

  &.current {
    color: ${palette.green9};
    &::after {
      width: 100%;
    }
  }
`;
