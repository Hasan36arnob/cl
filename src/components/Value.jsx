import React from "react";
import { motion } from "framer-motion";

function Value() {
  const valueProps = [
    {
      icon: (
        <svg
          className="w-12 h-12 text-accent-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
          />
        </svg>
      ),
      title: "Geospatial Expertise",
      description:
        "We harness the power of Google Earth Engine and QGIS to create precise maps and analyses that reveal the hidden stories of our changing environment.",
    },
    {
      icon: (
        <svg
          className="w-12 h-12 text-accent-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
      title: "Climate Data Science",
      description:
        "We weave Python's analytical magic to transform satellite whispers into clear climate stories that guide meaningful action.",
    },
    {
      icon: (
        <svg
          className="w-12 h-12 text-accent-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
          />
        </svg>
      ),
      title: "Scalable Solutions",
      description:
        "We build flexible geospatial companions that evolve alongside your climate monitoring journey, adapting to every twist and turn.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div id="value">
      <section className="py-24 bg-gradient-to-br from-navy-900 via-navy-950 to-navy-900 relative overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-400/5 rounded-full blur-3xl animate-pulse-slow"></div>
        </div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-400 to-accent-600"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                src="https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=1000&h=600&fit=crop&crop=center"
                alt="Advanced climate data visualization and geospatial analysis"
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
              {/* <span className="inline-block px-4 py-2 rounded-full bg-accent-500/20 backdrop-blur-sm border border-accent-400/30 text-accent-300 text-sm font-semibold mb-6 self-start">
                Our Technical Value
              </span> */}
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                Climate Insights Powered by{" "}
                <span className="bg-gradient-to-r from-accent-400 to-accent-500 bg-clip-text text-transparent">
                  Innovation
                </span>
              </h2>
              <p className="text-xl text-navy-200 leading-relaxed">
                We transform satellite data into actionable intelligence using
                Google Earth Engine, QGIS, and Python to drive your climate
                solutions forward.
              </p>
            </motion.div>
          </motion.div>

          {/* Value Props Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
          >
            {valueProps.map((prop, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-navy-800/50 backdrop-blur-lg rounded-2xl p-8 border border-navy-600/50 hover:border-accent-400/50 transition-all duration-300 hover:shadow-glow"
              >
                <div className="bg-accent-500/20 rounded-xl p-3 inline-block mb-6">
                  {prop.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {prop.title}
                </h3>
                <p className="text-navy-200 leading-relaxed">{prop.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Section - Optional for later */}
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-green-300 mb-2">100+</div>
              <div className="text-green-100/70">GEE Scripts Developed</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-green-300 mb-2">50+</div>
              <div className="text-green-100/70">QGIS Projects</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-green-300 mb-2">10TB+</div>
              <div className="text-green-100/70">Satellite Data Processed</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-green-300 mb-2">24/7</div>
              <div className="text-green-100/70">Monitoring Capabilities</div>
            </div>
          </div> */}

          {/* CTA Section */}
          {/* <div className="mt-20 text-center">
            <button className="px-8 py-4 bg-green-500 hover:bg-green-400 text-green-900 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25">
              Explore Our Geospatial Solutions
            </button>
            <p className="mt-4 text-green-100/60 text-lg">
              Trusted by environmental organizations and climate-focused
              enterprises
            </p>
          </div> */}
        </div>
      </section>
    </div>
  );
}

export default Value;
