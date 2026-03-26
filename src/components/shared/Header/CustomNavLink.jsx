import { NavLink, useLocation } from "react-router";

export default function CustoomNavLink({ route , count}) {
  const location = useLocation();

  const isActive = location.pathname === route.path;
  const isInstallation = route.path === '/my-installation';
  return (
    <li className="mr-1 font-semibold">
      <NavLink to={route.path} className={({ isActive }) => 
        isActive ? 'text-[#632EE3] underline' : "text-gray-800 hover:text-[#632EE3]"
      }>
        {route.name}
        { isInstallation && count > 0 && (
          <span className="bg-[#632EE3] text-white text-[10px] px-2 py-0.5 rounded-full flex items-center justify-center min-w-4.5 h-4.5">
            {count}
          </span>
        )}
      </NavLink>
    </li>
  )
}
