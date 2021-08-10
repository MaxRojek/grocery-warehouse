import { Redirect, Route } from "react-router-dom"
import { routes } from "../models/routes/routes"

export const CustomRoute = (route: routes) => {

  const { path, Component, title, authRequired } = route;

  return (
    <Route
      path={path}
      render={(props) =>
        authRequired ? <Redirect to={"./home"} /> : <Component />
      }
    />
  );
};
