import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../Context/useContext";
import { SidebarContext } from "../../Context/SidebarContext";

const ViewDepartment = () => {
  const { department } = useContext(UserContext);
  const { isOpen } = useContext(SidebarContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const dept = department.find((item) => item.id === parseInt(id));

  if (!dept) {
    return (
      <div className={`min-h-screen flex justify-center items-center ${isOpen? "ml-64" : "ml-16"}`}>
        <p>Department not found!</p>
      </div>
    );
  }

  return (
    <div className={`bg-gray-100 min-h-screen flex justify-center pt-[10vh] transition-all duration-300 ${isOpen? "ml-64" : "ml-16"}`}>
      <div className="bg-white p-8 w-full max-w-xl rounded-lg shadow-lg">

        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">View Department</h1>
          <button
            onClick={() => navigate("/admin-departments")}
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-1 rounded font-semibold"
          >
            ← Back
          </button>
        </div>

        <div className="space-y-5">
          <div>
            <label className="text-sm text-gray-500 font-semibold">Department ID</label>
            <p className="border p-2 rounded bg-gray-50 mt-1">{dept.id}</p>
          </div>

          <div>
            <label className="text-sm text-gray-500 font-semibold">Department Name</label>
            <p className="border p-2 rounded bg-gray-50 mt-1">{dept.Department || dept.name}</p>
          </div>

          <div>
            <label className="text-sm text-gray-500 font-semibold">Description</label>
            <p className="border p-4 rounded bg-gray-50 mt-1 min-h-[100px]">{dept.Description || dept.description}</p>
          </div>
        </div>

        <div className="flex gap-3 mt-8">
          <button
            onClick={() => navigate(`/editDepartment/${dept.id}`)}
            className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded font-semibold"
          >
            Edit
          </button>
          <button
            onClick={() => navigate("/admin-departments")}
            className="bg-gray-200 hover:bg-gray-300 px-6 py-2 rounded font-semibold"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewDepartment;