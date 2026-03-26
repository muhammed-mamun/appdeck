import { NavLink, useLocation } from "react-router";

export default function CustoomNavLink({ route }) {
  const location = useLocation();

  const isActive = location.pathname === route.path;

  return (
    <li className="mr-1 font-semibold">
      <NavLink to={route.path} className={({ isActive }) => 
        isActive ? 'text-[#632EE3] underline' : "text-gray-800 hover:text-[#632EE3]"
      }>{route.name}</NavLink>
    </li>
  )
}
