import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const Add = () => {
  return (
    <div className="bg-gray-200 h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl pb-8  font-bold uppercase italic">Create New User </h1>
      <form action="" className="space-y-4">
        <input className="w-full bg-white" type="text" name="name" placeholder="Enter Name" required />
        <input className="w-full bg-white" type="text" name="age" placeholder="Age" required />
        <input className="w-full bg-white" type="text" name="gender" placeholder="Gender" required />
        <div className="flex justify-between">
          <Button value="ADD" />
          <Link to="/">
            <Button value="BACK" />
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Add;
