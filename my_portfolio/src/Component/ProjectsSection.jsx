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

export const ProjectsSection = () => { 
  return ( 
    <section id="projects" className="py-24 px-4 relative bg-background"> 
      <div className="container mx-auto max-w-5xl"> 
        <h2 className="text-primary mb-2 text-3xl md:text-4xl font-bold text-center"> 
          Featured <span className="text-purple-500">Projects</span> 
        </h2> 
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Here are some of the projects I've worked on. Each project was built with attention to detail, performance, and user experience 
        </p> 
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> 
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-border" 
            > 
              <div className="h-48 overflow-hidden"> 
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
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
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-primary hover:underline font-medium inline-flex items-center gap-1" 
                > 
                  View on GitHub →
                </a> 
              </div> 
            </div> 
          ))} 
        </div> 
      </div> 
    </section> 
  ); 
};