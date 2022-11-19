import { InputHTMLAttributes } from 'react';

import { IcSearch } from 'assets/svgs';
import { SearchInputWrapper } from './seachInput.styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  fontSize?: number;
}

function SearchInput({ fontSize = 14, ...restProps }: Props) {
  return (
    <SearchInputWrapper css={{ fontSize }}>
      <input type="text" {...restProps} />
      <button type="button">
        <IcSearch />
      </button>
    </SearchInputWrapper>
  );
}

export default SearchInput;
