import { Briefcase, Code, User } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Code,
    title: "Web Development",
    description: "Creating responsive websites and web applications with React, Tailwind, and modern frameworks"
  },
  {
    icon: User,
    title: "UI/UX Design", 
    description: "Designing intuitive user interfaces and experiences that delight users and drive engagement."
  },
  {
    icon: Briefcase,
    title: "Project Management",
    description: "Overseeing projects from conception to completion, ensuring they are delivered on time."
  }
];

export const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl uppercase text-primary font-bold mb-12 text-center"
        >
          About <span className="text-purple-500">Me</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold">
              Passionate <span className="italic text-purple-500">Frontend Developer</span> and{" "}
              <span className="italic text-purple-500">UI/UX Designer</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm a Frontend Developer passionate about building fast, responsive, and beautiful web experiences. 
              I specialize in React, Tailwind CSS, and modern JavaScript to turn designs into clean, accessible, 
              and performant code. 
              <br /><br />
              I enjoy solving real problems with code from crafting smooth UI animations with Framer Motion 
              to connecting APIs and optimizing user flows. Every project I build focuses on 3 things: 
              usability, performance, and attention to detail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a 
                href="/Resume.pdf"
                download="Resume.pdf" 
                className="cosmic-button bg-transparent border border-primary text-primary hover:bg-primary/10"
              >
                Download Resume
              </a>
            </div>
          </motion.div>

          {/* Right Side - Cards */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div 
                key={feature.title}
                whileHover={{ y: -5 }}
                className="gradient-border p-6 card-hover"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10 shrink-0">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg mb-1">{feature.title}</h4>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};