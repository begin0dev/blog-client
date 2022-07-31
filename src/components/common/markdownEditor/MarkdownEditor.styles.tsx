import 'codemirror/lib/codemirror.css';

import styled from 'styled-components/macro';

import { themes } from 'styles';

export const EditorBlock = styled.div`
  font-family: 'Fira Mono', 'Spoqa Han Sans Neo', monospace;
  font-size: 13px;
  flex: 1;

  .CodeMirror {
    background-color: inherit;
    color: ${themes.TEXT_L2};
  }
  .CodeMirror-placeholder {
    color: inherit;
    opacity: 0.4;
  }
  .cm-header {
    line-height: 2.2;
    color: ${themes.TEXT_L1};
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
    color: ${themes.TEXT_L1};
  }
`;

export const TitleInputWrap = styled.div`
  position: relative;
  padding: 10px 0;
  margin-bottom: 5px;
`;
export const TitleInput = styled.input`
  font-size: 34px;
  font-weight: 600;
  width: 100%;
  background-color: inherit;
  border-style: none;
  outline: none;
  color: ${themes.TEXT_L1};

  &::placeholder {
    color: inherit;
    font-size: inherit;
    opacity: 0.4;
  }
`;
