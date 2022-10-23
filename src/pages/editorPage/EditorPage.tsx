import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { IcArrowLeft } from 'assets/svgs';
import { includeMedia, palette, themes, zIndexes } from 'styles';
import { Button } from 'components/common';
import Editor from 'components/editor';

function EditorPage() {
  const navigate = useNavigate();

  const [markdown, setMarkdown] = useState<string>('');

  return (
    <EditorWrapperBlock>
      <HeaderBlock>
        <BackButton type="button" onClick={() => navigate(-1)}>
          <IcArrowLeft />
        </BackButton>
        <Button round>저장하기</Button>
      </HeaderBlock>

      <Editor markdown={markdown} setMarkdown={setMarkdown} />
    </EditorWrapperBlock>
  );
}

export default EditorPage;

const EditorWrapperBlock = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  flex-flow: column;
`;
const HeaderBlock = styled.header`
  z-index: ${zIndexes.HEADER};
  position: relative;
  width: 100%;
  height: 68px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  background-color: ${themes.BACKGROUND_L1};
  ${includeMedia('<=MD')} {
    padding: 0 30px;
  }
`;
const BackButton = styled.button`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-radius: 50%;
  svg {
    color: ${palette.gray6};
    font-size: 26px;
    &:hover {
      opacity: 0.8;
    }
  }
`;
