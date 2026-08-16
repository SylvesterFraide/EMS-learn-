// @refresh reset
import React from "react";
import { projectsData } from "../component/ProjectsData";
import jabra9 from "../assets/Images/jabra9.jpg";
import { GoDash } from "react-icons/go";
import ProjectsItem from "../component/ProjectsItem";
import Footer from "../component/Footer";

const Projects = () => {
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
          <h2 className="text-4xl font-semibold text-red-600">Our Projects</h2>
          <div className="flex gap-4 my-6">
            <p className="">All</p>
            <p className="">Commercial</p>
            <p className="">Residential</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {projectsData?.map(
              (
                project, // <-- fixed here
              ) => (
                <ProjectsItem key={project.id} project={project} />
              ),
            )}
          </div>
        </div>
      </main>
      <Footer />
    </section>
  );
};

export default Projects;
