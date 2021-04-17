import styled from 'styled-components';

import { themes, zIndexes } from '../../styles/utils';
import { Palette } from '../../styles/palette';
import { includeMedia } from '../../styles/utils';

const HEADER_HEIGHT = 70;

export const EditorWrapperBlock = styled.div`
  position: relative;
`;

export const HeaderBlock = styled.header`
  z-index: ${zIndexes.HEADER};
  position: relative;
  width: 100%;
  height: ${HEADER_HEIGHT}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  background-color: ${themes.HEADER};

  ${includeMedia('<=md')} {
    padding: 0 30px;
  }
`;

export const BackButton = styled.button`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-radius: 50%;
  svg {
    color: ${Palette.gray6};
    font-size: 26px;
    &:hover {
      opacity: 0.8;
    }
  }
`;

export const SaveBtn = styled.button`
  font-size: 13px;
  background-color: ${Palette.green9};
  color: ${Palette.white};
  padding: 7px 18px;
  border-radius: 4px;
`;

export const EditorBlock = styled.div`
  display: flex;
  padding: 10px;
`;
