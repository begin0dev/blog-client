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
  color: ${palette.gray9};
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
  overflow: hidden;
  margin-bottom: 45px;
  margin-left: -3px;
  &:hover {
    svg {
      opacity: 0.8;
    }
  }
  svg {
    font-size: 26px;
  }
`;

export const WelcomeBlock = styled.div`
  ${flexCss};
  flex-flow: column wrap;
  font-size: 20px;
  font-weight: 500;
  color: ${palette.gray7};
  span {
    color: ${palette.gray9};
    margin-right: 8px;
  }
  div + div {
    margin-top: 10px;
  }
`;

export const StartHeader = styled.h2`
  font-size: 21px;
  margin-bottom: 10px;
`;

export const SocialDescBlock = styled.div`
  font-size: 12px;
  color: ${palette.gray7};
  margin-bottom: 12px;
`;

export const SocialBlock = styled.div`
  display: flex;
  flex-flow: row wrap;
  button + button {
    margin-left: 16px;
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
    color: #FFFFFF;
    svg {
      font-size: 20px;
    }
  }
  &.google {
    background-color: #EA4334;
    color: #FFFFFF;
    svg {
      font-size: 20px;
    }
  }
  &.kakao {
    background-color: #F7E600;
    color: #3C1E1E;
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
