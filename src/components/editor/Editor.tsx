import { MarkdownEditor, MarkdownPreview } from 'components/common';
import { EditorWrapper } from './editor.styles';

interface Props {
  markdown: string;
  setMarkdown: (value: string) => void;
}

function Editor({ markdown, setMarkdown }: Props) {
  return (
    <EditorWrapper>
      <MarkdownEditor markdown={markdown} onChange={setMarkdown} />
      <MarkdownPreview markdown={markdown} />
    </EditorWrapper>
  );
}

export default Editor;
