import * as React from 'react';
import { useState } from 'react';

import { Editor } from '../../components';

function EditorPage(): JSX.Element {
  const [markdown, setMarkdown] = useState<string>('');

  return <Editor markdown={markdown} setMarkdown={setMarkdown} />;}

export default EditorPage;
