import React, { useContext, useEffect } from "react";
import { DataContext } from "./context/DataContext";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import Button from "./Button";

const ViewUser = () => {
  const { data } = useContext(DataContext);
  const { id } = useParams();
  const user = data.find((item) => item.id === parseInt(id));
  const [name, setName] = useState(user?.name);
  const [age, setAge] = useState(user?.age);
  const [gender, setGender] = useState(user?.gender);
  //   const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setName(user.name);
      setAge(user.age);
      setGender(user.gender);
    }
  }, [user]);

  const handleUpdate = (e) => {
    e.preventDefault();
    // updateUser(user.id, name, parseInt(age), gender);
    // navigate("/");
  };
  return (
    <div className="bg-gray-200 h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl pb-8 font-bold uppercase italic text-green-700">
        {" "}
        UPDATE User{" "}
      </h1>
      <form
        action=""
        onSubmit={handleUpdate}
        className="bg-white p-6 text-center rounded-lg shadow-md"
      >
        <label htmlFor="name" className="block mr-22 text-2xl uppercase font-bold font-medium text-gray-700">
          Name:
        </label>
        <input
          className="w-full text-center text-green-700 py-4 text-2xl px-3 rounded-lg cursor-text"
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Name"
          required
        />
        <label htmlFor="age" className="block  mr-22 text-2xl uppercase font-bold font-medium text-gray-700">
          Age:
        </label>
        <input
          className="w-full text-center text-green-700 py-4 text-2xl px-3 rounded-lg cursor-text"
          type="number"
          name="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Age"
          required
        />
        <label htmlFor="gender" className="block mr-22 text-2xl uppercase font-bold font-medium text-gray-700">
          Gender:
        </label>
        <input
          className="w-full text-center text-green-700 py-4 text-2xl px-3 rounded-lg cursor-text"
          type="text"
          name="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          placeholder="Gender"
          required
        />
        <div className="flex justify-between ">
          <Link to="/">
            <Button value="BACK" />
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ViewUser;
