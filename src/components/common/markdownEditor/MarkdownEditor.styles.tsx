import styled from 'styled-components';

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

export const TitleInput = styled.input`
  font-size: 34px;
  font-weight: 600;
  padding: 10px;
  position: relative;
  background-color: inherit;
  border-style: none;
  outline: none;
  &::placeholder {
    color: inherit;
    font-size: inherit;
    opacity: 0.4;
  }
`;
