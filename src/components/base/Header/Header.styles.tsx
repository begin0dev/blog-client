import styled, { css } from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

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
  justify-content: flex-start;
  align-items: center;
  flex-flow: row wrap;
  max-width: 1280px;
  padding: 0 45px;
  margin: 0 auto;
  
  ${includeMedia('<=md')} {
    padding: 0 35px;
  }
`;

// left
export const LogoBlock = styled(NavLink)`
  padding-right: 45px;
  line-height: 0;
  svg {
    height: 36px;
    margin-top: -11px;
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
  position: relative;
  font-size: 15px;
  font-weight: 600;
  padding: 8px 0;
  color: ${palette.gray6};
  user-select: none;
  margin: 0 2px;

  ${includeMedia('<=md')} {
    padding: 0 0 8px;
  }

  &::after {
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
    &::after {
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
  font-size: 13px;
  background-color: ${palette.green9};
  color: ${palette.white};
  padding: 7px 18px;
  border-radius: 4px;
`;

const profileCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 1px solid ${palette.green9};
  overflow: hidden;
`;

export const ProfileBtn = styled.button`
  position: relative;
  min-width: 35px;
  width: 35px;
  height: 35px;
  border-radius: 50%;
`;

export const ProfileImgWrapper = styled.div`
  ${profileCss};
  width: 100%;
  height: 100%;
  line-height: 0;
  img {
    width: 100%;
  }
`;

export const LoginMenu = styled.div`
  z-index: ${zIndexes.loginMenu};
  position: absolute;
  top: 50px;
  right: -19px;
  width: 300px;
  max-height: 400px;
  display: flex;
  flex-flow: column wrap;
  color: ${palette.gray9};
  background-color: ${palette.white};
  border: 1px solid ${palette.gray3};
  border-radius: 4px;
  text-align: start;

  &::before {
    content: '';
    position: absolute;
    right: 30px;
    top: -7px;
    height: 12px;
    width: 12px;
    transform: rotate(45deg);
    background-color: ${palette.white};
    border-left: 1px solid ${palette.gray3};
    border-top: 1px solid ${palette.gray3};
  }

  & > div + div {
    border-top: 1px solid ${palette.gray3};
  }
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  padding: 25px 22px 20px;
  h3 {
    margin-bottom: 2px;
  }
`;

export const ProfileImageWrapper = styled.div`
  ${profileCss};
  height: 48px;
  width: 48px;
  margin-right: 20px;
  line-height: 0;
  img {
    width: 100%;
  }
`;

export const SettingLink = styled(Link)`
  color: ${palette.gray5};
  font-weight: 500;
  margin-top: 5px;
`;

export const LogoutWrapper = styled.div`
  padding: 20px 22px 25px;
`;

export const LogoutBtn = styled.button`
  font-size: 14px;
  background-color: inherit;
  color: ${palette.gray5};
  padding: 0;
  margin: 0;
`;
