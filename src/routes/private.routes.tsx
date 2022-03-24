import React, {lazy, Suspense} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';

import {LinearDeterminate} from 'shared/components';
import {BaseLayout} from 'shared/styles/layouts';

const Home = lazy(() => import('pages/Home'));

export const PrivateRoutes: React.FC = () => {
  return (
    <BaseLayout>
      <Suspense fallback={<LinearDeterminate />}>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="*" element={() => <Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </BaseLayout>
  );
};
