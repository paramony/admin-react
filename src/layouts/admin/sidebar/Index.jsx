import { useContext } from 'react';
import { AdminContext } from '../../../context/adminLayoutContext';
import Avatar from './Avatar';
import SidebarItem from './SidebarItem';
import SidebarGroupTitle from './SidebarGroupTitle';

const Sidebar = () => {
  const { showSidebar } = useContext(AdminContext);
  return (
    <section id="sidebar_section">
      <div
        className={`mini_sidebar collapsedd bg-dark h-100 ${
          showSidebar ? 'expanded' : null
        }`}
      >
        <div className="p-0 m-0">
          <Avatar
            name="محسن خراسانی"
            imagePath="/assets/images/avatar/user2.jpg"
          />
          <SidebarItem
            targetPath="/"
            title="داشبورد"
            icon="fas fa-tachometer-alt"
          />
          {/* <!-- =================================== --> */}
          <SidebarGroupTitle title=" فروشگاه" />

          <SidebarItem
            targetPath="/categories"
            title="مدیریت گروه محصول"
            icon="fas fa-stream"
          />

          <SidebarItem
            targetPath="/products"
            title="مدیریت محصول"
            icon="fas fa-cube"
          />

          <SidebarItem
            targetPath="/brands"
            title="مدیریت برند ها"
            icon="fas fa-copyright"
          />

          <SidebarItem
            targetPath="/guraranties"
            title="مدیریت گارانتی ها"
            icon="fab fa-pagelines"
          />

          <SidebarItem
            targetPath="/colors"
            title="مدیریت رنگ ها"
            icon="fas fa-palette"
          />

          <SidebarItem
            targetPath="/discounts"
            icon="fas fa-percentage"
            title="مدیریت تخفیف ها"
          />
          {/* <!-- =================================== --> */}
          <SidebarGroupTitle title=" سفارشات و سبد" />

          <SidebarItem
            targetPath="/carts"
            icon="fas fa-shopping-basket"
            title="مدیریت سبد ها"
          />
          <SidebarItem
            targetPath="/orders"
            icon="fas fa-luggage-cart"
            title="مدیریت سفارشات"
          />
          <SidebarItem
            targetPath="/deliveries"
            icon="fas fa-truck-loading"
            title="مدیریت نحوه ارسال"
          />
          {/* <!-- =================================== --> */}

          <SidebarGroupTitle title="کاربران و همکاران" />

          <SidebarItem
            targetPath="/users"
            icon="fas fa-users"
            title="مشاهده کاربران"
          />
          <SidebarItem
            targetPath="/roles"
            icon="fas fa-user-tag"
            title="نقش ها"
          />
          <SidebarItem
            targetPath="/permissions"
            icon="fas fa-shield-alt"
            title="مجوز ها"
          />
          {/* <!-- =================================== --> */}

          <SidebarGroupTitle title=" ارتباطات" />

          <SidebarItem
            targetPath="/questions"
            icon="fas fa-question-circle"
            title="سوال ها"
          />
          <SidebarItem
            targetPath="/comments"
            icon="fas fa-comment"
            title="نظرات"
          />
          {/* <!-- <li className="py-2 btn-group dropstart pe-4">
                    <i className="ms-3 icon fas fa-check text-light"></i>
                    <span className="hiddenable" data-bs-toggle="dropdown" aria-expanded="false">داشبورد</span>
                    
                    <ul className="dropdown-menu px-2 sidebar_submenu_list">
                      <li className="d-none">اول</li>
                      <li>اول</li>
                      <li>دوم</li>
                      <li>سوم</li>
                    </ul>
                </li> --> */}
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
