import loadable from '@loadable/component';

const MainPage = loadable(() => import('./mainPage'));
const ProfilePage = loadable(() => import('./profilePage'));
const CategoryPage = loadable(() => import('./categoryPage'));
const NotFoundPage = loadable(() => import('./notFoundPage'));
const EditorPage = loadable(() => import('./editorPage'));

export { EditorPage, MainPage, ProfilePage, CategoryPage, NotFoundPage };
