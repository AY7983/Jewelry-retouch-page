import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import "../styles/Works.css";

const HowItWorks = () => {
  return (
    <motion.section
      className="how-it-works"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }} // Animate when 30% is visible
    >
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        How It Works
      </motion.h1>
      <motion.div
        className="steps-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Step 1 */}
        <motion.div
          className="step-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="step-number">1</div>
          <h2>Upload Your Photo</h2>
          <p>Share your jewelry photo through our secure platform.</p>
        </motion.div>

        {/* Step 2 */}
        <motion.div
          className="step-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="step-number">2</div>
          <h2>Get It Retouched</h2>
          <p>Our experts will enhance and retouch your jewelry image.</p>
        </motion.div>

        {/* Step 3 */}
        <motion.div
          className="step-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="step-number">3</div>
          <h2>Download Final Product</h2>
          <p>Receive your retouched image, ready to impress.</p>
        </motion.div>
      </motion.div>
      <motion.div
        className="cta-button"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <a href="#portfolio">
          <button>Try It Now</button>
        </a>
      </motion.div>
    </motion.section>
  );
};

export default HowItWorks;
