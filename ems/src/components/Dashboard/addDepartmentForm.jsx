import React, { useState } from "react";

const AddDepartmentForm = () => {
  const [department, setDepartment] = useState({ departmentName: "", description: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(department);
     e.target.reset();
  };

  return (
    <div className="ml-64 bg-gray-100 h-[92vh] flex pt-10 justify-center ">
      <form
        onSubmit={handleSubmit}
        action=""
        className="flex flex-wrap flex-col bg-white p-5 h-[30rem] w-150 rounded-lg shadow-lg"
      >
        <h1 className="text-2xl font-bold mt-4">Add New Department</h1>
        <div className="mt-6">
          <label htmlFor="departmentName" className="text-lg font-semibold">
            Department Name:
          </label>
          <input
            onChange={(e) => setDepartment({ ...department, departmentName: e.target.value })}
            type="text"
            className="border border-gray-300 p-2 w-full outline-none rounded"
            id="departmentName"
            name="departmentName"
            placeholder="Department Name"
          />
        </div>
        <div className="mt-6">
          <label htmlFor="description" className="text-lg font-semibold">
            Description:
          </label>
          <textarea
            onChange={(e) => setDepartment({ ...department, description: e.target.value })}
            className="border border-gray-300 w-full p-6 outline-none rounded"
            name="description"
            id="description"
            placeholder="Description"
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
