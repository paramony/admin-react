import React, { useContext } from 'react';
import { AdminContext } from '../context/adminLayoutContext';
import Category from './category/category';
import Product from './product/product';
import Dashboard from './dashboard/dashboard';
import { Route, Routes } from 'react-router-dom';
import Colors from './colors/Colors';
import Guaranties from './guarantee/Guaranties';
import Brands from './brands/Brands';

const Content = () => {
  const { showSidebar } = useContext(AdminContext);
  return (
    <section
      id="content_section"
      className={`bg-light py-2 px-3 ${showSidebar ? 'with_sidebar' : null}`}
    >
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/categories" element={<Category />} />
        <Route path="/products" element={<Product />} />
        <Route path="/colors" element={<Colors />} />
        <Route path="/guraranties" element={<Guaranties />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="*" element={<Dashboard />} />
      </Routes>
    </section>
  );
};

export default Content;
