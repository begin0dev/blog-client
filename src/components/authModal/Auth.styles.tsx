import styled, { css } from 'styled-components';

import { includeMedia } from 'styles/utils';
import { palette } from 'styles/palette';
import { pulseKeyframes } from 'styles/baseCss';

const flexCss = css`
  display: flex;
  flex: 1;
`;

export const AuthBlock = styled.div`
  ${flexCss};
  position: relative;
  flex-flow: column wrap;
  justify-content: space-between;
  padding: 75px 35px;
  overflow-x: hidden;
  overflow-y: auto;
  ${includeMedia('<=sm')} {
    height: 100%;
  }
  ${includeMedia('>sm')} {
    min-height: 640px;
  }
`;

export const SectionTopBlock = styled.div`
  ${flexCss};
  flex-flow: column wrap;
`;

export const SectionBottomBlock = styled(SectionTopBlock)`
  justify-content: flex-end;
`;

export const BackButton = styled.button`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-radius: 100%;
  margin-bottom: 55px;
  margin-left: -3px;
  svg {
    color: ${palette.gray6};
    font-size: 26px;
    &:hover {
      opacity: 0.8;
    }
  }
`;

export const WelcomeBlock = styled.div`
  ${flexCss};
  flex-flow: column wrap;
  font-size: 20px;
  font-weight: 400;
  color: #333;
  letter-spacing: -0.01em;
  div + div {
    margin-top: 5px;
  }
`;

export const LogoWrapper = styled.span`
  line-height: 0;
  margin-right: 7px;

  svg {
    height: 30px;
    margin-top: -5px;
    margin-bottom: -3px;
  }
`;

export const StartHeader = styled.h2`
  font-size: 18px;
  margin-bottom: 3px;
`;

export const SocialDescBlock = styled.div`
  font-size: 13px;
  color: ${palette.gray7};
  margin-bottom: 20px;
`;

export const SocialBlock = styled.div`
  display: flex;
  flex-flow: row wrap;
  button + button {
    margin-left: 20px;
  }
`;

export const SocialButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 42px;
  height: 42px;
  border-radius: 100%;
  overflow: hidden;
  &.facebook {
    background-color: #4267b2;
    color: #ffffff;
    svg {
      font-size: 20px;
    }
  }
  &.google {
    background-color: #ea4334;
    color: #ffffff;
    svg {
      font-size: 20px;
    }
  }
  &.kakao {
    background-color: #f7e600;
    color: #3c1e1e;
    svg {
      font-size: 28px;
    }
  }
  &.github {
    background-color: transparent;
    color: ${palette.gray9};
    svg {
      font-size: 42px;
    }
  }

  &:active {
    animation: ${pulseKeyframes} 0.3s;
  }
  &:hover,
  &:focus,
  &:active {
    opacity: 0.8;
  }
`;
