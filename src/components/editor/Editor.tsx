import * as React from 'react';

import { MarkdownEditor, MarkdownPreview } from 'components';
import { EditorWrapperBlock } from './Editor.styles';

interface IProps {
  markdown: string;
  setMarkdown: (value: string) => void;
}

function Editor({ markdown, setMarkdown }: IProps) {
  return (
    <EditorWrapperBlock>
      <MarkdownEditor markdown={markdown} onChange={setMarkdown} />
      <MarkdownPreview markdown={markdown} />
    </EditorWrapperBlock>
  );
}

export default Editor;
