import React from "react";
import { motion } from "framer-motion";
import "../styles/Pricing.css";

const PricingPlans = () => {
  const plans = [
    {
      name: "Basic",
      price: "$60/month",
      description: "Perfect for individuals starting out.",
      features: ["Standard image retouching", "Color correction", "Limited revisions"],
      button: "Get Started With Basic",
    },
    {
      name: "Pro",
      price: "$290/month",
      description: "Ideal for professionals and small teams.",
      features: [
        "Everything in Basic",
        "Advanced corrections",
        "Fixing specifics",
        "Generate clarity",
        "Moderate revisions",
      ],
      button: "Get Started With Pro",
      isPopular: true,
    },
    {
      name: "Premium",
      price: "$480/month",
      description: "Best for large organizations and enterprises.",
      features: [
        "Everything in Pro",
        "Custom edits",
        "Remove elements",
        "Fix sharpness",
        "Unlimited revisions",
      ],
      button: "Get Started With Premium",
    },
  ];

  const scrollToHome = () => {
    const homeSection = document.getElementById("home");
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.section
      className="pricing-plans"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        className="section-titles"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Affordable Pricing Plans
      </motion.h2>
      <div id="pricing" className="plans-container">
        {plans.map((plan, index) => (
          <motion.div
            className={`plan-card ${plan.isPopular ? "popular" : ""}`}
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {plan.isPopular && <span className="badge">Most Popular</span>}
            <h3 className="plan-name">{plan.name}</h3>
            <p className="plan-price">{plan.price}</p>
            <p className="plan-description">{plan.description}</p>
            <ul className="plan-features">
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <motion.button
              className="plan-button"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={scrollToHome} // Scroll to the home section on click
            >
              {plan.button}
            </motion.button>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default PricingPlans;
