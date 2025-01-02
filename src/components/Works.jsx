import React from "react";
import { motion } from "framer-motion";
import "../styles/Works.css";

const HeroSection = () => {
  return (
    <motion.section
      className="hero-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="hero-title"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        How It Works
      </motion.h2>
      <div className="hero-content">
        <div className="img-works">
          <motion.img
            src="./images/ph-5.webp" // Replace with your jewelry image URL
            alt="Jewelry"
            className="hero-image"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          />
        </div>
        <motion.div
          className="hero-text-box"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <p className="hero-description">
            "Getting started is simple! Upload your jewelry images through our
            secure platform and select the plan that best suits your
            needs—Basic, Pro, or Premium. Once selected, our experts will
            meticulously retouch your images, enhancing every detail to
            perfection. Finally, download your polished images from your
            account or email, ready to showcase with confidence!"
          </p>
          <motion.button
            className="hero-button"
            id="pricing"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Our Process
          </motion.button>
        </motion.div>
      </div>
      <motion.div
        className="steps"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <motion.button
          className="step-button"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          Upload Your Images
        </motion.button>
        <motion.button
          className="step-button"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          Select Your Plan
        </motion.button>
        <motion.button
          className="step-button"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          We Work Our Magic
        </motion.button>
        <motion.button
          className="step-button"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          Download and Shine
        </motion.button>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
