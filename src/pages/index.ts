import { lazy } from 'react';

export const MainPage = lazy(() => import('./mainPage'));
export const ProfilePage = lazy(() => import('./profilePage'));
export const CategoryPage = lazy(() => import('./categoryPage'));
export const NotFoundPage = lazy(() => import('./notFoundPage'));
export const EditorPage = lazy(() => import('./editorPage'));
