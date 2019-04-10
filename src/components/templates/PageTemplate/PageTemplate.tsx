import * as React from 'react';
import * as classNames from 'classnames/bind';

import { BaseTemplateContainer, AuthContainer } from 'containers';
import styles from './PageTemplate.module.scss';

const cx = classNames.bind(styles);

interface IProps {
  children: React.ReactNode;
}

const PageTemplate: React.FunctionComponent<IProps> = ({ children }) => (
  <>
    <BaseTemplateContainer />
    <AuthContainer />
    <main className={cx('contents')}>{children}</main>
  </>
);

export default PageTemplate;
