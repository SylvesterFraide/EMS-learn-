import React, { useContext } from "react";
import AdmnDashboardCards from "../components/Dashboard/admnDashboardCards";
import { UserContext } from "../Context/useContext";

// import AdminSidebar from '../components/Dashboard/AdminSidebar'
// import NavBar from '../components/Dashboard/NavBar'

const AdminDashboard = () => {
  const {department } = useContext(UserContext);
  return (
    <div className="ml-64 h-[92vh] p-10 bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 macondo-regular">
        Dashboard Overview
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <AdmnDashboardCards
          text="Total Employees"
          value="30"
          image="image1"
          color="bg-teal-500"
        />
        <AdmnDashboardCards
          text="Total Departments"
          value= {department.length}
          image="image2"
          color="bg-yellow-500"
        />
        <AdmnDashboardCards
          text="Monthly Pay"
          value="$50000"
          image="image3"
          color="bg-green-500"
        />
      </div>

      {/* leaves details */}
      <h2 className="text-3xl font-bold mb-6 pt-20 macondo-regular">
        Leave Details
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AdmnDashboardCards
          text="Leave Applied"
          value="10"
          image="image1"
          color="bg-teal-500"
        />
        <AdmnDashboardCards
          text="Leave Approved"
          value="3"
          image="image2"
          color="bg-yellow-500"
        />
        <AdmnDashboardCards
          text="Leave Pending"
          value="2"
          image="image3"
          color="bg-blue-500"
        />
        <AdmnDashboardCards
          text="Leave Rejected"
          value="1"
          image="image4"
          color="bg-red-500"
        />
      </div>
    </div>
  );
};
export default AdminDashboard;
