import { Outlet } from 'react-router-dom';

import Header from 'components/header';
import { PageTemplateWrapper } from './pageTemplate.styles';

function PageTemplate() {
  return (
    <PageTemplateWrapper>
      <Header />
      <main>
        <Outlet />
      </main>
    </PageTemplateWrapper>
  );
}

export default PageTemplate;
