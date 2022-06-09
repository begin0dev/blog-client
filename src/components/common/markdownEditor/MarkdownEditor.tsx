import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/addon/display/placeholder';

import { memo, useRef } from 'react';
import CodeMirror, { Editor, EditorFromTextArea } from 'codemirror';

import { useMount, useUnMount } from 'hooks';
import './atom-one-light.css';
import { EditorBlock, TitleInputWrap, TitleInput } from './MarkdownEditor.styles';

interface Props {
  markdown: string;
  onChange: (value: string) => void;
}

function MarkdownEditor({ markdown, onChange }: Props) {
  const textAreaEl = useRef<HTMLTextAreaElement | null>(null);
  const codemirrorEl = useRef<EditorFromTextArea | null>(null);

  useMount(() => {
    if (!textAreaEl.current) return;
    const codemirror = CodeMirror.fromTextArea(textAreaEl.current, {
      mode: 'markdown',
      theme: 'one-light',
      lineWrapping: true,
      placeholder: '내용을 작성해 주세요~',
    });
    if (markdown) codemirror.setValue(markdown);
    codemirror.focus();
    codemirror.on('change', (editor: Editor) => {
      onChange?.(editor.getValue());
    });
    codemirrorEl.current = codemirror;
  });

  useUnMount(() => {
    codemirrorEl.current?.toTextArea?.();
  });

  return (
    <EditorBlock>
      <TitleInputWrap>
        <TitleInput type="text" placeholder="제목을 입력해주세요~" />
      </TitleInputWrap>
      <textarea ref={textAreaEl} />
    </EditorBlock>
  );
}

export default memo(MarkdownEditor);
