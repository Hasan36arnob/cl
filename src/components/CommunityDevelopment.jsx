import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CommunityCard = ({ title, description, icon, isSelected, onClick }) => {
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

const CommunityDevelopment = () => {
  const [selectedInitiative, setSelectedInitiative] = useState(null);

  const initiatives = [
    {
      id: "youth-programs",
      title: "Youth Programs",
      description:
        "We ignite young minds with cutting-edge mentorship programs, innovative education initiatives, and transformative skill-building workshops that shape tomorrow's leaders.",
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
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
          />
        </svg>
      ),
    },
    {
      id: "local-business",
      title: "Local Business Support",
      description:
        "We champion entrepreneurial dreams by providing tailored funding, strategic guidance, and networking opportunities that turn local visions into thriving enterprises.",
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
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
    },
    {
      id: "public-spaces",
      title: "Urban Spaces",
      description:
        "We transform concrete jungles into welcoming havens by designing inclusive parks, vibrant community hubs, and shared spaces that foster connection and belonging.",
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
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-navy-900 via-navy-950 to-navy-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent-400/5 rounded-full blur-3xl"></div>
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
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center"
          >
            <img
              src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1000&h=600&fit=crop&crop=center"
              alt="Diverse community hands united in sustainable development collaboration"
              className="rounded-2xl shadow-2xl max-w-full h-auto hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            {/* <span className="inline-block px-4 py-2 rounded-full bg-accent-500/20 backdrop-blur-sm border border-accent-400/30 text-accent-300 text-sm font-medium mb-6 self-start">
              Community Engagement
            </span> */}
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Building <span className="bg-gradient-to-r from-accent-400 to-accent-500 bg-clip-text text-transparent">Stronger Communities</span>
            </h2>
            <p className="text-xl text-navy-200 leading-relaxed">
              Creating sustainable, inclusive communities through collaborative
              initiatives and grassroots development programs
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {initiatives.map((initiative) => (
            <CommunityCard
              key={initiative.id}
              title={initiative.title}
              description={initiative.description}
              icon={initiative.icon}
              isSelected={selectedInitiative === initiative.id}
              onClick={() => setSelectedInitiative(initiative.id)}
            />
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedInitiative && (
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
                Get Involved in{" "}
                {initiatives.find((s) => s.id === selectedInitiative).title}
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CommunityDevelopment;
