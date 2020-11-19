import styled from 'styled-components';
import { themes, zIndexes } from '../../styles/utils';
import { palette } from '../../styles/palette';

const HEADER_HEIGHT = 80;

export const EditorWrapperBlock = styled.div`
  position: relative;
`;

export const HeaderBlock = styled.header`
  z-index: ${zIndexes.header};
  position: relative;
  width: 100%;
  height: ${HEADER_HEIGHT}px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 40px;
  background-color: ${themes.header};
`;

export const SaveBtn = styled.button`
  font-size: 13px;
  background-color: ${palette.green9};
  color: ${palette.white};
  padding: 7px 18px;
  border-radius: 4px;
`;

export const EditorBlock = styled.div`
  display: flex;
`;
