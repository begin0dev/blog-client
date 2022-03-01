import { InputHTMLAttributes } from 'react';
import styled from 'styled-components/macro';

import { IcSearch } from '../../../assets/svgs';
import { themes } from '../../../styles/utils';
import { palette } from '../../../styles/palette';

interface Props extends InputHTMLAttributes<any> {
  fontSize?: string;
}

const primaryColor = themes.PRIMARY;
const borderColor = palette.GRAY1;

function SearchInput({ fontSize = '12px', ...restProps }: Props) {
  return (
    <SearchInputBlock fontSize={fontSize} primaryColor={primaryColor}>
      <IcSearch />
      <Input {...restProps} />
    </SearchInputBlock>
  );
}

export default SearchInput;

const SearchInputBlock = styled.div<{ fontSize: string; primaryColor: string }>`
  position: relative;
  font-size: ${({ fontSize }) => fontSize};
  color: inherit;

  > svg {
    position: absolute;
    top: 50%;
    left: 16px;
    color: ${primaryColor};
    transform: translateY(-50%);
    font-size: 1.3em;
    opacity: 0.8;
  }

  &:focus-within {
    > svg {
      opacity: 1;
    }
  }
`;
const Input = styled.input<{ borderColor?: string }>`
  font-size: inherit;
  width: 100%;
  color: inherit;
  border: 1px solid ${borderColor};
  border-radius: 2em;
  padding: 8px 18px 8px 36px;
  background-color: transparent;
  &::placeholder {
    font-size: inherit;
    opacity: 0.4;
  }
`;
