import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

const Search = ({ searchText }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    searchText(text);
  };

  return (
    <div className="flex justify-center my-4">
      {" "}
      <form onSubmit={handleSubmit} className="shadow bg-gray-100 px-6 sm:w-[32rem] w-full flex items-center rounded-full">
        <input
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="Search for images..."
          className="border-none outline-none flex-1 rounded-full bg-transparent py-2"
        />
        <button type="submit" className="cursor-pointer bg-gray-100 rounded-full p-2">
          <SearchIcon className="text-purple-500" />
        </button>

        {/* 
          <button
            type="submit"
            className="flex-shrink-0  bg-purple-500 hover:bg-purple-700 border-purple-500 hover:bg-purple-700 text-sm border-4 text-white py-1 py-1 px-2 rounded"
          >
            Search
          </button> */}
          
      </form>
    </div>
  );
};

export default Search;
