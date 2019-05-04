import * as React from 'react';

import { MainBlock } from './PageTemplate.styles';
import { BaseTemplateContainer, AuthContainer } from 'containers';

interface IProps {
  children: React.ReactNode;
}

const PageTemplate: React.FunctionComponent<IProps> = ({ children }) => (
  <>
    <BaseTemplateContainer />
    <MainBlock>{children}</MainBlock>
    <AuthContainer />
  </>
);

export default PageTemplate;
