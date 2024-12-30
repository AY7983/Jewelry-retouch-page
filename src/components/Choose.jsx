import React from "react";
import { motion } from "framer-motion";
import "../styles/ChooseUs.css";

const ChooseUs = () => {
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <motion.section
      id="servicess"
      className="py-5 choose"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container-choose">
        {/* Section Title */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          className="title"
        >
          WHY CHOOSE US?
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          className="description"
        >
          Our experts are tech enthusiasts and always stay updated with new
          technology. They can help your business by providing excellent
          Jewelry Photo Editing services. We love to work with precision and
          transparency so that our service never puts any bad effects<br /> on
          your business. Client satisfaction is the one thing we always focus
          on.
        </motion.p>

        {/* Cards Container */}
        <motion.div
          className="card-container"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Cards */}
          {[
            {
              title: "Attention to Detail",
              content:
                "We pride ourselves on our meticulous approach, ensuring every image reflects the true beauty of your jewelry.",
            },
            {
              title: "Expert Team",
              content:
                "Our skilled professionals are experienced in the nuances of jewelry retouching and use the latest technology to achieve the highest standards.",
            },
            {
              title: "Fast Turnaround",
              content:
                "We understand the importance of timely delivery and work efficiently to meet your deadlines and make a good bond with us.",
            },
          ].map((card, index) => (
            <motion.div
              className="cardss"
              key={index}
              variants={fadeInUp}
              whileInView="visible"
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
            >
              <div className="card-content">
                <h1>{card.title}</h1>
                <p>{card.content}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ChooseUs;
