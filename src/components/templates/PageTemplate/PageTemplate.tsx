import * as React from 'react';

import { HeaderContainer, AuthContainer } from 'containers';

interface IProps {
  children: React.ReactNode;
}

const PageTemplate: React.FunctionComponent<IProps> = ({ children }) => (
  <>
    <HeaderContainer />
    <div>{children}</div>
    <AuthContainer />
  </>
);

export default PageTemplate;
