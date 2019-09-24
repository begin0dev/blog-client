import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

import { buttonColorMap } from 'styles/baseCss';
import { palette } from 'styles/palette';
import { zIndexes, sizes, themes, includeMedia } from 'styles/utils';

export const HeaderBlock = styled.header`
  z-index: ${zIndexes.header};
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  background-color: ${themes.header};
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
    font-size: 40px;
    margin-right: 15px;
  }
`;

export const Button = styled.button`
  color: ${palette.gray2};
  background-color: transparent;
  padding: 10px 20px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  text-transform: uppercase;
  &:hover {
    color: #ffffff;
  }
  ${includeMedia('<=md')} {
    font-size: 12px;
    padding: 10px 10px;
  }
  ${includeMedia('>md')} {
    & + & {
      margin-left: 15px;
    }
    &.sign-up {
      ${buttonColorMap.red};
      border-radius: 4px;
    }
  }
`;
