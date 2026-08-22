import React, { useEffect, useState } from "react";
import quarantee from '../assets/icons/guarantee.png';
import Projects from '../assets/icons/project.png'
import reputation from '../assets/icons/reputation.png'
import satisfaction from '../assets/icons/satisfaction.png'

// Reusable CountUp component
const CountUp = ({ end, suffix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    const numericEnd = parseInt(end);

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      setCount(Math.floor(progress * numericEnd));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
};

const Rating = () => {
  return (
    <main className="w-[90vw] relative mx-auto h-auto bg-white bottom-13 rounded-md shadow-md">
      <div className="grid grid-cols-2 md:grid-cols-4 py-4 ml-18 gap-4">

        <div className="flex flex-row items-center gap-4">
          <img src={reputation} alt="" className="md:w-8 w-6 h-auto" />
          <div className="flex flex-col">
            <p className="font-semibold md:text-2xl text-lg">
              <CountUp end={10} suffix="+" />
            </p>
            <p className="md:text-base text-sm">Years of Experience</p>
          </div>
        </div>

        <div className="flex flex-row items-center gap-4">
          <img src={satisfaction} alt="" className="md:w-8 w-6 h-auto"/>
          <div className="flex flex-col">
            <p className="font-semibold md:text-2xl text-lg">
              <CountUp end={50} suffix="+" />
            </p>
            <p className="md:text-base text-sm">Happy Clients</p>
          </div>
        </div>

        <div className="flex flex-row items-center gap-4">
          <img src={Projects} alt="" className="md:w-8 w-6 h-auto" />
          <div className="flex flex-col">
            <p className="font-semibold md:text-2xl text-lg">
              <CountUp end={80} suffix="+" />
            </p>
            <p className="md:text-base text-sm">Projects Completed</p>
          </div>
        </div>

        <div className="flex flex-row items-center gap-4">
          <img src={quarantee} alt="" className="md:w-8 w-6 h-auto"/>
          <div className="flex flex-col">
            <p className="font-semibold md:text-2xl text-lg">
              <CountUp end={100} suffix="%" />
            </p>
            <p className="md:text-base text-sm">Satisfaction</p>
          </div>
        </div>

      </div>
    </main>
  );
};

export default Rating;