import { InputHTMLAttributes } from 'react';
import styled from 'styled-components/macro';

import { IcSearch } from '../../../assets/svgs';
import { themes } from '../../../styles/utils';
import { palette } from '../../../styles/palette';

interface Props extends InputHTMLAttributes<any> {
  fontSize?: string;
}

function SearchInput({ fontSize = '12px', ...restProps }: Props) {
  return (
    <SearchInputBlock fontSize={fontSize}>
      <IcSearch />
      <input {...restProps} />
    </SearchInputBlock>
  );
}

export default SearchInput;

const primaryColor = themes.PRIMARY;
const borderColor = palette.GRAY1;

const SearchInputBlock = styled.div<{ fontSize: string }>`
  position: relative;
  font-size: ${({ fontSize }) => fontSize};
  color: inherit;
  transition: opacity 0.2s ease-in-out;
  opacity: 0.8;
  > svg {
    position: absolute;
    top: 50%;
    left: 16px;
    font-size: 1.3em;
    color: ${primaryColor};
    transform: translateY(-50%);
  }
  &:focus-within,
  &:hover {
    opacity: 1;
  }
  > input {
    font-size: inherit;
    width: 100%;
    color: inherit;
    border: 1px solid ${borderColor};
    border-radius: 2em;
    padding: 8px 18px 8px 36px;
    background-color: transparent;
    &::placeholder {
      font-size: inherit;
      opacity: 0.6;
    }
  }
`;
