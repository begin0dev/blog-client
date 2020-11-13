import * as React from 'react';

import { MarkdownEditor } from 'components';
import { useState } from 'react';

function EditorContainer() {
  const [markdownText, setMarkdownText] = useState<string | null>(null);

  return <MarkdownEditor markdown={markdownText} onChange={setMarkdownText} />;
}

export default EditorContainer;
