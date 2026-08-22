import React from "react";
import { motion } from "framer-motion";
import conversation from '../assets/icons/conversation.png';
import drawing from '../assets/icons/blueprint.png';
import pot from '../assets/icons/pot.png';
import watering from '../assets/icons/watering2.png';

const steps = [
  { id: 1, icon: conversation, title: "Consultation", desc: "We understand your needs and assess your space" },
  { id: 2, icon: drawing, title: "Design", desc: "Our team creates custom designs just for you." },
  { id: 3, icon: pot, title: "Installation", desc: "We bring the design to life with quality workmanship" },
  { id: 4, icon: watering, title: "Maintenance", desc: "We provide ongoing care to keep your garden thriving" }
];

const Process = () => {
  return (
    <main className="w-[90vw] md:w-[80vw] mx-auto mb-20 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h1 className="text-green-600 text-lg uppercase font-semibold tracking-wider">
          Our Process
        </h1>
        <h2 className="text-3xl md:text-4xl capitalize font-bold my-4">
          Simple steps to your dream garden
        </h2>
      </motion.div>

      {/* Vertical Timeline */}
      <div className="relative max-w-3xl mx-auto">
        {/* Vertical Progress Line */}
        <div className="absolute left-10 top-0 bottom-0 w-1 bg-green-200">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="w-full h-full bg-green-600 origin-top"
          />
        </div>

        <div className="space-y-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative flex items-start gap-6"
            >
              {/* Icon Circle on the line */}
              <motion.div
                whileHover={{ scale: 1.15, rotate: 10 }}
                className="relative z-10 bg-green-600 w-20 h-20 p-4 rounded-full flex items-center justify-center shadow-lg shadow-green-600/30 flex-shrink-0"
              >
                <img src={step.icon} alt={step.title} className="w-full h-full object-contain invert" />

                {/* Step Number */}
                <div className="absolute -bottom-2 -right-2 bg-white text-green-600 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shadow-md border-2 border-green-600">
                  {step.id}
                </div>
              </motion.div>

              {/* Content Card */}
              <motion.div
                whileHover={{ x: 5 }}
                className="bg-white p-6 rounded-2xl shadow-md border border-green-100 flex-1"
              >
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  {step.title}
                </h3>
                <p className="text-base text-gray-600">
                  {step.desc}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Process;