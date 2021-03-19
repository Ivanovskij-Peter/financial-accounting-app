import React from "react";
import { Route, Redirect } from "react-router-dom";
import { authSelectors } from "../redux/auth/index";
import { useSelector } from "react-redux";

const PublicRoute = ({ component: Component, redirectTo, ...routeProps }) => {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);
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
