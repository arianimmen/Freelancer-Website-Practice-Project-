import { HiCollection, HiHome } from "react-icons/hi";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="bg-secondary-0 row-start-1 row-span-2 p-4">
      <ul className="flex flex-col gap-y-4">
        <li>
          <CustomNavLink to={"/owner/dashboard"}>
            <HiHome />
            <span>خانه</span>
          </CustomNavLink>
        </li>
        <li>
          <CustomNavLink to={"/owner/projects"}>
            <HiCollection />
            <span>پروژه ها</span>
          </CustomNavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;

function CustomNavLink({ children, to }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "flex items-center gap-x-2 bg-primary-100/50 text-primary-900 px-2 py-1.5 rounded-lg duration-300 transition-all"
          : "flex items-center gap-x-2 hover:bg-primary-100/50 hover:text-primary-900 px-2 py-1.5 rounded-lg text-secondary-600 duration-300 transition-all"
      }
    >
      {children}
    </NavLink>
  );
}
