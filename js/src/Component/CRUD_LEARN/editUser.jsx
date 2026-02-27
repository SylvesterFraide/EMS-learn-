import React, { useContext, useState, useEffect } from "react";
import Button from "./Button";
import { Link, useNavigate, useParams } from "react-router-dom";
import { DataContext } from "./context/DataContext";

const EditUser = () => {
  const { data, updateUser } = useContext(DataContext);
  const { id } = useParams();
  const user = data.find((item) => item.id === parseInt(id));
  const [name, setName] = useState(user?.name);
  const [age, setAge] = useState(user?.age);
  const [gender, setGender] = useState(user?.gender);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setName(user.name);
      setAge(user.age);
      setGender(user.gender);
    }
  }, [user]);

  const handleUpdate = (e) => {
    e.preventDefault();
    updateUser(user.id, name, parseInt(age), gender);
    navigate("/");
  };

  return (
    <div className="bg-gray-200 h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl pb-8 font-bold uppercase italic text-green-700">
        {" "}
        UPDATE User{" "}
      </h1>
      <form action="" onSubmit={handleUpdate} className="space-y-4">
        <input
          className="w-full bg-white py-4 px-3 rounded-lg cursor-text shadow-md"
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Name"
          required
        />
        <input
          className="w-full bg-white py-4 px-3 rounded-lg cursor-text shadow-md"
          type="number"
          name="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Age"
          required
        />
        <input
          className="w-full bg-white py-4 px-3 rounded-lg cursor-text shadow-md "
          type="text"
          name="gender"
          value={gender}
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
