import styled, { css } from 'styled-components';

import { palette } from 'styles/palette';

export const ProfileImgWrapper = styled.div<{ round: boolean; size: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${palette.green9};
  overflow: hidden;
  line-height: 0;

  width: ${(props) => `${props.size}px`};
  height: ${(props) => `${props.size}px`};
  min-width: ${(props) => `${props.size}px`};

  ${(props) =>
    props.round &&
    css`
      border-radius: 50%;
    `};

  img {
    width: 100%;
  }
`;
