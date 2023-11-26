import React, { lazy, Suspense } from 'react';

import LoadingPage from '../components/global/LoadingPage';
import DevelopPage from '../pages/develop';
import NotFoundPage from '../pages/not-found';

const IndexPage = lazy(() => import('../pages/index'));
const ThreadsIdPage = lazy(() => import('../pages/threads_id'));
const CreateThread = lazy(() => import('../pages/create-thread'));
const LeaderboardPage = lazy(() => import('../pages/leaderboard'));
const LoginPage = lazy(() => import('../pages/login'));
const RegisterPage = lazy(() => import('../pages/register'));

const router = [
  {
    path: '/',
    element: (
      <Suspense fallback={<LoadingPage />}>
        <IndexPage />
      </Suspense>
    ),
  },
  {
    path: '/create-thread',
    element: (
      <Suspense fallback={<LoadingPage />}>
        <CreateThread />
      </Suspense>
    ),
  },
  {
    path: '/threads/:id',
    element: (
      <Suspense fallback={<LoadingPage />}>
        <ThreadsIdPage />
      </Suspense>
    ),
  },
  {
    path: '/leaderboard',
    element: (
      <Suspense fallback={<LoadingPage />}>
        <LeaderboardPage />
      </Suspense>
    ),
  },
  {
    path: '/login',
    element: (
      <Suspense fallback={<LoadingPage />}>
        <LoginPage />
      </Suspense>
    ),
  },
  {
    path: '/register',
    element: (
      <Suspense fallback={<LoadingPage />}>
        <RegisterPage />
      </Suspense>
    ),
  },
  {
    path: '/',
    element: (
      <Suspense fallback={<LoadingPage />}>
        <DevelopPage />
      </Suspense>
    ),
  },
  {
    path: '*',
    element: (
      <NotFoundPage />
    ),
  },
];

export default router;
