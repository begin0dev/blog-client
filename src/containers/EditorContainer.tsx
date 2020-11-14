import * as React from 'react';

import { MarkdownEditor, MarkdownPreview } from 'components';
import { useState } from 'react';

function EditorContainer() {
  const [markdownText, setMarkdownText] = useState<string>('');

  return (
    <div>
      <MarkdownEditor markdown={markdownText} onChange={setMarkdownText} />
      <MarkdownPreview markdown={markdownText} />
    </div>
  );
}

export default EditorContainer;
