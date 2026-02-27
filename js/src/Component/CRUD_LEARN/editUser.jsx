import React, { useContext, useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { DataContext } from "./context/DataContext";

const EditUser = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  const { updateUser } = useContext(DataContext);

  const handleUpdate = (e) => {
    e.preventDefault();
    updateUser({ id, name, age, gender });
  };

  return (
    <div className="bg-gray-200 h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl pb-8  font-bold uppercase italic text-green-700">
        UPDATE User
      </h1>
      <form action="" onSubmit={handleUpdate} className="space-y-4">
        <input
          className="w-full bg-white py-4 px-3 rounded-lg cursor-text shadow-md"
          type="number"
          name="id"
          onChange={(e) => setId(e.target.value)}
          placeholder="Enter ID"
          required
        />

        <input
          className="w-full bg-white py-4 px-3 rounded-lg cursor-text shadow-md"
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Name"
          required
        />
        <input
          className="w-full bg-white py-4 px-3 rounded-lg cursor-text shadow-md"
          type="number"
          name="age"
          onChange={(e) => setAge(e.target.value)}
          placeholder="Age"
          required
        />
        <input
          className="w-full bg-white py-4 px-3 rounded-lg cursor-text shadow-md "
          type="text"
          name="gender"
          onChange={(e) => setGender(e.target.value)}
          placeholder="Gender"
          required
        />
        <div className="flex justify-between ">
          <Button value="UPDATE" />
          <Link to="/">
            <Button value="BACK" />
          </Link>
        </div>
      </form>
    </div>
  );
};

export default EditUser;
