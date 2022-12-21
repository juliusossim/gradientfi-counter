import { lazy } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { AuthLayout } from '../contexts/AuthProvider';
const ProtectedRoute = lazy(() => import('./ProtectedRoute')) ;
const Login = lazy(() => import('./Login'));
const Counter = lazy(() => import('./Counter'));

const routes = createRoutesFromElements(
  <Route element={<AuthLayout />}>
    <Route path="/" element={<Login />} />
    <Route path="/auth" element={<ProtectedRoute />}>
      <Route path="counter" element={<Counter />} />
    </Route>
  </Route>
);
export const router = createBrowserRouter(routes);
