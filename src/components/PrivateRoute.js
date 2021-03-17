import React from "react";
import { Route, Redirect } from "react-router-dom";
import { authSelectors } from "../redux/auth/index";

const PrivateRoute = ({ component: Component, redirectTo, ...routeProps }) => {
  const isAuthenticated = authSelectors.getIsAuthenticated;
  return (
    <Route
      {...routeProps}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={redirectTo} />
        )
      }
    />
  );
};

export default PrivateRoute;
