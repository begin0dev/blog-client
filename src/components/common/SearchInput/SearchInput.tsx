import * as React from 'react';
import { MdSearch } from 'react-icons/md';
import { SearchInputBlock, Input } from './SearchInput.styles';

import Spinner from '../Spinner';

import * as classNames from 'classnames/bind';
import styles from './SearchInput.module.scss';
const cx = classNames.bind(styles);

interface IProps {
  loading?: boolean;
  placeholder?: string;
  value?: string;
  setValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FunctionComponent<IProps> = ({ loading, placeholder, value, setValue }) => {
  return (
    <SearchInputBlock>
      <Input type="text" value={value} placeholder={placeholder} onChange={setValue} />
      {loading ? (
        <div className={cx('loading-wrap')}>
          <Spinner size=".8rem" />
        </div>
      ) : (
        <i aria-hidden="true" className={cx('icon')}>
          <MdSearch />
        </i>
      )}
    </SearchInputBlock>
  );
};

export default SearchInput;
