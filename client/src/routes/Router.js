import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../component/Home';
const Post = lazy(() => import('../component/Post'));
const Page404 = lazy(() => import('../component/Page404'));

export default function Router() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<span>Loading....</span>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/new"
          element={
            <Suspense fallback={<span>Please wait...</span>}>
              <Post />
            </Suspense>
          }
        />
        <Route
          path="/*"
          element={
            <Suspense fallback={<span>Please wait....</span>}>
              <Page404 />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
}
