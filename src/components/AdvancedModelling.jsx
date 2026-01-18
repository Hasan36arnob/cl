import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ModellingCard = ({ items, isSelected, onClick }) => {
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
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="flex items-start">
            <svg
              className="w-5 h-5 text-accent-400 mt-0.5 mr-3 flex-shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 13l4 4L19 7" />
            </svg>
            <p className="text-lg text-navy-200">{item}</p>
          </div>
        ))}
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

const AdvancedModelling = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const modellingServices = [
    {
      id: "hydrological",
      title: "Hydrological Modelling",
      items: [
        "River & Flood Modelling",
        "Rainfall-Runoff Modelling",
        "Drainage Modelling",
      ],
    },
    {
      id: "environmental",
      title: "Environmental Modelling",
      items: [
        "Fire Hazard Modelling",
        "Drought Modelling",
        "GCM climate model downscaling ",
      ],
    },
    {
      id: "land-use",
      title: "Land Use & Crop Modelling",
      items: [
        "Irrigation and drainage modelling",
        "Land use land cover modelling",
        "Crop Modelling",
      ],
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-navy-900 via-navy-950 to-navy-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/pattern-grid.svg')]"></div>
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
            {/* <span className="inline-block px-4 py-2 rounded-full bg-accent-400/10 text-accent-300 text-sm font-medium mb-6 self-start">Advanced Modelling Services</span> */}
            <h2 className="text-4xl md:text-5xl font-bold text-navy-100 mb-4">
              Advanced <span className="text-accent-400">Modelling</span>{" "}
              Services
            </h2>
            <p className="text-xl text-navy-300 leading-relaxed">
              Data-driven environmental modeling for informed decision-making
            </p>
          </motion.div>Digital Transformation

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center"
          >
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&h=600&fit=crop&crop=center"
              alt="Advanced environmental data modeling and analytics"
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
          {modellingServices.map((service) => (
            <ModellingCard
              key={service.id}
              items={service.items}
              isSelected={selectedCard === service.id}
              onClick={() => setSelectedCard(service.id)}
            />
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedCard && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mt-16 text-center"
            >
              <button className="bg-gradient-to-r from-accent-400 to-accent-500 hover:from-accent-300 hover:to-accent-400 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-accent-400/30">
                Get {modellingServices.find((s) => s.id === selectedCard).title}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default AdvancedModelling;
