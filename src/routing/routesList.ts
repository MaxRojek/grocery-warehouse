import { lazy } from "react";
import HomePage from "../modules/Home/pages/HomePage";
import LoginPage from "../modules/Login/pages/LoginPage";


const defaultPage = lazy(() => import("../modules/DefaultPage/DefaultPage"));

export const routesList = [
  {
    path: '/home',
    Component: defaultPage,
    title: 'home',
    authRequired: false
  },
  {
    path: '/',
    Component: HomePage,
    title: '',
    authRequired: false
  },

  {
    path: '/login',
    Component: LoginPage,
    title: 'login',
    authRequired: false
  },
  {
    path: '/orders',
    Component: defaultPage,
    title: 'Orders',
    authRequired: true,
    routes: [
      {
        path: '/orders/basket',
        Component: defaultPage,
        title: 'Orders',
        authRequired: true,
      },
      {
        path: '/orders/edit',
        Component: defaultPage,
        title: 'Orders',
        authRequired: true,
      }
    ]
  }
];





