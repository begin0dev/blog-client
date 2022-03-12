import { useState } from 'react';

import Editor from '../../components/editor';

function EditorPage() {
  const [markdown, setMarkdown] = useState<string>('');

  return <Editor markdown={markdown} setMarkdown={setMarkdown} />;
}

export default EditorPage;
