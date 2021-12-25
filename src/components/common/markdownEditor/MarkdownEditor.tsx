import 'codemirror/lib/codemirror.css';

import { memo } from 'react';
import CodeMirror, { Editor, EditorFromTextArea } from 'codemirror';
import { useEffect, useRef } from 'react';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/addon/display/placeholder';

import './atom-one-light.css';
import { EditorBlock, TitleInputWrap, TitleInput } from './MarkdownEditor.styles';

interface Props {
  markdown: string;
  onChange: (value: string) => void;
}

function MarkdownEditor({ markdown, onChange }: Props) {
  const initialize = useRef<boolean>(true);
  const textAreaEl = useRef<HTMLTextAreaElement | null>(null);
  const codemirrorEl = useRef<EditorFromTextArea | null>(null);

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
    codemirror.on('change', (editor: Editor) => {
      onChange?.(editor.getValue());
    });

    return () => {
      codemirror.toTextArea();
    };
  }, [onChange]);

  useEffect(() => {
    if (!initialize.current) return;
    initialize.current = false;
    if (markdown) codemirrorEl.current?.setValue?.(markdown);
  }, [markdown]);

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
