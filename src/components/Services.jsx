import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Service categories and their details
const serviceCategories = {
  geospatial: {
    icon: "🌍",
    color: "blue",
    services: [
      {
        id: "gee-analysis",
        title: "GEE Environmental Analysis",
        description:
          "Comprehensive environmental monitoring using Google Earth Engine's powerful processing capabilities.",
        features: [
          "Satellite data processing & analysis",
          "Custom algorithm development",
          "Time-series change detection",
          "Automated reporting",
        ],
      },
      {
        id: "qgis-solutions",
        title: "QGIS Custom Solutions",
        description:
          "Tailored geospatial solutions with QGIS and Python for your specific climate challenges.",
        features: [
          "Custom plugin development",
          "Spatial analysis workflows",
          "Data visualization dashboards",
          "GIS automation scripts",
        ],
      },
      {
        id: "climate-dashboard",
        title: "Climate Monitoring Dashboard",
        description:
          "Interactive web-based dashboards for real-time climate data visualization and decision support.",
        features: [
          "Custom data visualization",
          "Multi-source data integration",
          "User access controls",
          "Automated data updates",
        ],
      },
    ],
  },
};

// Animation variants
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
    transition: { duration: 0.5 },
  },
};

const ServiceCard = ({ service, isSelected, onSelect }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ scale: 1.02, y: -5 }}
      whileTap={{ scale: 0.98 }}
      className={`bg-navy-800/50 backdrop-blur-lg p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300
        border ${isSelected ? "border-accent-400 shadow-glow" : "border-navy-600/50 hover:border-accent-400/50"}`}
      onClick={() => onSelect(service.id)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="button"
      tabIndex={0}
    >
      <div className="relative">
        {isSelected && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-2 -right-2 bg-accent-400 text-white p-2 rounded-full shadow-lg"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
            </svg>
          </motion.div>
        )}

        <h3 className="text-2xl font-bold mb-4 text-white">
          {service.title}
        </h3>
        <p className="text-navy-200 mb-6 leading-relaxed">{service.description}</p>

        <motion.ul
          className="space-y-3 text-navy-300"
          animate={{ height: isHovered ? "auto" : "auto" }}
        >
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg
                className="w-5 h-5 text-accent-400 mr-2 mt-0.5 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            height: isHovered ? "auto" : 0,
          }}
          className="mt-6 pt-4 border-t border-navy-600/50"
        >
          <div className="flex justify-between text-sm text-accent-300">
            <span> {service.duration}</span>
            <span>{service.price}</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const [selectedServices, setSelectedServices] = useState(new Set());
  const [totalEstimate, setTotalEstimate] = useState(0);

  const toggleService = (serviceId) => {
    const newSelected = new Set(selectedServices);
    if (newSelected.has(serviceId)) {
      newSelected.delete(serviceId);
    } else {
      newSelected.add(serviceId);
    }
    setSelectedServices(newSelected);
  };

  useEffect(() => {
    // Calculate total estimate based on selected services
    const baseEstimates = {
      "gee-analysis": 7500,
      "qgis-solutions": 6000,
      "climate-dashboard": 10000,
    };

    const total = Array.from(selectedServices).reduce(
      (sum, serviceId) => sum + baseEstimates[serviceId],
      0
    );
    setTotalEstimate(total);
  }, [selectedServices]);

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-navy-900 via-navy-950 to-navy-900 relative overflow-hidden"
    >
      {/* Animated background pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent-400/5 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-400 to-accent-600"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent-500/20 backdrop-blur-sm border border-accent-400/30 text-accent-300 text-sm font-semibold mb-6">
            Our Technical Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Geospatial Solutions for{" "}
            <span className="bg-gradient-to-r from-accent-400 to-accent-500 bg-clip-text text-transparent block mt-2">
              Climate Challenges
            </span>
          </h2>
          <p className="text-xl text-navy-200 max-w-2xl mx-auto leading-relaxed">
            Leveraging Google Earth Engine, QGIS, and Python to deliver
            actionable climate insights
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {serviceCategories.geospatial.services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              isSelected={selectedServices.has(service.id)}
              onSelect={toggleService}
            />
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedServices.size > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mt-12 p-8 bg-navy-800/50 backdrop-blur-lg rounded-2xl border border-accent-400/30 shadow-glow"
            >
              <p className="text-2xl text-white mb-6">
                Estimated Investment:
                <span className="font-bold ml-2 text-accent-400">
                  ${totalEstimate.toLocaleString()}
                </span>
              </p>
              <motion.button
                className="bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-400 hover:to-accent-500 text-white px-8 py-4 rounded-full font-bold transition duration-300 shadow-glow hover:shadow-glow-lg transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => (window.location.href = "#contact")}
              >
                Request Geospatial Consultation
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          {/* <p className="text-blue-100/60 mb-8">
            Need custom geospatial solutions beyond these offerings?
          </p>
          <button className="group relative px-8 py-4 bg-transparent border-2 border-blue-400 text-blue-400 rounded-full font-semibold transition duration-300 hover:bg-blue-400 hover:text-blue-900">
            Discuss Your Project Needs
            <span className="absolute right-4 top-1/2 transform -translate-y-1/2 group-hover:translate-x-2 transition-transform duration-300">
              →
            </span>
          </button> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
