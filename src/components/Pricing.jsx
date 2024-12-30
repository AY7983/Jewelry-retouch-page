import React from "react";
import { motion } from "framer-motion";  // Import Framer Motion
import "../styles/Pricing.css";

const Pricing = () => {
  return (
    <motion.section
      id="pricing"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.3 }} // Animation when 30% of the section is visible
    >
      <div className="pricing-container">
        <motion.h1
          className="pricing-header"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Get the Best Price
        </motion.h1>
        <div className="pricing-plans">
          {/* Basic Plan */}
          <motion.div
            className="pricing-plan"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="plan-title">Basic</h2>
            <div className="pricing-color">
              <p className="plan-price">$9/month</p>
              <p className="plan-details">Perfect for individuals starting out let's start.</p>
            </div>
            <a href="#" className="plan-action">Choose Basic</a>
          </motion.div>

          {/* Pro Plan */}
          <motion.div
            className="pricing-plan"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="plan-title">Pro</h2>
            <div className="pricing-color">
              <p className="plan-price">$29/month</p>
              <p className="plan-details">Ideal for professionals and small teams experience.</p>
            </div>
            <a href="#" className="plan-action">Choose Pro</a>
          </motion.div>

          {/* Premium Plan */}
          <motion.div
            className="pricing-plan"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="plan-title">Premium</h2>
            <div className="pricing-color">
              <p className="plan-price">$49/month</p>
              <p className="plan-details">Best for large organizations and enterprises.</p>
            </div>
            <a href="#" className="plan-action">Choose Premium</a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Pricing;
