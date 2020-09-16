import * as React from 'react';

import Header from 'components/base/Header'

interface IProps {
  children: React.ReactNode;
}

function PageTemplate({ children }: IProps): JSX.Element {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
}

export default PageTemplate;
