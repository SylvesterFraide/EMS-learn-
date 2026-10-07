import React, { useContext, useState } from "react";
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
        className="flex flex-wrap flex-col bg-white p-5 h-[30rem] w-150 rounded-lg shadow-lg"
      >
        <h1 className="text-2xl font-bold mt-4">Add New Employee</h1>
        <div className="mt-6">
          <label htmlFor="id" className="text-lg font-semibold">
            {" "}
            ID:{" "}
          </label>
          <input
            type="text"
            className="border border-gray-300 p-2 w-full outline-none rounded"
            name="id"
            placeholder="ID"
            required
          />
        </div>
        <div className="mt-6">
          <label htmlFor="name" className="text-lg font-semibold">
            {" "}
            Name:{" "}
          </label>
          <input
            type="text"
            className="border border-gray-300 p-2 w-full outline-none rounded"
            name="name"
            placeholder="Name"
            required
          />
        </div>

        <div className="mt-6">
          <label htmlFor="gender" className="text-lg font-semibold">
            {" "}
            Gender:{" "}
          </label>
          <select
            name="gender"
            className="border border-gray-300 p-2 w-full outline-none rounded"
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="mt-6">
          <label htmlFor="station" className="text-lg font-semibold">
            {" "}
            Station:{" "}
          </label>
          <input
            type="text"
            className="border border-gray-300 p-2 w-full outline-none rounded"
            name="station"
            placeholder="Station"
            required
          />
        </div>

        <div className="mt-6">
          <label htmlFor="dateJoined" className="text-lg font-semibold">
            {" "}
            Date Joined:{" "}
          </label>
          <input
            type="date"
            className="border border-gray-300 p-2 w-full outline-none rounded"
            name="dateJoined"
            required
          />
        </div>

        <div className="mt-6">
          <label htmlFor="salary" className="text-lg font-semibold">
            {" "}
            Salary:{" "}
          </label>
          <input
            type="number"
            className="border border-gray-300 p-2 w-full outline-none rounded"
            name="salary"
            placeholder="Salary"
            required
          />
        </div>

        <button className="bg-teal-500 text-white font-semibold p-2 rounded my-12">
          {" "}
          Add Employee{" "}
        </button>
      </form>
    </div>
  );
};

export default AddEmployee;
