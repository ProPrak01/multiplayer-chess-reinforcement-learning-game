import React from 'react';
import {Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const ProtectedRoute = ({ element}) => {
  const { state } = useAuth();

  return state.isAuthenticated ? (
    element
  ) : (
    <Navigate to="/login" replace />
  );
};

export default ProtectedRoute;
