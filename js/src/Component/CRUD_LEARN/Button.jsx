import React from "react";

const Button = ({ value }) => {
  return (
    <>
      <button
        className="bg-blue-700 hover:bg-blue-500 text-2xl text-white px-4 py-2 rounded mb-4"
        type="submit"
      >
        {value}
      </button>
    </>
  );
};

export default Button;
