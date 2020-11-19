import * as React from 'react';

import { MarkdownEditor, MarkdownPreview } from 'components';
import { EditorWrapperBlock, HeaderBlock, EditorBlock, SaveBtn } from './Editor.styles';

interface IProps {
  markdown: string;
  setMarkdown: (value: string) => void;
}

function Editor({ markdown, setMarkdown }: IProps) {
  return (
    <EditorWrapperBlock>
      <HeaderBlock>
        <SaveBtn>저장하기</SaveBtn>
      </HeaderBlock>
      <EditorBlock>
        <MarkdownEditor markdown={markdown} onChange={setMarkdown} />
        <MarkdownPreview markdown={markdown} />
      </EditorBlock>
    </EditorWrapperBlock>
  );
}

export default Editor;
