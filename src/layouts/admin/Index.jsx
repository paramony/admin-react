import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AdminContextContainer from '../../context/adminLayoutContext';
import Content from '../../pages/Content';
import Navbar from './navbar/Index';
import SideBar from './sidebar/Index';
import { Navigate } from 'react-router-dom';
import { useIsLogin } from '../../hook/authHook';

const Index = () => {
  const [loading, isLogin] = useIsLogin();

  return (
    <AdminContextContainer>
      {loading ? (
        <h1 className="text-center waiting_center">لطفا صبر کنید ...</h1>
      ) : isLogin ? (
        <div>
          <Content />

          <Navbar />

          <SideBar />
        </div>
      ) : (
        <Navigate to={'/auth/login'} />
      )}
    </AdminContextContainer>
  );
};

export default Index;
