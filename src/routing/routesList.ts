import { lazy } from "react";


const HomePage = lazy(() => import("../modules/Home/pages/HomePage"));
const defaultPage = lazy(() => import("../modules/DefaultPage/DefaultPage"));
const LoginPage = lazy(() => import("../modules/Login/pages/LoginPage"));


export const routesList = [

  {
    path: '/home',
    Component: HomePage,
    title: 'home',
    authRequired: false
  },
  {
    path: '/login',
    Component: LoginPage,
    title: 'login',
    authRequired: false
  },
  {
    path: '/register',
    Component: defaultPage,
    title: 'register',
    authRequired: false
  },
  {
    path: '/',
    Component: HomePage,
    title: 'home',
    authRequired: false
  },
];
// '/' means default route and should always be at the end




