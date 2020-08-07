import React from "react";
import { Route, Redirect } from "react-router-dom";
export const PrivateRoute = ({ Component, ...props }) => {
  const authenticated = JSON.parse(localStorage.authenticated);

  if (authenticated === true) {
    return <Route exact {...props} component={Component} />;
  } else {
    return <Redirect to="/login" />;
  }
};
