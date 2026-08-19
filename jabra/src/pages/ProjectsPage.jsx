import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // <-- add this
import { projectsData } from "../component/ProjectsData";
import jabra9 from "../assets/projectImg/peponi.jpg";
import { GoDash } from "react-icons/go";
import ProjectsItem from "../component/ProjectsItem";
import Footer from "../component/Footer";

const types = ["all", "commercial", "residential"];

const ProjectsPage = () => {
  const [activeType, setActiveType] = useState("all");

  const filterTypes = projectsData.filter(
    (items) => activeType === "all" || items.type === activeType,
  );

  return (
    <section className="w-full flex flex-col items-center justify-center gap-4">
      {/* Hero */}
      <div
        className="w-full bg-fixed h-[40vh] flex flex-col items-start justify-center relative"
        style={{
          backgroundImage: `url(${jabra9})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Hero text with fade in */}
        <motion.div
          className="text-white w-[80vw] mx-30 absolute"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="">
            <GoDash className="inline-block mr-2 h-4" />
            <span className="text-sm capitalize">
              jabra gardening and landscaping solutions.
            </span>
          </p>
          <h1 className="text-6xl font-semibold">Our Projects</h1>
          <div className="mt-4 font-bold">
            Home / <span className="font-semibold">Projects</span>
          </div>
        </motion.div>
      </div>

      <main className="w-[90vw] mx-auto">
        <motion.div
          className="w-full flex flex-col items-center justify-center py-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 3, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center capitalize">
            Work That Speaks
          </h2>
          <p className="text-center text-xl my-6 text-gray-600 font-semibold">
            See how we bring outdoor visions to life, one project at a time
          </p>

          {/* Filter Buttons with stagger */}
          <div className="flex justify-center mb-10 items-center space-x-6">
            {types.map((item, key) => (
              <motion.button
                key={key}
                onClick={() => setActiveType(item)}
                className={`py-1 px-5 rounded-full cursor-pointer font-semibold capitalize ${
                  activeType === item
                    ? "bg-green-600 text-white"
                    : "bg-green-400/80 text-gray-800"
                }`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: key * 0.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.button>
            ))}
          </div>

          {/* Project Grid with AnimatePresence for smooth filter */}
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filterTypes.map((project, i) => (
              <motion.div
                key={project.id} // key must be on motion.div for AnimatePresence
                layout // smooth reposition when filtering
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }} // reduced delay so it doesn't feel slow
                viewport={{ once: false, amount: 0.2 }} // <-- animate every time
                whileHover={{ y: -8 }}
              >
                <ProjectsItem project={project} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </main>
      <Footer />
    </section>
  );
};

export default ProjectsPage;
