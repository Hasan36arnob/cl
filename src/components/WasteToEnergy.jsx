import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EnergyCard = ({ title, description, icon, isSelected, onClick }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.98 }}
      className={`relative p-8 rounded-3xl transition-all duration-300 cursor-pointer ${
        isSelected
          ? "bg-gradient-to-br from-accent-400/60 to-accent-500/60 border-2 border-accent-400/50 shadow-lg shadow-accent-400/10"
          : "bg-navy-800/50 border border-navy-600/50 hover:border-accent-400/50"
      }`}
      onClick={onClick}
    >
      <div className="space-y-6">
        <div className="flex justify-center">
          <div className="p-4 rounded-xl bg-gradient-to-br from-accent-400 to-accent-500 shadow-md">
            {icon}
          </div>
        </div>
        <h3 className="text-2xl font-bold text-white text-center">{title}</h3>
        <p className="text-lg text-navy-200 text-center">{description}</p>
      </div>

      {isSelected && (
        <div className="absolute -top-3 -right-3 bg-accent-400 text-white p-2 rounded-full shadow-md">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
          </svg>
        </div>
      )}
    </motion.div>
  );
};

const WasteToEnergy = () => {
  const [selectedTechnology, setSelectedTechnology] = useState(null);

  const technologies = [
    {
      id: "incineration",
      title: "Thermal Incineration",
      description:
        "High-temperature combustion process that converts municipal solid waste into electricity and heat while reducing volume by 90%.",
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
            d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
          />
        </svg>
      ),
    },
    {
      id: "gasification",
      title: "Plasma Gasification",
      description:
        "Advanced thermal process using plasma torches to convert organic waste into synthetic gas for power generation and biofuels.",
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
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
    },
    {
      id: "anaerobic",
      title: "Anaerobic Digestion",
      description:
        "Biological process that breaks down organic waste to produce biogas for electricity and nutrient-rich digestate for agriculture.",
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
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      ),
    },
  ];



  return (
    <section className="py-24 bg-gradient-to-br from-navy-900 via-navy-950 to-navy-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/pattern-grid.svg')]"></div>
      </div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-400 to-accent-600"></div>
      {/* Floating energy particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-accent-400/30 rounded-full"
            initial={{ y: -100, x: Math.random() * window.innerWidth }}
            animate={{
              y: window.innerHeight + 100,
              x: Math.random() * window.innerWidth,
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
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
            <span className="inline-block px-4 py-2 rounded-full bg-accent-400/10 text-accent-300 text-sm font-medium mb-6 self-start">
              Renewable Energy
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Waste to <span className="text-accent-400">Energy Generation</span>
            </h2>
            <p className="text-xl text-navy-200 leading-relaxed">
              Transform municipal and industrial waste into clean, renewable energy
              while significantly reducing environmental impact and landfill dependence
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center"
          >
            <img
              src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1000&h=600&fit=crop&crop=center"
              alt="Advanced waste-to-energy power generation facility"
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
          {technologies.map((technology) => (
            <EnergyCard
              key={technology.id}
              title={technology.title}
              description={technology.description}
              icon={technology.icon}
              isSelected={selectedTechnology === technology.id}
              onClick={() => setSelectedTechnology(technology.id)}
            />
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedTechnology && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="text-center"
            >
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Ready to implement {technologies.find((t) => t.id === selectedTechnology).title}?
                </h3>
                <p className="text-lg text-navy-200 max-w-2xl mx-auto">
                  Our experts will help you assess feasibility, design the system, and secure funding for your waste-to-energy project.
                </p>
              </div>
              <button className="bg-gradient-to-r from-accent-400 to-accent-500 hover:from-accent-300 hover:to-accent-400 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-accent-400/30 transform hover:scale-105">
                Start Your Energy Project
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default WasteToEnergy;
