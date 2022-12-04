import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Progressbar, Toast } from 'components/common';
import { useAppSelector } from 'stores';
import { EditorPage, MainPage, ProfilePage, CategoryPage, NotFoundPage } from 'pages';
import AuthModal from 'components/authModal';
import PageTemplate from 'components/templates/pageTemplate';

function App() {
  const isLoading = useAppSelector((state) => state.base.isLoading);

  return (
    <BrowserRouter>
      <Progressbar isLoading={isLoading} />
      <Toast />
      <AuthModal />
      <Suspense fallback={<PageTemplate />}>
        <Routes>
          <Route path="/" element={<PageTemplate />}>
            <Route path="/" element={<MainPage />} />
            <Route path="about" element={<ProfilePage />} />
            <Route path="log" element={<CategoryPage />} />
            <Route path="develop/:name(all|react|node|javascript|etc)" element={<CategoryPage />} />
            <Route path="/*" element={<NotFoundPage />} />
          </Route>
          <Route path="editor" element={<EditorPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
