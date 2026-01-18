import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AwarenessCard = ({ title, description, icon, isSelected, onClick }) => {
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
        <h3 className="text-2xl font-bold text-navy-100 text-center">{title}</h3>
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

const AwarenessRaising = () => {
  const [selectedMethod, setSelectedMethod] = useState(null);

  const methods = [
    {
      id: "digital-campaigns",
      title: "Digital Campaigns",
      description:
        "We connect with hearts and minds through carefully crafted digital stories, reaching people where they live online with messages that inspire positive change.",
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
            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
          />
        </svg>
      ),
    },
    {
      id: "community-workshops",
      title: "Community Workshops",
      description:
        "We gather people together in meaningful conversations and hands-on experiences, equipping communities with the wisdom and tools needed for a greener tomorrow.",
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
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      id: "educational-materials",
      title: "Educational Materials",
      description:
        "We create beautiful, accessible learning tools that transform complex environmental ideas into simple, inspiring stories that speak to every heart and mind.",
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
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
    },
  ];



  return (
    <section className="py-24 bg-gradient-to-br from-navy-900 via-navy-950 to-navy-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/pattern-grid.svg')]"></div>
      </div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-400 to-accent-600"></div>
      {/* Floating awareness elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-accent-400/30 rounded-full"
            initial={{ 
              y: Math.random() * window.innerHeight,
              x: Math.random() * window.innerWidth 
            }}
            animate={{
              y: [null, -100, null],
              x: [null, Math.random() * 100 - 50, null],
            }}
            transition={{
              duration: Math.random() * 8 + 8,
              repeat: Infinity,
              repeatType: "reverse",
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
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center"
          >
            <img
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Community workshops and educational initiatives for environmental awareness"
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
            {/* <span className="inline-block px-4 py-2 rounded-full bg-accent-400/10 text-accent-300 text-sm font-medium mb-6 self-start">
              Urban Engagement
            </span> */}
            <h2 className="text-4xl md:text-5xl font-bold text-navy-100 mb-4">
              Awareness <span className="text-accent-400">Raising Initiatives</span>
            </h2>
            <p className="text-xl text-navy-300 leading-relaxed">
              Empowering communities through targeted education and engagement strategies
              that drive meaningful environmental action and behavioral change
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {methods.map((method) => (
            <AwarenessCard
              key={method.id}
              title={method.title}
              description={method.description}
              icon={method.icon}
              isSelected={selectedMethod === method.id}
              onClick={() => setSelectedMethod(method.id)}
            />
          ))}
        </motion.div>



        {/* Additional Call to Action */}
        {!selectedMethod && (
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

export default AwarenessRaising;
