import { Navigate } from "react-router-dom";
import React from "react";

const PrivateRoute = ({ children, isAuthenticated, ...rest }) => {
  return isAuthenticated ? (
    React.cloneElement(children, { ...rest, ...children.props })
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
