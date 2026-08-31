import { motion } from "framer-motion";
import image1 from "/Projects/weather.PNG"; 
import image2 from "/Projects/clinic.PNG"; 
import image3 from "/Projects/crud.PNG"; 
import image4 from "/Projects/jabra.PNG"; 

const projects = [
  { 
    id: 1, 
    title: "Weather App", 
    description: "Real time weather app that lets users check current weather conditions for any city", 
    image: image1, 
    tags: ["react", "tailwindCSS", "Weather API"], 
    githubUrl: "https://github.com/SylvesterFraide/weather_app", 
  },
  { 
    id: 2, 
    title: "Clinic Website", 
    description: "A clinic website providing essential info and services", 
    image: image2, 
    tags: ["react", "tailwindCSS"], 
    githubUrl: "https://github.com/SylvesterFraide/Hospital", 
  },
  { 
    id: 3, 
    title: "CRUD App", 
    description: "A simple CRUD (Create, Read, Update, Delete) app", 
    image: image3, 
    tags: ["react", "tailwindCSS"], 
    githubUrl: "https://github.com/SylvesterFraide/EMS-learn-/tree/main/js/src/Component/CRUD_LEARN", 
  },
  { 
    id: 4, 
    title: "Landscaping Website", 
    description: "A landscaping website showcasing various gardening services", 
    image: image4, 
    tags: ["react", "tailwindCSS", "framer motion"], 
    githubUrl: "https://jabra-nine.vercel.app/", 
  },
]; 

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2 // each card delays 0.2s
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export const ProjectsSection = () => { 
  return ( 
    <section id="projects" className="py-24 px-4 relative bg-background"> 
      <div className="container mx-auto max-w-5xl"> 
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-primary mb-2 text-3xl md:text-4xl font-bold text-center" 
        > 
          Featured <span className="text-purple-500">Projects</span> 
        </motion.h2> 

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-muted-foreground max-w-2xl mx-auto mb-12"
        >
          Here are some of the projects I've worked on. Each project was built with attention to detail, performance, and user experience 
        </motion.p> 
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" 
        > 
          {projects.map((project) => ( 
            <motion.div 
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }} // lift on hover
              className="group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-border" 
            > 
              <div className="h-48 overflow-hidden"> 
                <motion.img 
                  whileHover={{ scale: 1.1 }} // image zoom
                  transition={{ duration: 0.5 }}
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover" 
                /> 
              </div> 
              <div className="p-5"> 
                <div className="flex flex-wrap gap-2 mb-3"> 
                  {project.tags.map((tag) => ( 
                    <span 
                      key={tag}
                      className="px-2 py-1 text-xs font-medium rounded-full bg-purple-500/10 text-purple-600" 
                    > 
                      {tag} 
                    </span> 
                  ))} 
                </div> 
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3> 
                <p className="text-sm text-muted-foreground mb-4"> 
                  {project.description} 
                </p> 
                <motion.a 
                  whileHover={{ x: 5 }}
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-primary hover:underline font-medium inline-flex items-center gap-1" 
                > 
                  View on GitHub →
                </motion.a> 
              </div> 
            </motion.div> 
          ))} 
        </motion.div> 
      </div> 
    </section> 
  ); 
};