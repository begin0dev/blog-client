import 'codemirror/mode/markdown/markdown';
import 'codemirror/addon/display/placeholder';

import { memo, useEffect, useRef, useTransition } from 'react';
import CodeMirror, { Editor, EditorFromTextArea } from 'codemirror';

import { useMount, useUnMount } from 'hooks';
import { EditorWrapper } from './MarkdownEditor.styles';

interface Props {
  markdown: string;
  onChange: (value: string) => void;
}

function MarkdownEditor({ markdown, onChange }: Props) {
  const textAreaEl = useRef<HTMLTextAreaElement | null>(null);
  const codemirrorEl = useRef<EditorFromTextArea | null>(null);

  const [isPending, startTransition] = useTransition();

  useMount(() => {
    if (!textAreaEl.current) return;

    const codemirror = CodeMirror.fromTextArea(textAreaEl.current, {
      mode: 'markdown',
      theme: 'material-darker',
      placeholder: '내용을 작성해 주세요~',
      lineWrapping: true,
    });
    codemirror.focus();
    codemirror.on('change', (editor: Editor) => {
      startTransition(() => {
        onChange?.(editor.getValue());
      });
    });
    codemirrorEl.current = codemirror;
  });

  useEffect(() => {
    if (!codemirrorEl.current || isPending) return;
    if (codemirrorEl.current.getValue() !== markdown) {
      codemirrorEl.current?.setValue(markdown);
    }
  }, [isPending, markdown]);

  useUnMount(() => {
    codemirrorEl.current?.toTextArea();
  });

  return (
    <EditorWrapper>
      <div className="titleInputWrapper">
        <input className="input" type="text" placeholder="제목을 입력해주세요~" />
      </div>
      <textarea ref={textAreaEl} />
    </EditorWrapper>
  );
}

export default memo(MarkdownEditor);
