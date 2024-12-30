import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import '../styles/PhotoEditing.css';

const PhotoEditing = () => {
  // Reference for the section
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { threshold: 0.2 }); // Trigger animation when 20% of the section is in view

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        duration: 0.5,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      ref={sectionRef}
      id="photo"
      className="photo-editing text-center py-5"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"} // Trigger animation based on visibility
      variants={containerVariants}
    >
      <div className="container">
        {/* Section Title */}
        <motion.h1
          className="section-title mb-5"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
        >
          Photo Editing Solutions We Offer
        </motion.h1>

        {/* Card Grid */}
        <motion.div className="row g-4" variants={containerVariants}>
          {/* Cards */}
          {[
            'High-Resolution Image Retouching',
            'Creative jewelry Editing Nicely',
            'Diamond and Gemstone Enhancement',
            'Ruby Jewelry Retouching',
            'Beautifully Retouched Necklace',
            'Intricate Design and elegance',
          ].map((title, index) => (
            <motion.div
              className="col-md-4"
              key={index}
              variants={cardVariants}
            >
              <div className="card custom-card shadow-sm">
                <img
                  src={`../../public/images/ph-${index + 1}.webp`}
                  className="card-img-top"
                  alt={title}
                />
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PhotoEditing;
