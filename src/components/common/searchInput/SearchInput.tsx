import { InputHTMLAttributes } from 'react';

import { Input, SearchInputBlock } from './SearchInput.styles';
import { palette } from '../../../styles/palette';
import { IcSearch } from '../../../assets/svgs';

interface IProps extends InputHTMLAttributes<any> {
  fontSize?: string;
  primaryColor?: string;
  borderColor?: string;
}

function SearchInput({
  fontSize = '12px',
  primaryColor = palette.green9,
  borderColor = palette.gray3,
  ...restProps
}: IProps) {
  return (
    <SearchInputBlock fontSize={fontSize} primaryColor={primaryColor}>
      <IcSearch />
      <Input borderColor={borderColor} {...restProps} />
    </SearchInputBlock>
  );
}

export default SearchInput;
