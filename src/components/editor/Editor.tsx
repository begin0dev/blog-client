import styled from 'styled-components/macro';
import { useNavigate } from 'react-router-dom';

import { MarkdownEditor, MarkdownPreview } from 'components/common';
import { IcArrowLeft } from 'assets/svgs';
import { includeMedia, sizes, themes, zIndexes, palette } from 'styles';

interface Props {
  markdown: string;
  setMarkdown: (value: string) => void;
}

function Editor({ markdown, setMarkdown }: Props) {
  const navigate = useNavigate();

  return (
    <EditorWrapperBlock>
      <HeaderBlock>
        <BackButton type="button" onClick={() => navigate(-1)}>
          <IcArrowLeft />
        </BackButton>
        <SaveBtn>저장하기</SaveBtn>
      </HeaderBlock>
      <EditorBlock>
        <MarkdownEditor markdown={markdown} onChange={setMarkdown} />
        <MarkdownPreview markdown={markdown} />
      </EditorBlock>
    </EditorWrapperBlock>
  );
}

export default Editor;

const EditorWrapperBlock = styled.div`
  position: relative;
`;
const HeaderBlock = styled.header`
  z-index: ${zIndexes.HEADER};
  height: ${sizes.HEADER}px;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  background-color: ${themes.BACKGROUND_L1};
  ${includeMedia('<=md')} {
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
const SaveBtn = styled.button`
  font-size: 14px;
  background-color: ${themes.PRIMARY};
  color: ${palette.white};
  padding: 8px 16px;
  border-radius: 28px;
`;
const EditorBlock = styled.div`
  display: flex;
  padding: 10px 30px;
  height: calc(100vh - ${sizes.HEADER}px);
  > div + div {
    border-left: 1px solid ${palette.gray2};
  }
`;
