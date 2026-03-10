import React from "react";
import { useContext } from "react";
import { userContext } from "../Context/userContect";
import UserCard from "./userCard";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SearchIcon from "@mui/icons-material/Search";

const Home = () => {
  const { Data } = useContext(userContext);
  return (
    <div className="flex flex-col h-screen justify-center items-center bg-blue-500">
      <div className="bg-gradient-to-l  from-blue-600 to-blue-800 w-1/3 px-10">
        <div className="text-white flex items-center gap-6 py-2 px-3">
          <ArrowBackIcon />
          <h2 className="text-2xl font-bold">Find Friends</h2>
        </div>
        <form action="" className="">
          <SearchIcon className="text-white bg-blue-500" />
          <input
            type="text"
            name="search"
            className="outline-none bg-blue-500 py-2 px-4 rounded-md mb-4"
            placeholder="Enter a friend's name"
          />
        </form>
      </div>
      <div className="w-1/3 bg-white px-10 py-5">
        {Data.map((item) => (
          <UserCard key={item.id} name={item.name} image={item.image} />
        ))}
      </div>
    </div>
  );
};

export default Home;
