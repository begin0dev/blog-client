import styled from 'styled-components/macro';

import { MarkdownEditor, MarkdownPreview } from 'components/common';
import { palette } from '../../styles';

interface Props {
  markdown: string;
  setMarkdown: (value: string) => void;
}

function Editor({ markdown, setMarkdown }: Props) {
  return (
    <EditorBlock>
      <MarkdownEditor markdown={markdown} onChange={setMarkdown} />
      <MarkdownPreview markdown={markdown} />
    </EditorBlock>
  );
}

export default Editor;

const EditorBlock = styled.div`
  display: flex;
  flex: 1;
  padding: 10px 30px;

  > div + div {
    border-left: 1px solid ${palette.gray2};
  }
`;
