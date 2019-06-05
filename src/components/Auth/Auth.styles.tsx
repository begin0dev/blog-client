import styled, { css } from 'styled-components';

const flexCss = css`
  display: flex;
  flex: 1;
`;

export const AuthBlock = styled.div`
  ${flexCss};
  position: relative;
  flex-flow: column wrap;
  padding: 4rem;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const AuthRowBlock = styled.div`
  ${flexCss};
`;

export const AuthTitle = styled.span`
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 3.5rem;
  text-transform: uppercase;
`;

export const FormWrap = styled.div`
  ${flexCss};
  flex-flow: column wrap;
`;