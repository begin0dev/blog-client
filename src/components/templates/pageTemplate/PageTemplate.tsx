import { ReactNode } from 'react';

import Header from 'components/header';

interface IProps {
  children: ReactNode;
}

function PageTemplate({ children }: IProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}

export default PageTemplate;
