import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { AuthModal, PageTemplate, Progressbar } from 'components';
import { EditorPage, MainPage, ProfilePage, CategoryPage, NotFoundPage } from 'pages';
import type { RootState } from './stores';
import Toast from './components/common/toast/Toast';

function App() {
  const isLoading = useSelector((state: RootState) => state.base.isLoading);

  return (
    <Router>
      <Progressbar isLoading={isLoading} />
      <Toast />
      <AuthModal />
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
    </Router>
  );
}

export default App;
