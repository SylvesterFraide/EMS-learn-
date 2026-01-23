import React, { useState } from "react";

const Search = ({ searchText }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    searchText(text);
  };

  return (
    <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <div className="flex item-center border-b border-b-2 border-b-purple-500">
          <input
            onChange={(e) => setText(e.target.value)}
            type="text"
            className="appearance-none bg-transparent border-none w-full px-4"
          />
          <button
            type="submit"
            className="flex-shrink-0  bg-purple-500 hover:bg-purple-700 border-purple-500 hover:bg-purple-700 text-sm border-4 text-white py-1 py-1 px-2 rounded  "
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
