import { useState } from 'react';

import { Editor } from '../../components';

function EditorPage() {
  const [markdown, setMarkdown] = useState<string>('');

  return <Editor markdown={markdown} setMarkdown={setMarkdown} />;}

export default EditorPage;
