import * as React from 'react';

import { HeaderContainer } from 'containers';

interface IProps {
  children: React.ReactNode;
}

function PageTemplate({ children }: IProps): JSX.Element {
  return (
    <>
      <HeaderContainer />
      <div>{children}</div>
    </>
  );
}

export default PageTemplate;
