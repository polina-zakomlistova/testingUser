import { RouteProps } from 'react-router-dom';
// components
import { TestingPage } from 'pages/TestingPage';
import { NotFound } from 'pages/NotFound';

export enum AppRoutes {
    TESTING_PAGE = 'TestingPage',
    NOT_FOUND = 'NotFound',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.TESTING_PAGE]: '/',
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.TESTING_PAGE]: {
        path: RoutePath.TestingPage,
        element: <TestingPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.NotFound,
        element: <NotFound />,
    },
};
