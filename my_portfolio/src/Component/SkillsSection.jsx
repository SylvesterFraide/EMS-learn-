import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const skills = [
  //frontend 
  { name: "HTML/CSS", level: 80, category: "frontend" },
  { name: "Javascript", level: 60, category: "frontend" },
  { name: "React", level: 80, category: "frontend" },
  { name: "TypeScript", level: 10, category: "frontend" },
  { name: "Next.js", level: 30, category: "frontend" },
  { name: "Tailwind CSS", level: 65, category: "frontend" },
  //backend 
  { name: "Node.js", level: 40, category: "backend" },
  //tools 
  { name: "Git/GitHub", level: 85, category: "tools" },
  { name: "VsCode", level: 90, category: "tools" },
]; 

const categories = ["all", "frontend", "backend", "tools"];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" }
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.95,
    transition: { duration: 0.2 }
  }
};

export const SkillsSection = () => { 
  const [activeCategory, setActiveCategory] = useState("all"); 

  const filterSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory,
  ); 

  return ( 
    <section className="py-24 px-4 relative bg-secondary/30" id="skills"> 
      <div className="container mx-auto max-w-5xl "> 
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-primary" 
        > 
          My <span className="text-purple-500">Skills</span> 
        </motion.h2> 

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-3 my-12" 
        > 
          {categories.map((item) => ( 
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(item)} 
              key={item} 
              className={`py-2 px-5 rounded-full cursor-pointer capitalize transition-all duration-300 font-medium ${
                activeCategory === item 
                  ? "bg-primary text-primary-foreground shadow-md" 
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              }`} 
            > 
              {item} 
            </motion.button> 
          ))} 
        </motion.div> 

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" 
        > 
          <AnimatePresence mode="wait">
            {filterSkills.map((skill) => ( 
              <motion.div 
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout // smooth reposition when filtering
                key={skill.name} // use name not index for AnimatePresence
                className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-border" 
              > 
                <div className="text-left mb-4"> 
                  <h3 className="font-semibold text-lg">{skill.name}</h3> 
                </div> 

                <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden"> 
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: false }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                    className="bg-primary h-full rounded-full" 
                  /> 
                </div> 

                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  className="text-right mt-1" 
                > 
                  <span className="text-sm text-muted-foreground"> 
                    {skill.level}% 
                  </span> 
                </motion.div> 
              </motion.div> 
            ))} 
          </AnimatePresence>
        </motion.div> 
      </div> 
    </section> 
  ); 
};