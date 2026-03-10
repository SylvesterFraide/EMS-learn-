import React from "react";
import { useContext } from "react";
import { userContext } from "../Context/userContect";
import UserCard from "./userCard";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SearchIcon from "@mui/icons-material/Search";

const Home = () => {
  const { Data } = useContext(userContext);
  return (
    <div>
      <div className="">
        <div className="">
          <ArrowBackIcon />
          <h2>Find Friends</h2>
        </div>
        <form action="">
          <SearchIcon />
          <input
            type="text"
            name="search"
            placeholder="Enter a friend's name"
          />
        </form>
      </div>
      {Data.map((item) => (
        <UserCard key={item.id} name={item.name} image={item.image} />
      ))}
    </div>
  );
};

export default Home;
