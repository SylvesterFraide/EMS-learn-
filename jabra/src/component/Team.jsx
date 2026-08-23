import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Jabra2 from "../assets/Images/jabra2.jpg";

const teamMembers = [
  { id: 1, name: "Team Member 1" },
  { id: 2, name: "Team Member 2" },
  { id: 3, name: "Team Member 3" },
  { id: 4, name: "Team Member 4" },
  { id: 5, name: "Team Member 5" },
  { id: 6, name: "Team Member 6" },
];

const TeamCard = ({ member, isGreen = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const bgColor = isGreen ? "from-green-800/70" : "from-black/70";

  return (
    <div
      className="group relative w-full overflow-hidden rounded-md cursor-pointer"
      onClick={() => setIsOpen(!isOpen)} // Tap works on mobile
    >
      <div className="overflow-hidden">
        <motion.img
          src={Jabra2}
          alt={member.name}
          className="w-full h-80 object-cover transition duration-500 group-hover:scale-110" //group-hover for desktop
        />
      </div>

      <AnimatePresence>
        {isOpen && ( //Mobile: show when tapped
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.3 }}
            className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t ${bgColor} to-transparent md:hidden`}
          >
            <p className="text-center text-md font-medium text-white">
              {member.name}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Hover Overlay */}
      <div
        className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t ${bgColor} to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 hidden md:block`}
      >
        <p className="text-center text-md font-medium text-white">
          {member.name}
        </p>
      </div>
    </div>
  );
};

const Team = () => {
  return (
    <div className="px-4 py-12">
      <h2 className="text-center text-2xl capitalize font-bold text-green-800">
        meet our team
      </h2>
      <p className="text-center text-md my-4 text-gray-800 max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit,
        laudantium fugiat ex maxime beatae in aliquam.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {teamMembers.slice(0, 4).map((member) => (
          <TeamCard key={member.id} member={member} isGreen={false} />
        ))}
      </div>

      <div className="flex flex-col md:flex-row gap-4 mt-4">
        {teamMembers.slice(4, 6).map((member) => (
          <TeamCard key={member.id} member={member} isGreen={true} />
        ))}
      </div>
    </div>
  );
};

export default Team;
