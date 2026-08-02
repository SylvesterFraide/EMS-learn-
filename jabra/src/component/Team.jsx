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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        <div className="group relative sm:w-64 w-full overflow-hidden rounded-md">
          <div className="overflow-hidden">
            <img
              src={Jabra2}
              alt="Team Member"
              className="w-full h-80 object-cover transition duration-500 hover:scale-110"
            />
          </div>

          <div
            className="absolute bottom-0 left-0 right-0 p-4 
                  bg-gradient-to-t from-black/70 to-transparent
                  translate-y-full group-hover:translate-y-0 
                  transition-transform duration-300"
          >
            <p className="text-center text-md font-medium text-white">
              Team Member 1
            </p>
          </div>
        </div>
        <div className="group relative sm:w-64 w-full overflow-hidden rounded-md">
              <div className="overflow-hidden">
            <img
              src={Jabra2}
              alt="Team Member"
              className="w-full h-80 object-cover transition duration-500 hover:scale-110"
            />
          </div>

          <div
            className="absolute bottom-0 left-0 right-0 p-4 
                  bg-gradient-to-t from-black/70 to-transparent
                  translate-y-full group-hover:translate-y-0 
                  transition-transform duration-300"
          >
            <p className="text-center text-md font-medium text-white">
              Team Member 1
            </p>
          </div>
        </div>
        <div className="group relative sm:w-64 w-full overflow-hidden rounded-md">
              <div className="overflow-hidden">
            <img
              src={Jabra2}
              alt="Team Member"
              className="w-full h-80 object-cover transition duration-500 hover:scale-110"
            />
          </div>

          <div
            className="absolute bottom-0 left-0 right-0 p-4 
                  bg-gradient-to-t from-black/70 to-transparent
                  translate-y-full group-hover:translate-y-0 
                  transition-transform duration-300"
          >
            <p className="text-center text-md font-medium text-white">
              Team Member 3
            </p>
          </div>
        </div>
        <div className="group relative sm:w-64 w-full overflow-hidden rounded-md">
             <div className="overflow-hidden">
            <img
              src={Jabra2}
              alt="Team Member"
              className="w-full h-80 object-cover transition duration-500 hover:scale-110"
            />
          </div>

          <div
            className="absolute bottom-0 left-0 right-0 p-4 
                  bg-gradient-to-t from-black/70 to-transparent
                  translate-y-full group-hover:translate-y-0 
                  transition-transform duration-300"
          >
            <p className="text-center text-md font-medium text-white">
              Team Member 4
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-2 mt-2">
        <div className="group relative overflow-hidden rounded-md">
          <div className="overflow-hidden">
            <img
              src={Jabra2}
              alt="Team Member"
              className="w-135.5 h-80 object-cover transition duration-500 hover:scale-110"
            />
          </div>

          <div
            className="absolute bottom-0 left-0 right-0 p-4 
                  bg-gradient-to-t from-green-800/70 to-transparent
                  translate-y-full group-hover:translate-y-0 
                  transition-transform duration-300"
          >
            <p className="text-center text-md font-medium text-white">
              Team Member 3
            </p>
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-md">
          <div className="overflow-hidden">
            <img
              src={Jabra2}
              alt="Team Member"
              className="w-135.5 h-80 object-cover transition duration-500 hover:scale-110"
            />
          </div>

          <div
            className="absolute bottom-0 left-0 right-0 p-4 
                  bg-gradient-to-t from-green-800/70 to-transparent
                  translate-y-full group-hover:translate-y-0 
                  transition-transform duration-300"
          >
            <p className="text-center text-md font-medium text-white">
              Team Member 3
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
