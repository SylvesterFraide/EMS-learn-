import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PaymentIcon from "@mui/icons-material/Payment";
import EnergySavingsLeafIcon from "@mui/icons-material/EnergySavingsLeaf";
import GroupIcon from "@mui/icons-material/Group";
import SettingsIcon from "@mui/icons-material/Settings";
import CategoryIcon from "@mui/icons-material/Category";

const AdminSidebar = () => {
  const [active, setActive] = useState('');
  return (
    <div>
      <div className="bg-gray-800 h-screen w-64 text-white top-0 left-0 bottom-0 fixed space-y-4 ">
        <div className="flex items-center justify-center bg-teal-600 h-12">
          <h3 className="macondo-regular text-center text-2xl">Employee MS</h3>
        </div>

        <div className="px-4">
          <NavLink className="flex items-center space-x-4 block py-2 px-4 rounded hover:underline " to="/admin-dashboard" setActive='Dashboard'>
            <DashboardIcon />
            <span>Dashboard</span>
          </NavLink>

          <NavLink className="flex items-center space-x-4 block py-2 px-4 rounded hover:underline" to="/admin-employees" setActive='Employees' >
            <GroupIcon />
            <span>Employees</span>
          </NavLink>

          <NavLink className="flex items-center space-x-4 block py-2 px-4 rounded hover:underline" to="/admin-departments" setActive='Departments' >
            <CategoryIcon />
            <span>Departments</span>
          </NavLink>

          <NavLink className="flex items-center space-x-4 block py-2 px-4 rounded hover:underline" to="/admin-leaves" setActive='Leaves'>
            <EnergySavingsLeafIcon />
            <span>Leaves</span>
          </NavLink>

          <NavLink className="flex items-center space-x-4 block py-2 px-4 rounded hover:underline" to="/admin-salary" setActive='Salary' >hg
            <PaymentIcon />
            <span>Salary</span>
          </NavLink>

          <NavLink className={`${active ? 'bg-teal-600' : ''} flex items-center space-x-4 block py-2 px-4 rounded hover:underline`} to="" onClick={() => setActive='Setting'}>
            <SettingsIcon />
            <span>Settings</span>
          </NavLink>
        </div>

        {/* <ul>
                <li>Dashboard</li>
                <li>Employees</li>
                <li>Leaves</li>
                <li>Salary</li>
                <li>Setting</li>
            </ul>*/}
      </div>
    </div>
  );
};

export default AdminSidebar;
