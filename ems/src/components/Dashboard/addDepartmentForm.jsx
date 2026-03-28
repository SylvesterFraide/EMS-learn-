import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/useContext";

const AddDepartmentForm = () => {
  const { addDepartment } = useContext(UserContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const Department = e.target.Department.value.trim();
    const Description = e.target.Description.value.trim();

    addDepartment(Department, Description);

    console.log({addDepartment});
    navigate("/admin-departments");
  };

  return (
    <div className="ml-64 bg-gray-100 h-[92vh] flex pt-10 justify-center ">
      <form
        action=""
        onSubmit={handleSubmit}
        className="flex flex-wrap flex-col bg-white p-5 h-[30rem] w-150 rounded-lg shadow-lg"
      >
        <h1 className="text-2xl font-bold mt-4">Add New Department</h1>
        <div className="mt-6">
          <label htmlFor="Department" className="text-lg font-semibold">
            Department Name:
          </label>
          <input
            type="text"
            className="border border-gray-300 p-2 w-full outline-none rounded"
            name="Department"
            placeholder="Department Name"
            required
          />
        </div>
        <div className="mt-6">
          <label htmlFor="Description" className="text-lg font-semibold">
            Description:
          </label>
          <textarea
            className="border border-gray-300 w-full p-6 outline-none rounded"
            name="Description"
            placeholder="Description"
            required
          ></textarea>
        </div>
        <button className="bg-teal-500 text-white font-semibold p-2 rounded my-12">
          Add Department
        </button>
      </form>
    </div>
  );
};

export default AddDepartmentForm;
