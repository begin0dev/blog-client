import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

import { zIndexes, sizes, themes, includeMaxMedia, includeMinMedia } from 'styles/utils';

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

  ${includeMaxMedia('md')} {
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
  &:hover {
    color: #ffffff;
  }
  ${includeMaxMedia('md')} {
    padding: 10px 10px;
  }
  ${includeMinMedia('md')} {
    &.sign-up {
      background: linear-gradient(-180deg, #fa5252 0%, #e03131 98%);
      color: #ffffff;
      text-transform: uppercase;
      border-radius: 4px;
      &:hover {
        background: #e03131;
      }
    }
  }
`;
