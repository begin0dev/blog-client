import { Outlet } from 'react-router-dom';

import Header from 'components/header';

function PageTemplate() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default PageTemplate;
