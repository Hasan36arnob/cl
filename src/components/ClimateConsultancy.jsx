import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ServiceCard = ({ service, isSelected, onSelect, color }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`bg-navy-800/50 p-6 rounded-xl border ${
        isSelected ? `border-accent-400` : `border-accent-400/20`
      }`}
      onClick={() => onSelect(service.id)}
    >
      <h3 className="text-xl font-bold mb-3 text-navy-100">
        {service.title}
      </h3>
      <p className="text-navy-200 mb-4">{service.description}</p>

      <ul className="space-y-2 text-navy-300 text-sm">
        {service.features.map((feature, i) => (
          <li key={i} className="flex items-start">
            <span className="text-accent-400 mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const ClimateConsultancy = () => {
  const [selectedServices, setSelectedServices] = useState(new Set());

  const services = [
    {
      id: "climate-risk",
      title: "Climate Risk Assessment",
      description: "Identify vulnerabilities to climate impacts",
      features: [
        "Hazard mapping",
        "Vulnerability analysis",
        "Adaptation planning",
      ],
    },
    {
      id: "adaptation-strategy",
      title: "Adaptation Strategy",
      description: "Develop resilience roadmaps",
      features: [
        "Policy alignment",
        "Stakeholder engagement",
        "Implementation plans",
      ],
    },
    {
      id: "green-infrastructure",
      title: "Green Infrastructure Design",
      description: "Nature-based solution design",
      features: [
        "Urban cooling",
        "Stormwater management",
        "Biodiversity integration",
      ],
    },
  ];

  const toggleService = (id) => {
    const newSelected = new Set(selectedServices);
    newSelected.has(id) ? newSelected.delete(id) : newSelected.add(id);
    setSelectedServices(newSelected);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-navy-900 via-navy-950 to-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/pattern.png')]"></div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16"
        >
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center"
          >
            <img
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1000&h=600&fit=crop&crop=center"
              alt="Strategic climate resilience planning and consultancy"
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
            <h2 className="text-4xl font-bold text-navy-100 mb-4">
             Strategic planning and policy allignment
            </h2>
            <p className="text-xl text-navy-300 leading-relaxed">
              Building resilience through strategic planning
            </p>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              isSelected={selectedServices.has(service.id)}
              onSelect={toggleService}
              color="accent"
            />
          ))}
        </div>

        <AnimatePresence>
          {selectedServices.size > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-12 p-6 bg-navy-800/50 backdrop-blur-lg rounded-xl border border-accent-400/20 text-center"
            >
              <button className="bg-accent-400 hover:bg-accent-300 text-white px-6 py-3 rounded-full font-medium">
                Discuss Your Climate Needs
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ClimateConsultancy;
