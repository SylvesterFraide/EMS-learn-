import React, { useState } from "react";
import { projectsData } from "../component/ProjectsData";
import jabra9 from "../assets/Images/jabra9.jpg";
import { GoDash } from "react-icons/go";
import ProjectsItem from "../component/ProjectsItem";
import Footer from "../component/Footer";

const types = ["all", "commercial", "residential"];

const ProjectsPage = () => {
  const [activeType, setActiveType] = useState("all");

  const filterTypes = projectsData.filter((items) => activeType === 'all' || items.type === activeType, );

 console.log(filterTypes);

  return (
    <section className="w-full flex-col items-center justify-center gap-4">
      <div
        className="w-full bg-fixed h-[40vh] flex flex-col items-start justify-center"
        style={{
          backgroundImage: `url(${jabra9})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-white w-[80vw] mx-auto">
          <p className="">
            <GoDash className="inline-block mr-2 h-4" />
            <span className="text-sm capitalize">
              {" "}
              jabra gardening and landscaping solutions.{" "}
            </span>
          </p>
          <h1 className="text-6xl font-semibold">Our Projects</h1>
          <div className="mt-4 font-bold">
            Home / <span className="font-semibold">Projects</span>
          </div>
        </div>
      </div>

      <main className="w-[90vw] mx-auto">
        <div className="w-full flex-col items-center justify-center py-12">
          <h2 className="text-4xl font-bold text-center capitalize">
            Work That Speaks
          </h2>
          <p className="text-center text-xl my-6 text-gray-700 font-semibold">See how we bring outdoor visions to life, one project at a time</p>

          <div className="flex justify-center mb-10 items-center space-x-6">
            {types.map((item, key) => (
              <button
                key={key}
                onClick={() => setActiveType(item)}
                className={`py-1 px-5 rounded-full cursor-pointer font-semibold capitalize 
                    ${activeType === item ? 'bg-green-600 text-white' : 'bg-green-400/80 text-gray-800'}  `}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {filterTypes.map((project) => (
              <ProjectsItem key={project.id} project={project} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </section>
  );
};

export default ProjectsPage;
