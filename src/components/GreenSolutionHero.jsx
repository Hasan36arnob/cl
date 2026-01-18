import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import heroImage from "../assets/images/hero.jpg";
import logoImage from "../assets/images/logo.jpeg";

const GreenSolutionsHero = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href, isContactPage) => {
    e.preventDefault();

    if (isContactPage) {
      navigate("/contact");
      setIsMenuOpen(false);
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: "Our Work Environment", href: "#team", isContactPage: false },
    { name: "Contact", href: "/contact", isContactPage: true },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Navbar */}
      <nav
        className={`fixed w-full z-50 bg-navy-900 shadow-lg transition-all duration-300 ${
          isScrolled ? "bg-opacity-95" : "bg-opacity-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center space-x-3">
              <img
                src={logoImage}
                alt="WeCare for Climate Foundation Logo"
                className="h-14 w-auto rounded-xl shadow-2xl shadow-accent-400/20 border-2 border-accent-400/30 hover:scale-110 hover:shadow-accent-400/40 transition-all duration-500 hover:border-accent-400/50"
              />
              <span className="text-lg font-semibold text-white">
              WeCare for Climate Foundation
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) =>
                    handleNavClick(e, link.href, link.isContactPage)
                  }
                  className="text-white/90 hover:text-white transition-colors duration-300 font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-white"
            >
              <div
                className={`w-6 h-0.5 mb-1.5 transition-all bg-white ${
                  isMenuOpen ? "transform rotate-45 translate-y-2" : ""
                }`}
              />
              <div
                className={`w-6 h-0.5 mb-1.5 transition-all bg-white ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <div
                className={`w-6 h-0.5 transition-all bg-white ${
                  isMenuOpen ? "transform -rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden transition-all duration-300 ${
              isMenuOpen ? "max-h-64" : "max-h-0"
            } overflow-hidden bg-navy-800`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) =>
                    handleNavClick(e, link.href, link.isContactPage)
                  }
                  className="block px-3 py-2 text-white hover:text-navy-200 hover:bg-navy-700 rounded-md transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-navy-900 via-navy-950 to-navy-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10"></div>
        <div className="container mx-auto px-5 max-w-7xl relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-8">
             Harnessing Technology for Climate Solutions and Community Development{" "}
              <span className="text-accent-400"> </span>
            </h1> 
            <p className="text-xl text-navy-200 mb-12 max-w-2xl mx-auto lg:mx-0">
              Together, we can make a difference.   
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              {/* <button className="px-8 py-4 bg-white text-blue-700 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 hover:shadow-xl hover:scale-105 transform">
                Get Started
              </button>
              <button className="px-8 py-4 border-2 border-blue-700 text-blue-700 rounded-full font-semibold hover:bg-blue-100 transition-all duration-300">
                Learn More
              </button> */}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 flex justify-center"
          >
            <img
              src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Green solutions and sustainable technology"
              className="rounded-2xl shadow-2xl max-w-full h-auto"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default GreenSolutionsHero;
