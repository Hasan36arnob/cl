import React from "react";
import { motion } from "framer-motion";
import logoImage from "../assets/images/logo.jpeg";

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-navy-900 via-navy-950 to-navy-900 text-white py-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent-400/5 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-400 to-accent-600"></div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex items-center justify-center space-x-4 mb-6">
            <img
              src={logoImage}
              alt="WeCare for Climate Foundation Logo"
              className="h-12 w-auto rounded-lg shadow-lg"
            />
            <h3 className="text-2xl font-bold text-white">Climate Tech and Green Solutions</h3>
          </div>
          <div className="space-y-2 text-navy-200">
            <p>House 81 road 19 sector 14 Uttara, Dhaka-1230</p>
            <p>
              Email: <a
                href="mailto:bushraduti@gmail.com"
                className="text-accent-400 hover:text-accent-300 transition-colors duration-300"
              >
                bushraduti@gmail.com
              </a>
            </p>
            <p>Phone: +8801716415528</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
