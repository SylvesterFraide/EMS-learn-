import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Context/useContext";

const Department = () => {
  const { department, deleteDepartment } = useContext(UserContext);

  console.log(department);

  return (
    <div className="ml-64 h-[92vh] p-5 bg-gray-100">
      <h2 className="text-center font-bold text-3xl macondo-regular">
        Manage Departments
      </h2>
      <form action="" className="flex justify-between py-6 px-10">
        <input
          type="text"
          className="bg-white py-2 px-5 cursor-pointer rounded-lg shadow-xl outline-none border border-dotted border-teal-600"
          placeholder="Search by dep name"
        />
        <Link
          to="/addDepartment"
          className="flex items-center gap-2 bg-teal-600 font-semibold px-3 pt-1 rounded-md text-white"
        >
          <p className="text-2xl">+</p>
          <p className="text-xl">New Department</p>
        </Link>
      </form>
      <table className="min-w-2/4 bg-white border border-red-300 mx-auto">
        <thead>
          <tr className="bg-gray-300">
            <th className="border border-gray-400 py-3">Id</th>
            <th className="border border-gray-400 py-3">Department</th>
            <th className="border border-gray-400 py-3">Description</th>
            <th className="border border-gray-400 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {department.map((item) => (
            <tr key={item.id}>
              <td className="border border-gray-400 px-4 py-2">{item.id}</td>
              <td className="border border-gray-400 px-4 py-2">
                {item.Department}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {item.Description}
              </td>
              <td className="space-x-4 border border-gray-400 px-12 py-2">
                <button className="bg-yellow-500 hover:bg-yellow-400 text-white px-2 py-1 cursor-pointer rounded">
                  View
                </button>

                <button className="bg-yellow-500 hover:bg-yellow-400 text-white px-2 py-1 cursor-pointer rounded">
                  Update
                </button>

                <button
                  onClick={() => deleteDepartment(item.id)}
                  className="bg-red-500 hover:bg-red-400 text-white px-2 py-1 cursor-pointer rounded">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Department;
