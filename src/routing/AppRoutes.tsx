import React, { FC, useState, useEffect, Suspense, lazy, LazyExoticComponent } from "react";
import { MyGlobalContext, GlobalContextConsumer, GlobalContextProvider, GlobalContextValues } from "../state/contexts/contexts";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import { CustomRoute } from "./CustomRoute";
import { routesList } from "./routesList";
import { LoadingSpinner } from "../core/components/LoadingSpinner/LoadingSpinner"
import LoginPage from "../modules/Login/pages/LoginPage";
import { AppStateProvider } from "../state/contexts/appStateProvider";



interface AppProps { }

export const AppRoutes: FC<AppProps> = () => {

  return (
    <>
      <AppStateProvider >
        <Suspense fallback={<>loading...</>}>
          <BrowserRouter>
            <Switch>
              {routesList.map((route) => (
                <CustomRoute key={route.path}  {...route} />
              ))}
            </Switch>
          </BrowserRouter>
        </Suspense>
      </AppStateProvider>
    </>
  );
};