import { InputHTMLAttributes } from 'react';
import styled from 'styled-components/macro';

import { palette } from '../../../styles/palette';
import { IcSearch } from '../../../assets/svgs';

interface Props extends InputHTMLAttributes<any> {
  fontSize?: string;
  primaryColor?: string;
  borderColor?: string;
}

function SearchInput({
  fontSize = '12px',
  primaryColor = palette.green9,
  borderColor = palette.gray3,
  ...restProps
}: Props) {
  return (
    <SearchInputBlock fontSize={fontSize} primaryColor={primaryColor}>
      <IcSearch />
      <Input borderColor={borderColor} {...restProps} />
    </SearchInputBlock>
  );
}

export default SearchInput;

const SearchInputBlock = styled.div<{ fontSize: string; primaryColor: string }>`
  position: relative;
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ primaryColor }) => primaryColor};
  > svg {
    position: absolute;
    top: 50%;
    left: 16px;
    transform: translateY(-50%);
    font-size: 1.3em;
  }
`;
const Input = styled.input<{ borderColor: string }>`
  width: 100%;
  color: inherit;
  font-size: inherit;
  border: 1px solid ${({ borderColor }) => borderColor};
  border-radius: 2em;
  padding: 8px 18px 8px 36px;
  &::placeholder {
    font-size: inherit;
    opacity: 0.4;
  }
`;
