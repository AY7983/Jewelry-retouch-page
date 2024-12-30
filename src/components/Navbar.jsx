import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import "../styles/Navbar.css";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleNavItemClick = () => {
    setIsNavOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className="navbar navbar-expand-lg bg-color"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand" href="#home">
          <img src="/images/logo.png" alt="Logo" className="logo-img" />
        </a>
        
        {/* Navbar Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleToggle}
          aria-controls="navbarNav"
          aria-expanded={isNavOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div
          className={`collapse navbar-collapse justify-content-center ${isNavOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav gap-0.9">
            <motion.li
              className="nav-item"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <a className="nav-link active" href="#home" onClick={handleNavItemClick}>
                Home
              </a>
            </motion.li>
            <motion.li
              className="nav-item"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <a className="nav-link" href="#services" onClick={handleNavItemClick}>
                Services
              </a>
            </motion.li>
            <motion.li
              className="nav-item"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <a className="nav-link" href="#portfolio" onClick={handleNavItemClick}>
                Portfolio
              </a>
            </motion.li>
            <motion.li
              className="nav-item"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <a className="nav-link" href="#blog" onClick={handleNavItemClick}>
                Blog
              </a>
            </motion.li>
            <motion.li
              className="nav-item"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <a className="nav-link" href="#pricing" onClick={handleNavItemClick}>
                Pricing
              </a>
            </motion.li>
            <motion.li
              className="nav-item"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <a className="nav-link" href="#contact-us" onClick={handleNavItemClick}>
                Contact Us
              </a>
            </motion.li>
          </ul>
        </div>

        {/* Contact Button */}
        <motion.div
          className="contact-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a href="#get-in-touch" className="btn contact-btn">
            Get In Touch
          </a>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
