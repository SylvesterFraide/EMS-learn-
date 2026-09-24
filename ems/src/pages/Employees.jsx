import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Context/useContext";
import { SidebarContext } from "../Context/SidebarContext";

const Employees = () => {
  const { isOpen } = useContext(SidebarContext);
  const { employees } = useContext(UserContext);

  return (
    <div className={`h-[92vh] p-5 mt-13 bg-gray-100 transition-all duration-300 ${isOpen ? "ml-64" : "ml-16"}`}>
      <h2 className="text-center font-bold text-3xl macondo-regular">
        Manage Employees.
      </h2>

      <form action="" className="flex justify-between py-6 px-10">
        <input
          type="text"
          className="bg-white py-2 px-5 rounded-lg shadow-xl outline-none border border-dotted border-teal-600"
          placeholder="Search by dep name"
        />
        <Link
          to="/addDepartment"
          className="flex items-center gap-2 bg-teal-600 font-semibold px-3 pt-1 rounded-md text-white"
        >
          <p className="text-2xl">+</p>
          <p className="text-xl">New Emloyee</p>
        </Link>
      </form>

      <table className="min-w-4/4 bg-white border border-red-300 mx-auto">
        <thead>
          <tr className="bg-gray-300">
            <th className="border border-gray-400 py-3">No.</th>
            <th className="border border-gray-400 py-3">Id</th>
            <th className="border border-gray-400 py-3">Name</th>
            <th className="border border-gray-400 py-3">Gender</th>
            <th className="border border-gray-400 py-3">Station</th>
            <th className="border border-gray-400 py-3">Date Joined</th>
            <th className="border border-gray-400 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees?.map((item) => (
            <tr key={item.id}>
              <td className="border border-gray-400 px-4 py-2">{item.no}</td>
              <td className="border border-gray-400 px-4 py-2">{item.id}</td>
              <td className="border border-gray-400 px-4 py-2">{item.name}</td>
              <td className="border border-gray-400 px-4 py-2">{item.gender}</td>
              <td className="border border-gray-400 px-4 py-2">{item.station}</td>
              <td className="border border-gray-400 px-4 py-2">{item.dateJoined}</td>
              <td className="space-x-2 border border-gray-400 py-2 text-center">
                <button className="bg-blue-500 hover:bg-blue-400 text-white px-2 py-1 rounded">View</button>
                <button className="bg-yellow-500 hover:bg-yellow-400 text-white px-2 py-1 rounded">Update</button>
                <button className="bg-red-500 hover:bg-red-400 text-white px-2 py-1 rounded">
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
export default Employees