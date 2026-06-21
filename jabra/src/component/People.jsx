import React from "react";
import friendly from '../assets/icons/friendly.png';
import price from '../assets/icons/price.png';
import shield from '../assets/icons/shield.png';
import users from '../assets/icons/users4.png';

const People = () => {
  return (
    <main className="w-full h-auto bg-green-100/80 my-20 py-6">
      <div className="w-[80vw] mx-auto">
        <div className="flex md:flex-row flex-col space-x-20">
          <div className="p-4">
            <h3 className="text-green-600 text-lg capitalize font-semibold my-4">
              why choose us
            </h3>
            <p className="capitalize text-2xl font-bold">
              We create beautiful <br /> outdoor experience
            </p>
          </div>
          <div className="flex-1">
            <div className="grid grid-cols-2 md:grid-cols-4 p-4 gap-8">
              <div className="flex flex-col items-center border-r border-green-300 pr-2">
                <img src={users} alt="Users Icon" className="" />
                <h4 className=" text-lg capitalize font-semibold my-4">
                  experienced team
                </h4>
                <p className="text-gray-600 text-center text-sm">
                  Skilled professionals with years of experience.
                </p>
              </div>
              <div className="flex flex-col items-center border-r border-green-300 pr-2">
                <img src={friendly} alt="Friendly Icon" />
                <h4 className=" text-lg capitalize font-semibold my-4">
                  eco-friendly
                </h4>
                <p className="text-gray-600 text-center text-sm">
                  Environmentally friendly practices and solutions.
                </p>
              </div>
              <div className="flex flex-col items-center border-r border-green-300 pr-2">
                <img src={shield} alt="Shield Icon" />
                <h4 className=" text-lg capitalize font-semibold my-4">
                  quality work
                </h4>
                <p className="text-gray-600 text-center text-sm">
                  We deliver high-quality work that exceeds expectations.
                </p>
              </div>
              <div className="flex flex-col items-center pr-2">
                <img src={price} alt="Price Icon" />
                <h4 className=" text-lg capitalize font-semibold my-4 ">
                  affordable pricing
                </h4>
                <p className="text-gray-600 text-center text-sm">
                  Competitive prices with transparent estimates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default People;
