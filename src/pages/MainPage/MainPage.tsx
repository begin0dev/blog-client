import * as React from 'react';
import * as classNames from 'classnames/bind';

import styles from './MainPage.module.scss';

const cx = classNames.bind(styles);

const MainPage: React.FunctionComponent = () => {
  return <div className={cx()}>main</div>;
};

export default MainPage;
