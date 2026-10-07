import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../Context/useContext";
import { SidebarContext } from "../../Context/SidebarContext";

const EditDepartment = () => {
  const { department, updateDepartment } = useContext(UserContext);
  const { isOpen } = useContext(SidebarContext);
  const { id } = useParams();
  const departmentName = department.find((item) => item.id === parseInt(id));
  const [name, setName] = useState(departmentName?.name);
  const [description, setDescription] = useState(departmentName?.description);
  const navigate = useNavigate();

  useEffect(() => {
    if (departmentName) {
      setName(departmentName.name);
      setDescription(departmentName.description);
    }
  }, [departmentName]);

  const handleUpdate = (e) => {
    e.preventDefault();
    updateDepartment(departmentName.id, name, description);
    navigate("/admin-departments");
  };

  return (
    <div
      className={`bg-gray-100 min-h-screen flex pt-10 justify-center transition-all duration-300 ${isOpen ? "ml-64" : "ml-16"} pt-[10vh]`}
    >
      <form
        onSubmit={handleUpdate}
        className="flex flex-wrap flex-col bg-white p-5 h-[30rem] w-150 rounded-lg shadow-lg"
      >
        <h1 className="text-2xl font-bold mt-4">Update Department</h1>
        <div className="mt-6">
          <label htmlFor="Department" className="text-lg font-semibold">
            {" "}
            Department Name:{" "}
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 p-2 w-full outline-none rounded"
            name="name"
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
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            required
          ></textarea>
        </div>
        <button className="bg-teal-500 text-white font-semibold p-2 rounded my-12">
          UPDATE
        </button>
      </form>
    </div>
  );
};

export default EditDepartment;
