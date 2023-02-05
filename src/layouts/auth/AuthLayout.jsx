import React from 'react';
import Login from '../../pages/auth/Login';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useIsLogin } from '../../hook/authHook';

const AuthLayout = () => {
  const [loading, isLogin] = useIsLogin();
  return (
    <div className="limiter">
      {loading ? (
        <h1 className="text-center waiting_center">لطفا صبر کنید ...</h1>
      ) : !isLogin ? (
        <div className="container-login100">
          <Routes>
            <Route path="/auth/login" element={<Login />} />
          </Routes>
        </div>
      ) : (
        <Navigate to={'/'} />
      )}
    </div>
  );
};

export default AuthLayout;
