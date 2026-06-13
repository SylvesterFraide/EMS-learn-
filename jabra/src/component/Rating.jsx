import React from "react";
import quarantee from '../assets/icons/guarantee.png';
import Projects from '../assets/icons/project.png'
import reputation from '../assets/icons/reputation.png'
import satisfaction from '../assets/icons/satisfaction.png'

const Rating = () => {
  return (
    <main className="w-full h-auto bg-gray-100/80 shadow-md mb-20">
      <div className="md:w-[80vw] w-[90vw] mx-auto flex justify-between items-center gap-4 py-2">
        <div className="flex flex-row items-center gap-4">
          <img src={reputation} alt="" className="md:w-8 w-6 h-auto" />
          <div className="flex flex-col">
            <p className="font-semibold md:text-2xl text-lg">10+</p>
            <p className="md:text-base text-sm">Years of Experience</p>
          </div>
        </div>
        <div className="flex flex-row items-center gap-4">
          <img src={satisfaction} alt="" className="md:w-8 w-6 h-auto"/>
          <div className="flex flex-col">
            <p className="font-semibold md:text-2xl text-lg">50+</p>
            <p className="md:text-base text-sm">Happy Clients</p>
          </div>
        </div>
        <div className="flex flex-row items-center gap-4">
          <img src={Projects} alt="" className="md:w-8 w-6 h-auto" />
          <div className="flex flex-col">
            <p className="font-semibold md:text-2xl text-lg">80+</p>
            <p className="md:text-base text-sm">Projects Completed</p>
          </div>
        </div>
        <div className="flex flex-row items-center gap-4">
          <img src={quarantee} alt="" className="md:w-8 w-6 h-auto"/>
          <div className="flex flex-col">
            <p className="font-semibold md:text-2xl text-lg">100%</p>
            <p className="md:text-base text-sm">Satisfaction</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Rating;
