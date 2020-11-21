import styled from 'styled-components';

import { palette } from '../../../styles/palette';

export const EditorBlock = styled.div`
  font-family: 'Fira Mono', 'Noto Sans KR', monospace;
  flex: 1;

  .CodeMirror {
    background-color: inherit;
  }
  .CodeMirror-placeholder {
    color: #868e96 !important;
  }
`;

export const TitleInputWrap = styled.div`
  position: relative;
  padding: 10px;
  margin-bottom: 5px;
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 13px;
    height: 5px;
    width: 30px;
    background-color: ${palette.green9};
  }
`;
export const TitleInput = styled.input`
  font-size: 34px;
  font-weight: 600;
  width: 100%;
  background-color: inherit;
  border-style: none;
  outline: none;
  &::placeholder {
    color: inherit;
    font-size: inherit;
    opacity: 0.4;
  }
`;
