const skills = [
    //frontend
  { name: "HTML/CSS", level: 80, category: "frontend" },
  { name: "Javascript", level: 60, category: "frontend" },
  { name: "React", level: 80, category: "frontend" },
  { name: "TypeScript", level: 10, category: "frontend" },
  { name: "Tailwind CSS", level: 65, category: "frontend" },
  //backend
  { name: "Node.js", level: 70, category: "backend" },
  { name: "Express", level: 10, category: "backend" },
  { name: "MongoDB", level: 10, category: "backend" },

  //tools
  { name: "Git/GitHub", level: 85, category: "tools" },
  { name: "Postman", level: 10, category: "tools" },
  { name: "Figma", level: 10, category: "tools" },
  { name: "VsCode", level: 90, category: "tools" }
];

export const SkillsSection = () => {
  return (
    <section className="py-24 px-4 relative bg-secondary/30" id="skills">
      <div className="container mx-auto max-w-5xl ">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">My <span>Skills</span></h2>
     

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
            <div className="bg-card p-6 rounded-lg shadow-xs card-hover " key={index}>
                <div className="text-left mb-4">
                    <h3 className="font-semibold text-lg">{skill.name}</h3>
                </div>
                <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                 <div className="bg-primary h-full rounded-full animate-lgrow_1.5s_ease-out" style={{ width: skill.level + '%' }} />
                </div>

                <div className="text-right mt-1">
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>

            </div>
            
        ))}
      </div>
       </div>
    </section>
  );
};
