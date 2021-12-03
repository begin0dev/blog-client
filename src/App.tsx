import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { AuthModal, PageTemplate, Progressbar } from 'components';
import { EditorPage, MainPage, ProfilePage, CategoryPage, NotFoundPage } from 'pages';
import { RootState } from './stores';

function App() {
  const isLoading = useSelector((state: RootState) => state.base.isLoading);

  return (
    <Router>
      <Progressbar isLoading={isLoading} />
      <AuthModal />
      <PageTemplate>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="about" element={<ProfilePage />} />
          <Route path="log" element={<CategoryPage />} />
          <Route path="develop/:name(all|react|node|javascript|etc)" element={<CategoryPage />} />
          <Route path="editor" element={<EditorPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </PageTemplate>
    </Router>
  );
}

export default App;
