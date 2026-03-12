import React from "react";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import SearchIcon from "@mui/icons-material/Search";

const UserCard = ({ name, image }) => {
  return (
    <div>
      <div className="flex justify-between py-2">
        <div className="flex items-center gap-3">
          <img
            className="h-15 w-15 border-gray-300 border-5 rounded-[50px] image-cover"
            src={image}
            alt={name}
          />
          <h2>{name}</h2>
        </div>

        <button className="bg-blue-800 text-white rounded-full shadow-lg my-3 px-4">
          Follow
        </button>
      </div>
    </div>
  );
};

export default UserCard;
