import { NavLink } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PaymentIcon from "@mui/icons-material/Payment";
import EnergySavingsLeafIcon from "@mui/icons-material/EnergySavingsLeaf";
import GroupIcon from "@mui/icons-material/Group";
import SettingsIcon from "@mui/icons-material/Settings";
import CategoryIcon from "@mui/icons-material/Category";

const AdminSidebar = () => {
  const linkClass = ({ isActive }) =>
    `flex items-center macondo-regular space-x-6 text-xl block py-2 px-4 rounded hover:underline transition-colors ${
      isActive? "text-teal-400 bg-gray-700" : "text-white hover:text-teal-300"
    }`;

  return (
    <div className="bg-gray-800 h-screen w-64 text-white top-0 left-0 bottom-0 fixed space-y-4">
      <div className="flex items-center justify-center bg-teal-600 h-[8vh]">
        <h3 className="macondo-regular text-center text-2xl">Employee MS</h3>
      </div>

      <div className="px-6 flex flex-col space-y-2">
        <NavLink className={linkClass} to="/admin-dashboard">
          <DashboardIcon /> <span>Dashboard</span>
        </NavLink>

        <NavLink className={linkClass} to="/admin-employees">
          <GroupIcon /> <span>Employees</span>
        </NavLink>

        <NavLink className={linkClass} to="/admin-departments">
          <CategoryIcon /> <span>Departments</span>
        </NavLink>

        <NavLink className={linkClass} to="/admin-leaves">
          <EnergySavingsLeafIcon /> <span>Leaves</span>
        </NavLink>

        <NavLink className={linkClass} to="/admin-salary">
          <PaymentIcon /> <span>Salary</span>
        </NavLink>

        <NavLink className={linkClass} to="/admin-setting">
          <SettingsIcon /> <span>Settings</span>
        </NavLink>
      </div>
    </div>
  );
};

export default AdminSidebar;