import image1 from '../../public/Projects/weather.PNG';
import image2 from '../../public/Projects/clinic.PNG';
import image3 from '../../public/Projects/crud.PNG';

const projects = [
    {
        id: 1,
        title: 'Waether App',
        description: 'Real time  weather app that lets users check current weather conditions for any city',
        image: image1,
        tags: ['react', 'tailwindCSS', 'Weather API'],
        githubUrl: 'https://github.com/SylvesterFraide/weather_app'
    },

      {
        id: 1,
        title: 'Clinic Website',
        description: 'A clinic website providing essential info and services',
        image: image2,
        tags: ['react', 'tailwindCSS'],
        githubUrl: 'https://github.com/SylvesterFraide/Hospital'
    },

      {
        id: 1,
        title: 'Crud App',
        description: ' A simple CRUD (Create, Read, Update, Delete) app',
        image: image3,
        tags: ['react', 'tailwindCSS'],
        githubUrl: 'https://github.com/SylvesterFraide/EMS-learn-/tree/main/js/src/Component/CRUD_LEARN'
    },

]

export const ProjectsSection = () => {
    console.log(projects);

  return (
    <section>
      <h2>My Projects</h2>
      <p>Here are some of the projects I've worked on:</p>
      {/* Project items will go here */}
    </section>
  );
};