import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LivelihoodCard = ({ title, description, icon, isSelected, onClick }) => {
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

const AlternativeLivelihood = () => {
  const [selectedSolution, setSelectedSolution] = useState(null);

  const solutions = [
    {
      id: "eco-tourism",
      title: "Eco-Tourism",
      description:
        "We nurture responsible travel experiences that protect precious landscapes and provide meaningful income streams for local families.",
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
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      id: "agri-business",
      title: "Agri-Business",
      description:
        "We help farmers evolve their traditional practices into thriving businesses by adding value to their crops and opening doors to new markets.",
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
            d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0A2.704 2.704 0 013 15.546M7 10V6a3 3 0 013-3m4 0a3 3 0 013 3v4m-7 4h8m2 4v2a1 1 0 01-1 1H9a1 1 0 01-1-1v-2"
          />
        </svg>
      ),
    },
    {
      id: "digital-skills",
      title: "Digital Skills",
      description:
        "We equip communities with essential digital knowledge and remote working abilities, connecting them to worldwide job opportunities and a brighter future.",
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
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-navy-900 via-navy-950 to-navy-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent-400/5 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-400 to-accent-600"></div>

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
              Sustainable Income
            </span> */}
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Alternative <span className="bg-gradient-to-r from-accent-400 to-accent-500 bg-clip-text text-transparent">Livelihood Solutions</span>
            </h2>
            <p className="text-xl text-navy-200 leading-relaxed">
              Creating sustainable economic opportunities that empower communities
              while preserving cultural heritage and natural resources
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center"
          >
            <img
              src="https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=1000&h=600&fit=crop&crop=center"
              alt="Empowering sustainable agriculture and alternative livelihood initiatives"
              className="rounded-2xl shadow-2xl max-w-full h-auto hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {solutions.map((solution) => (
            <LivelihoodCard
              key={solution.id}
              title={solution.title}
              description={solution.description}
              icon={solution.icon}
              isSelected={selectedSolution === solution.id}
              onClick={() => setSelectedSolution(solution.id)}
            />
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedSolution && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mt-16 text-center"
            >
              <motion.button
                className="bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-400 hover:to-accent-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-glow hover:shadow-glow-lg transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn About {solutions.find((s) => s.id === selectedSolution).title}
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default AlternativeLivelihood;
