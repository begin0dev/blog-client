import loadable from '@loadable/component';

export const MainPage = loadable(() => import('./mainPage'));
export const ProfilePage = loadable(() => import('./profilePage'));
export const CategoryPage = loadable(() => import('./categoryPage'));
export const NotFoundPage = loadable(() => import('./notFoundPage'));
export const EditorPage = loadable(() => import('./editorPage'));
