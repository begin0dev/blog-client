import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

import { buttonColorMap, pulseKeyframes } from 'styles/baseCss';
import { palette } from 'styles/palette';
import { zIndexes, sizes, themes, includeMedia } from 'styles/utils';

export const HeaderBlock = styled.header`
  z-index: ${zIndexes.header};
  background-color: ${themes.header};
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${sizes.header}px;
  max-width: 1440px;
  padding: 0 36px;
  margin: 0 auto;

  ${includeMedia('<=md')} {
    padding: 0 20px 0 30px;
    margin: unset;
  }
`;

const leftAndRightCss = css`
  color: ${palette.gray2};
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 600;
`;

export const Left = styled.div`
  ${leftAndRightCss};
  justify-content: flex-start;
`;

export const Right = styled.div`
  ${leftAndRightCss};
  justify-content: flex-end;
  flex: 1;
`;

export const LogoWrapper = styled(NavLink)`
  line-height: 0;
  svg {
    font-size: 38px;
    margin-right: 15px;
  }
`;

export const Button = styled.button`
  color: ${palette.gray2};
  background-color: transparent;
  padding: 10px 20px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    color: #ffffff;
  }
  ${includeMedia('<=md')} {
    padding: 10px 10px;
  }
  ${includeMedia('>md')} {
    & + & {
      margin-left: 15px;
    }
    &.sign-up {
      ${buttonColorMap.red};
      text-transform: uppercase;
      border-radius: 4px;
    }
  }
`;

const circleBtnCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background-color: transparent;
  color: ${palette.gray2};
  border-radius: 100%;
  margin-left: 10px;
  &:active {
    opacity: 0.8;
    animation: ${pulseKeyframes} 0.3s;
  }
  ${includeMedia('>md')} {
    margin-left: 25px;
  }
`;

export const NotiButton = styled.button`
  ${circleBtnCss};
  &:after {
    content: '';
    width: 1px;
    height: 1px;
    position: absolute;
  }
  svg {
    font-size: 22px;
  }
`;

export const LogOutButton = styled.button`
  ${circleBtnCss};
  svg {
    font-size: 20px;
  }
`;
