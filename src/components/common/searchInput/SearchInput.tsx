import { InputHTMLAttributes } from 'react';

import { IcSearch } from 'assets/svgs';
import { SearchInputWrapper } from './seachInput.styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  fontSize?: number;
}

function SearchInput({ fontSize = 12, ...restProps }: Props) {
  return (
    <SearchInputWrapper css={{ fontSize }}>
      <IcSearch />
      <input type="text" {...restProps} />
    </SearchInputWrapper>
  );
}

export default SearchInput;
