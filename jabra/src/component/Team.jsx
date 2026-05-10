import React from "react";
import Jabra2 from "../assets/Images/jabra2.jpg";

const Team = () => {
  return (
    <div className="">
      <h2 className="text-center text-2xl capitalize font-bold text-green-800">
        meet our team
      </h2>
      <p className="text-center text-md my-4 text-gray-800">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit,
        laudantium fugiat ex maxime beatae in aliquam, voluptas eligendi
        debitis, tenetur facilis hic corporis illum corrupti excepturi
        necessitatibus ratione a ipsam!
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        <img src={Jabra2} alt="" className="rounded-md" />
        <img src={Jabra2} alt="" className="rounded-md" />
        <img src={Jabra2} alt="" className="rounded-md" />
        <img src={Jabra2} alt="" className="rounded-md" />
      </div>
      <div className="flex flex-col md:flex-row gap-2 mt-2">
        <img src={Jabra2} alt="" className="rounded-md w-135.5 h-80" />
        <img src={Jabra2} alt="" className="rounded-md  w-135.5 h-80" />
      </div>
    </div>
  );
};

export default Team;
