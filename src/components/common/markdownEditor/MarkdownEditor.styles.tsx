import styled from 'styled-components/macro';

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
  .cm-header {
    line-height: 2.2;
    color: ${palette.gray8};
  }
  .cm-header-1 {
    font-size: 2em;
  }
  .cm-header-2 {
    font-size: 1.7em;
  }
  .cm-header-3 {
    font-size: 1.4em;
  }
  .cm-header-4,
  .cm-header-5,
  .cm-header-6 {
    font-size: 1.17em;
  }
  .cm-strong,
  .cm-em {
    color: ${palette.gray8};
  }
`;

export const TitleInputWrap = styled.div`
  position: relative;
  padding: 10px;
  margin-bottom: 5px;
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
