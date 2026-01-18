import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EdTechCard = ({ title, description, icon, isSelected, onClick }) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`relative p-8 rounded-3xl transition-all duration-300 cursor-pointer backdrop-blur-sm ${
        isSelected
          ? "bg-gradient-to-br from-accent-500/20 to-accent-600/20 border-2 border-accent-400/50 shadow-glow shadow-accent-400/20"
          : "bg-navy-800/50 border border-navy-600/50 hover:border-accent-400/30 hover:bg-navy-700/50"
      }`}
      onClick={onClick}
    >
      <div className="space-y-6">
        <div className="flex justify-center">
          <div className="p-4 rounded-xl bg-gradient-to-br from-accent-400 to-accent-600 shadow-lg shadow-accent-400/30">
            {icon}
          </div>
        </div>
        <h3 className="text-2xl font-bold text-white text-center">{title}</h3>
        <p className="text-lg text-navy-200 text-center leading-relaxed">{description}</p>
      </div>

      {isSelected && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute -top-3 -right-3 bg-accent-400 text-navy-900 p-2 rounded-full shadow-lg shadow-accent-400/50"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
          </svg>
        </motion.div>
      )}
    </motion.div>
  );
};

const EducationAndIT = () => {
  const [selectedSolution, setSelectedSolution] = useState(null);

  const solutions = [
    {
      id: "digital-classrooms",
      title: "Digital Classrooms",
      description:
        "We reimagine classrooms as vibrant digital hubs where interactive technologies and collaborative platforms bring learning to life for every student.",
      icon: (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      id: "coding-academy",
      title: "Coding Academy",
      description:
        "We guide aspiring coders through immersive programming journeys and intensive bootcamps that unlock the digital economy's endless possibilities.",
      icon: (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
    },
    {
      id: "stem-labs",
      title: "STEM Labs",
      description:
        "We create wonder-filled spaces where robotics dance, 3D printers build dreams, and AI sparks curiosity, nurturing the innovators of tomorrow through hands-on discovery.",
      icon: (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
    },
  ];



  const features = [
    "Cloud based teaching and learning platform",
    "Online certification programs",
    "Virtual training sessions"
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-navy-900 via-navy-950 to-navy-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-400/5 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-400 to-accent-600"></div>
      {/* Animated binary code background */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-accent-400 font-mono text-sm"
            initial={{ y: -50, x: Math.random() * window.innerWidth }}
            animate={{
              y: window.innerHeight + 50,
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          >
            {Math.random().toString(2).substring(2, 10)}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-5 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20"
        >
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            {/* <span className="inline-block px-4 py-2 rounded-full bg-accent-500/20 backdrop-blur-sm border border-accent-400/30 text-accent-300 text-sm font-medium mb-6 self-start">
              EdTech Innovation
            </span> */}
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Education <span className="bg-gradient-to-r from-accent-400 to-accent-500 bg-clip-text text-transparent"> & Information Technology</span>
            </h2>
            <p className="text-xl text-navy-200 leading-relaxed">
              Bridging the digital divide through cutting-edge educational technology
              that prepares students for success in the 21st-century digital landscape
            </p>

            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ staggerChildren: 0.1, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mt-8"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center p-4 bg-navy-800/50 rounded-lg backdrop-blur-sm border border-navy-600/50 hover:border-accent-400/30"
                >
                  <svg className="w-5 h-5 text-accent-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  <span className="text-sm text-navy-200 font-medium">{feature}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center"
          >
            <img
              src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=1000&h=600&fit=crop&crop=center"
              alt="Dynamic collaborative technology innovation and advanced coding environments"
              className="rounded-2xl shadow-2xl max-w-full h-auto hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {solutions.map((solution) => (
            <EdTechCard
              key={solution.id}
              title={solution.title}
              description={solution.description}
              icon={solution.icon}
              isSelected={selectedSolution === solution.id}
              onClick={() => setSelectedSolution(solution.id)}
            />
          ))}
        </motion.div>



        {/* Partnership CTA */}
        {!selectedSolution && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mt-12"
          >
        
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default EducationAndIT;
