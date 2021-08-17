import React, { FC, useState, useEffect, Suspense, lazy, LazyExoticComponent } from "react";
import { MyGlobalContext, GlobalContextConsumer, GlobalContextProvider, GlobalContextValues } from "../state/contexts/contexts";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import { CustomRoute } from "./CustomRoute";
import { routesList } from "./routesList";
import { LoadingSpinner } from "../core/components/LoadingSpinner/LoadingSpinner"
import LoginPage from "../modules/Login/pages/LoginPage";



interface AppProps { }

export const AppRoutes: FC<AppProps> = () => {

  return (
    <>
      <GlobalContextProvider value={GlobalContextValues}>
        <Suspense fallback={<>loading...</>}>
          <BrowserRouter>
            <Switch>
              {routesList.map((route) => (
                <CustomRoute key={route.path}  {...route} />
              ))}
            </Switch>
          </BrowserRouter>
        </Suspense>
      </GlobalContextProvider>
    </>
  );
};