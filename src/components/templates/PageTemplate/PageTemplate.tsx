import * as React from 'react';

import { BaseTemplateContainer, AuthContainer } from 'containers';
import { MainBlock } from './PageTemplate.styles';

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
