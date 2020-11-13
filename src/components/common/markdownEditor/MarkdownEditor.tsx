import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/addon/display/placeholder';
import * as React from 'react';
import { memo } from 'react';
import CodeMirror, { Editor, EditorFromTextArea } from 'codemirror';
import { useCallback, useEffect, useRef } from 'react';

import './atom-one-light.css';
import { EditorBlock } from './MarkdownEditor.styles';

interface IProps {
  markdown: string | null;
  onChange: (value: string) => void;
}

function MarkdownEditor({ markdown, onChange }: IProps) {
  const init = useRef<boolean>(true);
  const textAreaEl = useRef<HTMLTextAreaElement | null>(null);
  const codemirrorEl = useRef<EditorFromTextArea | null>(null);

  const onChangeTextArea = useCallback(
    (editor: Editor) => {
      onChange(editor.getValue());
    },
    [onChange],
  );

  useEffect(() => {
    if (!textAreaEl.current) return;
    const codemirror = CodeMirror.fromTextArea(textAreaEl.current, {
      mode: 'markdown',
      theme: 'one-light',
      placeholder: '내용을 작성해 주세요~',
    });
    codemirrorEl.current = codemirror;
    codemirror.focus();
    codemirror.on('change', onChangeTextArea);
    return () => {
      codemirror.toTextArea();
    };
  }, [onChangeTextArea]);

  useEffect(() => {
    if (!init.current) return;
    init.current = false;
    if (markdown) codemirrorEl.current?.setValue?.(markdown);
  }, [markdown]);

  return (
    <EditorBlock>
      <textarea ref={textAreaEl} />
    </EditorBlock>
  );
}

export default memo(MarkdownEditor);
