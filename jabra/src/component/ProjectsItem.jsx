import React from "react";

const ProjectsItem = ({ project }) => {
  // Don't render if data isn't ready yet
  if (!project) return null;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer">
      <div className="overflow-hidden">
        <img
          src={project?.image}
          alt={project.title}
          className="w-full h-48 object-cover transition duration-500 hover:scale-110"
        />
      </div>
      <div className="p-4 hover:bg-green-100/70">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        </div>
        <p className="text-gray-600">{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectsItem;