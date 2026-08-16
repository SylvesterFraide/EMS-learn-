import React from "react";
import { projectsData } from "../component/ProjectsData";
import jabra9 from "../assets/Images/jabra9.jpg";
import { GoDash } from "react-icons/go";
// import ProductItem from "../component/ProductItem";
import ProjectsItem from "../component/ProjectsItem";
import Footer from "../component/Footer";

const Projects = () => {

  console.log(projectsData)
  return (
    <section className="w-full flex flex-col items-center justify-center gap-4">
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
              jabra gardening and landscaping solutions.
            </span>
          </p>
          <h1 className="text-6xl font-semibold"> Our Projects</h1>
          <div className="mt-4 font-bold">
            Home / <span className="font-semibold">Projects</span>{" "}
          </div>
        </div>
      </div>

      <main className="w-[90vw] mx-auto">
        <div className="w-full flex flex-col items-center justify-center py-12">
          <h2 className="text-4xl font-semibold text-red-600">Our Projects</h2>
          <p className="text-center w-[60vw] mx-auto my-6 uppercase">
            At Jabra Landscaping and Design, we create beautiful, functional
            outdoor spaces through professional landscaping, garden design, lawn
            care, and maintenance services. Our team is dedicated to delivering
            customized solutions that enhance the beauty and value of your
            property.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {projectsData?.map((Projects) => (
              <ProjectsItem key={Projects.id} projects={Projects} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </section>
  );
};

export default Projects;
