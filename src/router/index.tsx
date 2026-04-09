import React, { useEffect } from 'react';
import { createBrowserRouter, RouterProvider, useNavigation, useLocation } from 'react-router-dom';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { Home } from '../pages/Home';
import { AnalyticsService } from '../services/analyticsService';

// Configure NProgress
NProgress.configure({ showSpinner: false });

const RouteTracker = ({ children }: { children: React.ReactNode }) => {
  const navigation = useNavigation();
  const location = useLocation();

  useEffect(() => {
    if (navigation.state === 'loading') {
      NProgress.start();
    } else {
      NProgress.done();
    }
  }, [navigation.state]);

  useEffect(() => {
    AnalyticsService.pageView(location.pathname);
  }, [location]);

  return <>{children}</>;
};

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <RouteTracker>
        <Home />
      </RouteTracker>
    ),
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
