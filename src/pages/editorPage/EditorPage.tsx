import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { IcArrowLeft } from 'assets/svgs';
import { Button } from 'components/common';
import Editor from 'components/editor';
import { HeaderWrapper } from './editorPage.styles';

function EditorPage() {
  const navigate = useNavigate();

  const [markdown, setMarkdown] = useState<string>('');

  return (
    <>
      <HeaderWrapper>
        <Button shape="icon3" className="backButton" onClick={() => navigate(-1)} round>
          <IcArrowLeft />
        </Button>
        <Button round>저장하기</Button>
      </HeaderWrapper>

      <Editor markdown={markdown} setMarkdown={setMarkdown} />
    </>
  );
}

export default EditorPage;
