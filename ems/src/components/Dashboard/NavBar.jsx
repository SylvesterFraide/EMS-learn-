import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SidebarContext } from '../../Context/SidebarContext';

const NavBar = () => {
  const { isOpen } = useContext(SidebarContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    // clear auth etc
    navigate('/Login');
  };

  return (
    <div
      className={`flex justify-between items-center bg-teal-700 text-white h-[8vh] fixed top-0 right-0 z-40 transition-all duration-300 ${
        isOpen? "left-64" : "left-16"
      }`}
    >
      <p className="ml-6 text-2xl macondo-regular">
        Welcome <span className="text-teal-200">Admin</span>
      </p>

      <button
        onClick={handleLogout}
        className="mr-6 bg-teal-600 p-2 px-4 rounded-lg text-xl font-semibold cursor-pointer hover:bg-gray-700"
      >
        LogOut
      </button>
    </div>
  );
};

export default NavBar;