import React, { useContext } from 'react';
import { AdminContext } from '../context/adminLayoutContext';
import Category from './category/category';
import Product from './product/product';
import Dashboard from './dashboard/dashboard';
import { Route, Routes } from 'react-router-dom';
import Colors from './colors/Colors';
import Guaranties from './guarantee/Guaranties';
import Brands from './brands/Brands';
import Questions from './questions/Questions';
import Roles from './roles/Roles';
import Users from './users/Users';
import Orders from './orders/Orders';
import Permissions from './permissions/Permissions';
import Deliveries from './deliveries/Deliveries';
import Discounts from './discounts/Discounts';
import Comments from './comments/Comments';
import Carts from './carts/Carts';
import Logout from './auth/Logout';

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
        <Route path="/discounts" element={<Discounts />} />
        <Route path="/carts" element={<Carts />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/deliveries" element={<Deliveries />} />
        <Route path="/users" element={<Users />} />
        <Route path="/roles" element={<Roles />} />
        <Route path="/permissions" element={<Permissions />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="/logout" element={<Logout />} />

        <Route path="*" element={<Dashboard />} />
      </Routes>
    </section>
  );
};

export default Content;
