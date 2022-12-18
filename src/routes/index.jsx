import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
const Login = lazy(() => import('./Login'));
const Counter = lazy(() => import('./Counter'));

const routes = [
  { element: <Login />, path: '/' },
  { element: <Counter />, path: '/counter' }
];
export const router = createBrowserRouter(routes);
