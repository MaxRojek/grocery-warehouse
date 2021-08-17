import React, { FC, useState, useEffect, Suspense, lazy, LazyExoticComponent } from "react";
import { MyGlobalContext, GlobalContextConsumer, GlobalContextProvider, GlobalContextValues } from "../state/contexts/contexts";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import { CustomRoute } from "./CustomRoute";
import { routesList } from "./routesList";


interface AppProps { }

export const AppRoutes: FC<AppProps> = () => {

  return (
    <>
      <GlobalContextProvider value={GlobalContextValues}>
        <BrowserRouter>
          <Suspense fallback={<>Loading...</>}>
            <Switch>
              {routesList.map((route) => (
                <CustomRoute key={route.path}  {...route} />
              ))}

            </Switch>
          </Suspense>
        </BrowserRouter>
      </GlobalContextProvider>
    </>
  );
};