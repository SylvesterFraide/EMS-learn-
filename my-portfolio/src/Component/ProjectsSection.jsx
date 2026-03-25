import image1 from "/Projects/weather.PNG";
import image2 from "/Projects/clinic.PNG";
import image3 from "/Projects/crud.PNG";

const projects = [
  {
    id: 1,
    title: "Waether App",
    description:
      "Real time  weather app that lets users check current weather conditions for any city",
    image: image1,
    tags: ["react", "tailwindCSS", "Weather API"],
    githubUrl: "https://github.com/SylvesterFraide/weather_app",
  },

  {
    id: 1,
    title: "Clinic Website",
    description: "A clinic website providing essential info and services",
    image: image2,
    tags: ["react", "tailwindCSS"],
    githubUrl: "https://github.com/SylvesterFraide/Hospital",
  },

  {
    id: 1,
    title: "Crud App",
    description: " A simple CRUD (Create, Read, Update, Delete) app",
    image: image3,
    tags: ["react", "tailwindCSS"],
    githubUrl:
      "https://github.com/SylvesterFraide/EMS-learn-/tree/main/js/src/Component/CRUD_LEARN",
  },
];

export const ProjectsSection = () => {
  console.log(projects);

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-primary mb-2 text-3xl  md:text-4xl font-bold text-center">
          {" "}
          Featured <span className="text-purple-500">Projects</span>{" "}
        </h2>
        <p className="text-center text-muted-foregound max-w-2xl mx-auto mb-12">
          Here are some of the projects I've worked on. Each project was
          carefully with attention to detail, performance, and user experience
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 "
                />
              </div>

              <div className="p-4">
                <div className="flex flex-wrap gap-3 mb-2">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-200 text-gray-800 border border-primary/50">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline cursor-pointer"
                >
                  View on github
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
