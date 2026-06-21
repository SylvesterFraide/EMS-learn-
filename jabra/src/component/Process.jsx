import React from "react";
import conversation from '../assets/icons/conversation.png';
import drawing from '../assets/icons/blueprint.png';
import pot from '../assets/icons/pot.png';
import watering from '../assets/icons/watering2.png';


const Process = () => {
  return (
    <main className="w-[80vw] mx-auto mb-10 flex flex-col items-center justify-center">
      <h1 className="text-green-600 text-lg uppercase font-semibold">
        our process
      </h1>
      <h2 className="text-2xl capitalize font-bold my-4"> 
        {" "}
        simple steps to your dream garden
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-4">
        <div className="text-center">
          <p className="bg-green-600 w-10 h-10 p-2 rounded-full inline-block">
            <img src={conversation} alt="Conversation Icon" />
          </p>
          <h3 className="text-lg font-semibold my-2">
            <span>1.</span> Consultation
          </h3>
          <p className="text-base text-gray-600">
            We understand your needs and assess your space
          </p>
        </div>
        <div className="text-center">
         <p className="bg-green-600 w-10 h-10 p-2 rounded-full inline-block">
            <img src={drawing} alt="Drawing Icon" />
          </p>
          <h3 className="text-lg font-semibold my-2">
            <span>2.</span> Design
          </h3>
          <p className="text-base text-gray-600">
            Our team creates custome designs just for you.
          </p>
        </div>
        <div className="text-center">
          <p className="bg-green-600 w-10 h-10 p-2 rounded-full inline-block">
            <img src={pot} alt="Pot Icon" />
          </p>
          <h3 className="text-lg font-semibold my-2">
            <span>3.</span> Installation
          </h3>
          <p className="text-base text-gray-600">
            We bring the design to life with quality workmanship
          </p>
        </div>
        <div className="text-center">
          <p className="bg-green-600 w-10 h-10 p-2 rounded-full inline-block">
            <img src={watering} alt="Watering Icon" className="font-bold" />
          </p>
          <h3 className="text-lg font-semibold my-2">
            <span>4.</span> Maintenance
          </h3>
          <p className="text-base text-gray-600">
            We provide ongoing care to keep your garden thriving
          </p>
        </div>
      </div>
    </main>
  );
};

export default Process;
