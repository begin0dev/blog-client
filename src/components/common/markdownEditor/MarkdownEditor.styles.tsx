import styled from 'styled-components';

import { palette } from '../../../styles/palette';

export const EditorBlock = styled.div`
  font-family: 'Fira Mono', monospace;
  flex: 1;

  .CodeMirror {
    background-color: ${palette.gray0};
  }
  .CodeMirror-placeholder {
    color: #868e96 !important;
  }
`;
