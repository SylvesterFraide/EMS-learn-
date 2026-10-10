import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/useContext";
import { SidebarContext } from "../../Context/SidebarContext";
import { toast } from "react-toastify";

const AddEmployee = () => {
  const { addEmployee } = useContext(UserContext);
  const { isOpen } = useContext(SidebarContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = e.target.id.value.trim();
    const name = e.target.name.value.trim();
    const gender = e.target.gender.value.trim();
    const station = e.target.station.value.trim();
    const dateJoined = e.target.dateJoined.value.trim();
    const salary = e.target.salary.value.trim();
    addEmployee(id, name, gender, station, dateJoined, salary);
    toast.success("Employee added successfully!");
    navigate("/admin-employees");
  };

  return (
    <div
      className={`bg-gray-100 min-h-screen flex pt-10 justify-center transition-all duration-300 ${isOpen ? "ml-64" : "ml-16"} pt-[10vh]`}
    >
      <form
        onSubmit={handleSubmit}
        className="flex flex-col bg-white p-6 w-[36rem] rounded-lg shadow-lg mb-10"
      >
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Add New Employee</h1>
          <button
            type="button"
            onClick={() => navigate("/admin-employees")}
            className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-1 rounded cursor-pointer font-semibold"
          >
            Back
          </button>
        </div>

        <div className="mt-5">
          <label className="font-semibold">ID:</label>
          <input
            type="text"
            name="id"
            className="border p-2 w-full rounded mt-1 border-gray-300 outline-none"
            placeholder="ID"
            required
          />
        </div>

        <div className="mt-4">
          <label className="font-semibold">Name:</label>
          <input
            type="text"
            name="name"
            className="border p-2 w-full rounded mt-1 border-gray-300 outline-none"
            placeholder="Name"
            required
          />
        </div>

        <div className="mt-4">
          <label className="font-semibold">Gender:</label>
          <select
            name="gender"
            className="border p-2 w-full rounded mt-1 border-gray-300 outline-none"
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="mt-4">
          <label className="font-semibold">Station:</label>
          <input
            type="text"
            name="station"
            className="border p-2 w-full rounded mt-1 border-gray-300 outline-none"
            placeholder="Station"
            required
          />
        </div>

        <div className="mt-4">
          <label className="font-semibold">Date Joined:</label>
          <input
            type="date"
            name="dateJoined"
            className="border p-2 w-full rounded mt-1 border-gray-300 outline-none"
            required
          />
        </div>

        <div className="mt-4">
          <label className="font-semibold">Salary:</label>
          <input
            type="number"
            name="salary"
            className="border p-2 w-full rounded mt-1 border-gray-300 outline-none"
            placeholder="Salary"
            required
          />
        </div>

        <button className="bg-teal-500 cursor-pointer hover:bg-teal-600 text-white font-semibold p-2 rounded mt-8">
          Add Employee
        </button>
      </form>
    </div>
  );
};

export default AddEmployee;
