import React, { useContext } from 'react';
import AdminContextContainer, {
  AdminContext,
} from '../../context/adminLayoutContext';
import Navbar from './navbar/Index';
import SideBar from './sidebar/Index';

const Index = () => {
  const { showSidebar } = useContext(AdminContext);
  return (
    <AdminContextContainer>
      <Navbar />

      <SideBar />

      <section
        id="content_section"
        className={`bg-light py-2 px-3 ${showSidebar ? 'with_sidebar' : null}`}
      ></section>
    </AdminContextContainer>
  );
};

export default Index;
