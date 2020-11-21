import * as React from 'react';

import { MarkdownEditor, MarkdownPreview } from 'components';
import { EditorWrapperBlock, HeaderBlock, BackButton, EditorBlock, SaveBtn } from './Editor.styles';
import { ArrowLeft } from '../../assets/svgs';

interface IProps {
  markdown: string;
  setMarkdown: (value: string) => void;
}

function Editor({ markdown, setMarkdown }: IProps) {
  return (
    <EditorWrapperBlock>
      <HeaderBlock>
        <BackButton type="button">
          <ArrowLeft />
        </BackButton>
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
