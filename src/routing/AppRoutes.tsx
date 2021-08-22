import React, { FC, useState, useEffect, Suspense, lazy, LazyExoticComponent } from "react";
import { MyGlobalContext, GlobalContextConsumer, GlobalContextProvider, GlobalContextValues } from "../state/contexts/contexts";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import { CustomRoute } from "./CustomRoute";
import { getPublicRoutes, getProtectedRoutes } from "./routesList";
import { LoadingSpinner } from "../core/components/LoadingSpinner/LoadingSpinner"
import LoginPage from "../modules/Login/pages/LoginPage";
import { AppStateProvider } from "../state/contexts/appStateProvider";
import PageWrapper from "../core/components/PageWrapper/PageWrapper";



interface AppProps { }

export const AppRoutes: FC<AppProps> = () => {

  const publicRoutes = getPublicRoutes();

  const protectedRoutes = getProtectedRoutes();

  return (
    <>
      <AppStateProvider >
        <Suspense fallback={<>loading...</>}>
          <BrowserRouter>
            <Switch>
              {publicRoutes.map((route) => (
                <CustomRoute key={route.path}  {...route} />
              ))}
              <PageWrapper>
                {protectedRoutes.map((route) => (
                  <CustomRoute key={route.path}  {...route} />
                ))}
              </PageWrapper>
            </Switch>
          </BrowserRouter>
        </Suspense>
      </AppStateProvider>
    </>
  );
};