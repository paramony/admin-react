import React, { useContext } from 'react';
import { AdminContext } from '../context/adminLayoutContext';
import Category from './category/category';
import Product from './product/product';

const Content = () => {
  const { showSidebar } = useContext(AdminContext);
  return (
    <section
      id="content_section"
      className={`bg-light py-2 px-3 ${showSidebar ? 'with_sidebar' : null}`}
    >
      {/* <Dashboard /> */}
      {/* <Category /> */}
      <Product />
    </section>
  );
};

export default Content;
