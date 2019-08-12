import styled, { css } from 'styled-components';
import { includeMedia } from 'styles/utils';
import { buttonColorMap, pulseKeyframes } from 'styles/baseCss';
import { palette } from 'styles/palette';

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
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
`;

export const AuthColBlock = styled.div`
  ${flexCss};
  flex-flow: row wrap;
`;

export const AuthTitle = styled.span`
  font-size: 2rem;
  font-weight: 400;
  letter-spacing: 3px;
  text-transform: uppercase;
  user-select: none;
  &:first-letter {
    color: ${palette.red7};
  }
`;

export const FormWrap = styled.form`
  ${flexCss};
  flex-flow: column wrap;
`;

export const SocialTitleBlock = styled(AuthColBlock)`
  ${flexCss};
  flex-flow: row wrap;
  font-weight: 600;
  color: ${palette.gray6};
  padding: 18px 0 15px;
`;

export const SocialIconBlock = styled(AuthColBlock)`
  ${flexCss};
  flex-flow: row wrap;
  margin-left: -2px;
  padding-bottom: 15px;
`;

export const CloseButton = styled.button`
  width: 22px;
  height: 22px;
  color: ${palette.gray2};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-radius: 100%;
  margin-right: -5px;
  &:hover {
    opacity: 0.8;
  }
  svg {
    font-size: 18px;
  }
`;

export const SocialButton = styled.button`
  width: 30px;
  height: 30px;
  color: ${palette.gray2};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-radius: 100%;
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
    font-size: 27px;
  }
`;

export const ButtonBlock = styled(AuthColBlock)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 22px 0 25px;
`;

export const AuthButton = styled.button`
  ${buttonColorMap.red};
  font-size: 13px;
  width: 100%;
  padding: 17px;
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
    color: ${palette.red7};
    font-weight: 600;
    margin-left: 10px;
    cursor: pointer;
    user-select: none;
  }
`;
