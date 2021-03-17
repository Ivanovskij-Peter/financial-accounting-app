import React from "react";
import { Route, Redirect } from "react-router-dom";
import { authSelectors } from "../redux/auth/index";

const PublicRoute = ({ component: Component, redirectTo, ...routeProps }) => {
  const isAuthenticated = authSelectors.getIsAuthenticated;
  return (
    <Route
      {...routeProps}
      render={(props) =>
        isAuthenticated && routeProps.restricted ? (
          <Redirect to={redirectTo} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
