import styled from 'styled-components/macro';

import { MarkdownEditor, MarkdownPreview } from 'components';
import { IcArrowLeft } from '../../assets/svgs';
import { includeMedia, sizes, themes, zIndexes } from '../../styles/utils';
import { palette } from '../../styles/palette';

interface Props {
  markdown: string;
  setMarkdown: (value: string) => void;
}

function Editor({ markdown, setMarkdown }: Props) {
  return (
    <EditorWrapperBlock>
      <HeaderBlock>
        <BackButton type="button">
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
  background-color: ${themes.HEADER};
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
  font-size: 13px;
  background-color: ${palette.green9};
  color: ${palette.white};
  padding: 7px 18px;
  border-radius: 4px;
`;
const EditorBlock = styled.div`
  display: flex;
  padding: 10px;
`;
