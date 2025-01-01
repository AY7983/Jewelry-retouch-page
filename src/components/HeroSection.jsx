import React from "react";
import { motion } from "framer-motion";
import "../styles/HeroSection.css";

const HeroSection = () => {
  // Animation Variants
  const fadeInFromLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const fadeInFromRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, delay: 0.5 } },
  };

  return (
    <motion.section
      id = "home"
      className="heroSection"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% of the section is in view
    >
      {/* Text Content */}
      <motion.div
        className="textContent"
        variants={fadeInFromLeft}
        whileInView="visible" // Animation triggers when the element is in view
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h1 className="heroTitle" variants={fadeInFromLeft}>
          Professional Jewelry Retouching
        </motion.h1>
        <motion.p className="heroSubtitle" variants={fadeInFromLeft}>
          Enhance the brilliance of your jewelry with our expert retouching
          services. Let your pieces shine like never before.
        </motion.p>
        <motion.div
          className="btnContainer"
          variants={fadeInFromLeft}
          whileHover={{ scale: 1.1 }}
        >
          <a href="#services" className="exploreButton">
            <button className="button btn">Explore Services</button>
          </a>
        </motion.div>
      </motion.div>

      {/* Image Content */}
      <motion.div
        className="imageContent"
        variants={fadeInFromRight}
        whileInView="visible" // Animation triggers when the element is in view
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.img
          src="/images/b-3.webp"
          alt="Jewelry Retouching Before and After"
          className="image"
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.05 }}
          variants={fadeInFromRight}
        />
        <motion.div
          className="imageOverlay"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        ></motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
