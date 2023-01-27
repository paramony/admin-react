import React from 'react';
import AdminContextContainer from '../../context/adminLayoutContext';
import Content from '../../pages/Content';
import Navbar from './navbar/Index';
import SideBar from './sidebar/Index';

const Index = () => {
  return (
    <AdminContextContainer>
      <Content />

      <Navbar />

      <SideBar />
    </AdminContextContainer>
  );
};

export default Index;
