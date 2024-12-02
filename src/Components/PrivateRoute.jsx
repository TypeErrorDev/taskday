import { Navigate } from "react-router-dom";
import React from "react";

const PrivateRoute = ({ children, isAuthenticated }) => {
  // Pass through all props to children using cloneElement
  return isAuthenticated ? React.cloneElement(children) : <Navigate to="/" />;
};

export default PrivateRoute;
