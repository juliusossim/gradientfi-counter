import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AuthProvider from '../contexts/AuthProvider';
import ProtectedRoute from './ProtectedRoute';
const Login = lazy(() => import('./Login'));
const Counter = lazy(() => import('./Counter'));

const routes = [
  { element: <Login />, path: '/' },
  {
    element: (
      <ProtectedRoute>
        <Counter />
      </ProtectedRoute>
    ),
    path: '/counter'
  }
];
export const router = createBrowserRouter(routes);
