import styled from 'styled-components';

import { sizes } from 'styles/utils';

export const NotFoundPageBlock = styled.div`
  margin-top: -${sizes.header}px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NotFoundCenterBlock = styled.div`
  width: calc(100vw / 1.5);
  max-width: 600px;
`;
