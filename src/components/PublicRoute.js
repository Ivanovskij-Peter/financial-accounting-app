import React from "react";
import { Route, Redirect } from "react-router-dom";
import { authSelectors } from "../redux/auth/index";
import { useSelector } from "react-redux";

const PublicRoute = ({ component: Component, redirectTo, ...routeProps }) => {
  const token = useSelector(authSelectors.getToken);
  return (
    <Route
      {...routeProps}
      render={(props) =>
        token && routeProps.restricted ? (
          <Redirect to={redirectTo} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
