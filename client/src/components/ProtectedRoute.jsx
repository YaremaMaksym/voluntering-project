import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Component, isAuthenticated, ...rest }) => {
  if (!isAuthenticated) {
    return <Navigate to='/login' />;
  }

  return <Route {...rest} element={<Component />} />;
};

export default ProtectedRoute;
