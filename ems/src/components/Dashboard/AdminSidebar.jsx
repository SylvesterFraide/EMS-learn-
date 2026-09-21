import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import {SidebarContext } from '../../Context/SidebarContext';
import DashboardIcon from "@mui/icons-material/Dashboard";
import PaymentIcon from "@mui/icons-material/Payment";
import EnergySavingsLeafIcon from "@mui/icons-material/EnergySavingsLeaf";
import GroupIcon from "@mui/icons-material/Group";
import SettingsIcon from "@mui/icons-material/Settings";
import CategoryIcon from "@mui/icons-material/Category";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const AdminSidebar = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const [isHovered, setIsHovered] = useState(false);
  const expanded = isOpen || isHovered;

  const linkClass = ({ isActive }) =>
    `flex items-center text-xl py-3 px-4 rounded whitespace-nowrap overflow-hidden ${
      isActive? "text-teal-400 bg-gray-700" : "text-white"
    } ${expanded? "space-x-6" : "justify-center"}`;

  return (
    <div
      onMouseEnter={() =>!isOpen && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`bg-gray-800 h-screen fixed left-0 top-0 z-50 transition-all duration-300 ${expanded? "w-64" : "w-16"}`}
    >
      <div className={`flex items-center bg-teal-600 h-[8vh] px-3 ${expanded? "justify-between" : "justify-center"}`}>
        {expanded && <h3 className="text-2xl truncate">Employee MS</h3>}
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          {isOpen? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      <div className="flex flex-col space-y-2 mt-4">
        <NavLink className={linkClass} to="/admin-dashboard"><DashboardIcon />{expanded && <span>Dashboard</span>}</NavLink>
        <NavLink className={linkClass} to="/admin-employees"><GroupIcon />{expanded && <span>Employees</span>}</NavLink>
        <NavLink className={linkClass} to="/admin-departments"><CategoryIcon />{expanded && <span>Departments</span>}</NavLink>
        <NavLink className={linkClass} to="/admin-leaves"><EnergySavingsLeafIcon />{expanded && <span>Leaves</span>}</NavLink>
        <NavLink className={linkClass} to="/admin-salary"><PaymentIcon />{expanded && <span>Salary</span>}</NavLink>
        <NavLink className={linkClass} to="/admin-setting"><SettingsIcon />{expanded && <span>Settings</span>}</NavLink>
      </div>
    </div>
  );
};
export default AdminSidebar;