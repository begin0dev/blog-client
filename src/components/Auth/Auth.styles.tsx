import styled, { css } from 'styled-components';
import { palette } from 'styles/palette';

const rowCss = css`
  display: flex;
  flex: 1;
  flex-flow: row wrap;
`;

export const AuthBlock = styled.div`
  ${rowCss};
  position: relative;
  align-items: center;
  background: ${palette.gray2};
  padding: 4rem 3rem;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-flow: column wrap;
`;

export const LogoRow = styled.div`
  ${rowCss};
  justify-content: center;
  margin-bottom: 3.5rem;
  line-height: 0;
`;

export const LogoDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background: ${palette.black};
  border-radius: 50%;
  svg {
    height: 36px;
    margin-right: -8px;
  }
`;
