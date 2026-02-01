import React from "react";

const AdmnDashboardCards = ({ text, value, image, color }) => {
  return (
    <div className="bg-white flex items-center gap-4 rounded-lg shadow">
      <p className={`flex items-center justify-center ${color} text-white text-2xl py-7 px-4 rou rounded-lg`}>{image}</p>
      <div className="text-xl">
        <p>{text}</p>
        <p className="font-bold">{value}</p>
      </div>
    </div>
  );
};

export default AdmnDashboardCards;