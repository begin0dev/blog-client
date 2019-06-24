import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

import { buttonColorMap } from 'styles/palette';
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
  color: ${themes.fontColor};
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 500;
`;

export const Left = styled.div`
  ${leftAndRightCss};
  justify-content: flex-start;
`;

export const Right = styled.div`
  ${leftAndRightCss};
  justify-content: flex-end;
`;

export const LogoWrapper = styled(NavLink)`
  line-height: 0;
  svg {
    margin-right: 15px;
    height: 36px;
  }
`;

export const Button = styled.button`
  color: ${themes.fontColor};
  background-color: transparent;
  padding: 10px 20px;
  font-size: 12px;
  font-weight: 500;
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
