import React from "react";

const ProjectsItem = ({ projects }) => {
  return (
    <>
      <div
        key={projects.id}
        className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
      >
        <div className="overflow-hidden">
          <img
            src={projects?.image}
            alt={projects.title}
            className="w-full h-48 object-cover transition duration-500 hover:scale-110"
          />
        </div>

        <div className="p-4 hover:bg-green-100/70">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-semibold mb-2">{projects.title}</h3>
            {/* <div className="flex items-center gap-2">
              <FaStar className="text-yellow-600" />
              <FaStar className="text-yellow-600 " />
              <FaStar className="text-yellow-600 " />
              <FaStar className="text-yellow-600 " />
              <FaStar className="text-yellow-300 " />
            </div> */}
          </div>
          <p className="text-gray-600">{projects.description}</p>
        </div>
      </div>
    </>
  );
};

export default ProjectsItem;
