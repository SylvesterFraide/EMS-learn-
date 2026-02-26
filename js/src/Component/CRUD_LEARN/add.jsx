import React, { useContext, useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { DataContext } from "./context/DataContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Add = () => {
  const { addUser } = useContext(DataContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value.trim();
    const age = parseFloat(e.target.age.value);
    const gender = e.target.gender.value.trim();

    addUser(name, age, gender);
    e.target.reset();

    toast.success("User added successfully!");
  };

  return (
    <div className="bg-gray-200 h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl pb-8  font-bold uppercase italic text-green-700">
        Create New User
      </h1>
      <form action="" onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full bg-white py-4 px-3 rounded-lg cursor-text shadow-md"
          type="text"
          name="name"
          placeholder="Enter Name"
          required
        />
        <input
          className="w-full bg-white py-4 px-3 rounded-lg cursor-text shadow-md"
          type="number"
          name="age"
          placeholder="Age"
          required
        />
        <input
          className="w-full bg-white py-4 px-3 rounded-lg cursor-text shadow-md "
          type="text"
          name="gender"
          placeholder="Gender"
          required
        />
        <div className="flex justify-between ">
          <Button  value="ADD" />

          <ToastContainer />
          <Link to="/">
            <Button value="BACK" />
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Add;
