import React from "react";
import { Navigate, Route } from "react-router-dom";

const ProtectedRoute = ({ children, isLoggedIn, ...props }) => {
  return (
    <Route {...props}>{isLoggedIn ? children : <Navigate to={"/"} />}</Route>
  );
};

export default ProtectedRoute;
