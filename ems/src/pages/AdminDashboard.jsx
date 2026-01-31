import React from "react";
// import AdminSidebar from '../components/Dashboard/AdminSidebar'
// import NavBar from '../components/Dashboard/NavBar'

const AdminDashboard = () => {
  return (
    <div className="ml-64 h-[92vh ">
      <div className="w-9/10 mx-auto my-8">
        <h1 className="text-4xl font-bold mb-8 macondo-regular">Dashboard Overview</h1>
        <div className="flex flex-wrap gap-8 lg:flex-row flex-col">
          <div className="bg-gray-500 flex items-center gap-4  w-100 rounded">
            <p className="bg-gray-200 w-25 h-20 py-2 px-4">image1</p>
            <div className="text-xl text-white">
              <p>Total Employees</p>
              <p>30</p>
            </div>
          </div>

          <div className="bg-gray-500 flex items-center gap-4  w-100 rounded">
            <p className="bg-gray-200 w-25 h-20 py-2 px-4">image2</p>
            <div className="text-xl text-white">
              <p>Total Departments</p>
              <p>3</p>
            </div>
          </div>

          <div className="bg-gray-500 flex items-center gap-4  w-100 rounded">
            <p className="bg-gray-200 w-25 h-20 py-2 px-4">image3</p>
            <div className="text-xl text-white">
              <p>Monthly Pay</p>
              <p>$ 50000</p>
            </div>
          </div>
        </div>

        {/* leaves details */}
        <h2 className="text-3xl font-bold mb-6 pt-20 macondo-regular">Leave Details</h2>
        <div className="grid grid-wrap grid-cols-1 xl:grid-cols-2 gap-8">
          <div className="bg-gray-500 flex items-center flex-wrap gap-4 w-133 rounded">
            <p className="bg-gray-200 w-25 h-20 py-2 px-4">image1</p>
            <div className="text-xl text-white">
              <p>Leave Applied</p>
              <p>10</p>
            </div>
          </div>

          <div className="bg-gray-500 flex items-center flex-wrap gap-4  w-133 rounded">
            <p className="bg-gray-200 w-25 h-20 py-2 px-4">image2</p>
            <div className="text-xl text-white">
              <p>Leave Approved</p>
              <p>3</p>
            </div>
          </div>

          <div className="bg-gray-500 flex items-center flex-wrap gap-4  w-133 rounded">
            <p className="bg-gray-200 w-25 h-20 py-2 px-4">image3</p>
            <div className="text-xl text-white">
              <p>Leave Pending</p>
              <p>2</p>
            </div>
          </div>

          <div className="bg-gray-500 flex items-center flex-wrap gap-4  w-133 rounded">
            <p className="bg-gray-200 w-25 h-20 py-2 px-4">image4</p>
            <div className="text-xl text-white">
              <p>Leave Rejected</p>
              <p>3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdminDashboard;
