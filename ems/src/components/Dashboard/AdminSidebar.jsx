import { NavLink } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PaymentIcon from "@mui/icons-material/Payment";
import EnergySavingsLeafIcon from "@mui/icons-material/EnergySavingsLeaf";
import GroupIcon from "@mui/icons-material/Group";
import SettingsIcon from "@mui/icons-material/Settings";
import CategoryIcon from "@mui/icons-material/Category";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState, useEffect } from "react";

const AdminSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const expanded = isOpen || isHovered;

  useEffect(() => {
    const main = document.getElementById("main-content");
    if (main) {
      main.style.marginLeft = isOpen? "16rem" : "4rem";
      main.style.transition = "margin-left 0.3s ease-in-out";
    }
  }, [isOpen]);

  const linkClass = ({ isActive }) =>
    `flex items-center macondo-regular text-xl py-3 px-4 rounded transition-colors overflow-hidden whitespace-nowrap ${
      isActive? "text-teal-400 bg-gray-700" : "text-white hover:text-teal-300"
    } ${expanded? "space-x-6 justify-start" : "justify-center"}`;

  return (
    <div
      onMouseEnter={() =>!isOpen && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`bg-gray-800 h-screen text-white top-0 left-0 bottom-0 fixed space-y-4 z-50 transition-all duration-300 ease-in-out overflow-hidden ${
        expanded? "w-64" : "w-16"
      }`}
    >
      {/* Header */}
      <div className={`flex items-center bg-teal-600 h-[8vh] px-3 transition-all ${expanded? "justify-between" : "justify-center"}`}>
        <button onClick={() => setIsOpen(!isOpen)} className="text-white p-1 hover:bg-teal-700 rounded shrink-0">
          {isOpen? <CloseIcon /> : <MenuIcon />}
        </button>
        {expanded && <h3 className="macondo-regular text-2xl truncate">Employee MS</h3>}
      </div>

      {/* Links */}
      <div className="flex flex-col space-y-2 mt-4 px-1">
        <NavLink className={linkClass} to="/admin-dashboard">
          <DashboardIcon /> {expanded && <span>Dashboard</span>}
        </NavLink>

        <NavLink className={linkClass} to="/admin-employees">
          <GroupIcon /> {expanded && <span>Employees</span>}
        </NavLink>

        <NavLink className={linkClass} to="/admin-departments">
          <CategoryIcon /> {expanded && <span>Departments</span>}
        </NavLink>

        <NavLink className={linkClass} to="/admin-leaves">
          <EnergySavingsLeafIcon /> {expanded && <span>Leaves</span>}
        </NavLink>

        <NavLink className={linkClass} to="/admin-salary">
          <PaymentIcon /> {expanded && <span>Salary</span>}
        </NavLink>

        <NavLink className={linkClass} to="/admin-setting">
          <SettingsIcon /> {expanded && <span>Settings</span>}
        </NavLink>
      </div>
    </div>
  );
};

export default AdminSidebar;