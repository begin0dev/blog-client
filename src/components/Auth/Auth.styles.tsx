import styled, { css } from 'styled-components';
import { includeMedia, themes } from 'styles/utils';
import { buttonColorMap } from 'styles/palette';

const flexCss = css`
  display: flex;
  flex: 1;
`;

export const AuthBlock = styled.div`
  ${flexCss};
  position: relative;
  flex-flow: column wrap;
  padding: 4.5rem;
  overflow-x: hidden;
  overflow-y: auto;
  ${includeMedia('<=md')} {
    padding: 3rem;
  }
`;

export const AuthRowBlock = styled.div`
  ${flexCss};
`;

export const AuthColBlock = styled.div`
  ${flexCss};
  flex-flow: row wrap;
`;

export const ButtonBlock = styled(AuthColBlock)`
  padding: 20px 0;
`;

export const AuthButton = styled.button`
  ${buttonColorMap.red};
  font-size: 13px;
  width: 100%;
  padding: 15px;
  border-radius: 10px;
`;

export const AuthTitle = styled.span`
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 3.5rem;
  letter-spacing: 3px;
  text-transform: uppercase;
`;

export const FormWrap = styled.form`
  ${flexCss};
  flex-flow: column wrap;
`;
