import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const Search = ({setSearchTerm}) => {

  return (
    <div className="flex justify-center my-4">
      <form className="shadow bg-gray-100 px-6 md:w-[25rem] w-[14rem] flex items-center rounded-full">
        <input
          type="text"
          placeholder="Search for a friend..."
          className="border-none outline-none flex-1 rounded-full bg-transparent py-2"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" className="cursor-pointer ml-[-30px] bg-gray-100 rounded-full p-2">
          <SearchIcon className="text-purple-500" />
        </button>   
      </form>
    </div>
  );
};

export default Search;
