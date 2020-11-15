import * as React from 'react';

import { Editor } from 'components';
import { useState } from 'react';

function EditorContainer() {
  const [markdown, setMarkdown] = useState<string>('');

  return <Editor markdown={markdown} setMarkdown={setMarkdown} />;
}

export default EditorContainer;
