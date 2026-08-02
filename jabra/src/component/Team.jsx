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
        <div className="">
          <img src={Jabra2} alt="" className="rounded-md" />
          <p className="text-center text-md my-2 text-gray-800">
            Team Member 1
          </p>
        </div>
        <div className="">
          <img src={Jabra2} alt="" className="rounded-md" />
          <p className="text-center text-md my-2 text-gray-800">
            Team Member 2
          </p>
        </div>
        <div className="">
          <img src={Jabra2} alt="" className="rounded-md" />
          <p className="text-center text-md my-2 text-gray-800">
            Team Member 3
          </p>
        </div>
        <div className="">
          <img src={Jabra2} alt="" className="rounded-md" />
          <p className="text-center text-md my-2 text-gray-800">
            Team Member 4
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-2 mt-2">
        <div className="">
          <img src={Jabra2} alt="" className="rounded-md w-135.5 h-80" />
          <p className="text-center text-md my-2 text-gray-800">Team Member 5</p>
        </div>
        <div className="">
          <img src={Jabra2} alt="" className="rounded-md  w-135.5 h-80" />
          <p className="text-center text-md my-2 text-gray-800">Team Member 6</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
