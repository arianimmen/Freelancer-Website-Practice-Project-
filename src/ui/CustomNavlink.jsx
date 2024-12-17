import { NavLink } from "react-router-dom";

export default function CustomNavLink({ children, to }) {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? "flex items-center gap-x-2 bg-primary-100/80 text-primary-900 px-2 py-1.5 rounded-lg duration-300 transition-all"
            : "flex items-center gap-x-2 hover:bg-primary-100/80 hover:text-primary-900 px-2 py-1.5 rounded-lg text-secondary-600 duration-300 transition-all"
        }
      >
        {children}
      </NavLink>
    </li>
  );
}
