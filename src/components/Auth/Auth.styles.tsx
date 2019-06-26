import styled, { css, keyframes } from 'styled-components';
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
  color: ${palette.gray2};
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
  margin-left: -2px;
  padding-bottom: 15px;
`;

const pulseKeyframes = keyframes`
  0% { box-shadow: 0 0 0 0 ${palette.gray8}; }
  100% { box-shadow: 0 0 8px 3px ${palette.gray8}; }
`;

export const SocialButton = styled.button`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background-color: transparent;
  color: ${palette.gray2};
  &:active {
    animation: ${pulseKeyframes} 0.3s;
  }
  &:hover,
  &:focus,
  &:active {
    color: ${palette.white};
  }
  & + & {
    margin-left: 18px;
  }
  svg {
    width: 26px;
    height: 26px;
  }
`;

export const ButtonBlock = styled(AuthColBlock)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0 25px;
`;

export const AuthButton = styled.button`
  ${buttonColorMap.red};
  font-size: 13px;
  width: 100%;
  padding: 15px;
  border-radius: 25px;
  svg {
    font-size: 12px;
    margin-left: 7px;
    margin-bottom: -1px;
  }
  &:active {
    animation: ${pulseKeyframes} 0.3s;
  }
`;

export const ChangeFormBlock = styled(AuthColBlock)`
  justify-content: center;
  color: ${palette.gray4};
  span {
    color: ${palette.red8};
    font-weight: 500;
    margin-left: 10px;
    cursor: pointer;
    user-select: none;
  }
`;
