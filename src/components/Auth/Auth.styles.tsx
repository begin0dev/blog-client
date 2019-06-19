import styled, { css } from 'styled-components';
import { includeMedia } from 'styles/utils';
import { buttonColorMap, palette } from 'styles/palette';

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

export const AuthTitle = styled.span`
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 3rem;
  letter-spacing: 3px;
  text-transform: uppercase;
`;

export const FormWrap = styled.form`
  ${flexCss};
  flex-flow: column wrap;
`;

export const SocialTitleBlock = styled(AuthColBlock)`
  ${flexCss};
  flex-flow: row wrap;
  font-weight: 500;
  color: ${palette.gray5};
  padding: 15px 0;
`;

export const SocialIconBlock = styled(AuthColBlock)`
  ${flexCss};
  flex-flow: row wrap;
  padding-bottom: 15px;
  svg {
    width: 26px;
    height: 26px;
    & + svg {
      margin-left: 18px;
    }
  }
`;

export const ButtonBlock = styled(AuthColBlock)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  svg {
    font-size: 12px;
    margin-left: 7px;
    margin-bottom: -1px;
  }
`;

export const AuthButton = styled.button`
  ${buttonColorMap.red};
  font-size: 13px;
  width: 100%;
  padding: 15px;
  border-radius: 30px;
`;
