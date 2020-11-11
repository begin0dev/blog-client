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
  onChange: (value: string) => void;
}

function MarkdownEditor({ onChange }: IProps) {
  const textAreaEl = useRef<HTMLTextAreaElement | null>(null);
  const codemirrorEl = useRef<EditorFromTextArea | null>(null);

  const onChangeTextArea = useCallback((editor: Editor) => {
    onChange(editor.getValue());
  }, [onChange]);

  useEffect(() => {
    if (!textAreaEl.current) return;
    const codemirror = CodeMirror.fromTextArea(textAreaEl.current, {
      mode: 'markdown',
      theme: 'one-light',
      lineWrapping: true,
      placeholder: '내용을 작성해 주세요~',
    });
    codemirrorEl.current = codemirror;
    codemirror.focus();
    codemirror.on('change', onChangeTextArea);
    return () => {
      codemirror.toTextArea();
    };
  }, [onChange]);

  return (
    <EditorBlock>
      <textarea ref={textAreaEl} />
    </EditorBlock>
  );
}

export default memo(MarkdownEditor);
