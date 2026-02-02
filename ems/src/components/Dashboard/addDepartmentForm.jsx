import React from "react";

const AddDepartmentForm = () => {
  return (
    <div className="ml-64 bg-gray-100 h-[92vh] flex pt-10 justify-center ">
      <form action="" className="flex flex-col bg-white p-5">
        <h1 className="text-2xl font-bold my-4">Add New Department</h1>
        <label htmlFor="departmentName" className="text-lg font-semibold">
          Department Name:
        </label>
        <input
          type="text"
          className="border border-gray-300 p-2 outline-none rounded"
          id="departmentName"
          name="departmentName"
          placeholder="Department Name"
        />
        <label htmlFor="description" className="text-lg font-semibold mt-4">
          Description:
        </label>
        <textarea
          className="border border-gray-300 p-3 outline-none rounded"
          name="description"
          id="description"
          placeholder="Description"
        ></textarea>
        <button className="bg-teal-500 text-white font-semibold p-2 rounded mt-8">
          Add Department
        </button>
      </form>
    </div>
  );
};

export default AddDepartmentForm;
