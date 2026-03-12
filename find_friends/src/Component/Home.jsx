import React, { useState } from "react";
import { useContext } from "react";
import { userContext } from "../Context/userContect";
import UserCard from "./userCard";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Search from "./Search";

const Home = () => {
  const { Data } = useContext(userContext);
  const [searchTerm, setSearchTerm] = useState('');

  console.log(searchTerm);
  return (
    <div className="flex flex-col flex-grow h-screen justify-center items-center bg-blue-500">
      <div className="bg-gradient-to-l  from-blue-600 to-blue-800 md:w-[30rem] w-[15rem] md:px-10 px-2">
        <div className="text-white flex items-center gap-6 py-2 px-3">
          <ArrowBackIcon />
          <h2 className="text-2xl font-bold">Find Friends</h2>
        </div>
        <Search setSearchTerm={setSearchTerm} />
      </div>
      <div className="bg-white md:px-10 px-2 md:py-5 py-3 md:w-[30rem] w-[15rem]">
        {Data.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase())).map((item) => (
          <UserCard key={item.id} name={item.name} image={item.image} />
        ))}
      </div>
    </div>
  );
};

export default Home;
