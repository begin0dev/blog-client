import loadable from '@loadable/component';

const MainPage = loadable(() => import('./mainPage'));
const ProfilePage = loadable(() => import('./profilePage'));
const CategoryPage = loadable(() => import('./categoryPage'));
const NotFoundPage = loadable(() => import('./notFoundPage'));

export { MainPage, ProfilePage, CategoryPage, NotFoundPage };
