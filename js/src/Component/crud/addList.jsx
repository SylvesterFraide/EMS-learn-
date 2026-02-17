import React from "react";

const AddList = ({ setList, name, price, id }) => {
  return (
    <div>
      <form className="w-full flex space-x-2">
        <input
          className="border border-gray-300 px-2 py-2 rounded w-full outline-none"
          type="text"
          name="name"
          placeholder="Name"
        />
        <input
          className="border border-gray-300 px-2 py-2 rounded w-full outline-none"
          type="number"
          name="price"
          placeholder="Price"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddList;
