import { ReactNode } from 'react';

import Header from 'components/header';

interface IProps {
  children: ReactNode;
}

function PageTemplate({ children }: IProps) {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
}

export default PageTemplate;
