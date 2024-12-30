import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import "../styles/Testimonials.css";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      image: '../../public/images/testimonial2.jpg',
      stars: '★★★★★',
      feedback: `I am beyond impressed with the quality of work! My jewelry images went from ordinary to extraordinary. 
        The attention to detail and precision in retouching is exceptional. The team was professional, 
        responsive, and delivered on time. I highly recommend their services!`
    },
    {
      name: 'Daniel Carter',
      image: '../../public/images/testimonial3.jpg',
      stars: '★★★★★',
      feedback: `Absolutely fantastic service! The retouching brought out the perfect sparkle and elegance in 
        my product photos. The images look so polished and professional now. This has made a big 
        difference in how my products are showcased!`
    },
    {
      name: 'Emily Davis',
      image: '../../public/images/Testimonial.jpg',
      stars: '★★★★★',
      feedback: `The team exceeded my expectations with their retouching work. The images now have a flawless finish, 
        and the colors pop beautifully. This has greatly improved my online store's presentation!`
    },
    {
      name: 'Michael Johnson',
      image: '../../public/images/testimonial4.jpg',
      stars: '★★★★★',
      feedback: `Impeccable work! The retouching was so precise and natural that my product photos look stunning. 
        I couldn't be happier with the results. Highly recommend their services!`
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="testimonials">
      <h1>What our customers say ??</h1>

      {/* Testimonial Cards Container */}
      <div className="testimonial-container">
        {/* Left Arrow */}
        <motion.button
          className="nav-arrow left-arrow"
          onClick={prevSlide}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          &#8592;
        </motion.button>

        {/* Testimonial Cards Wrapper */}
        <div className="testimonial-wrapper">
          <motion.div
            className="testimonial-slide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="testimonial-card">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="testimonial-image"
              />
              <h2>{testimonials[currentIndex].name}</h2>
              <div className="stars">{testimonials[currentIndex].stars}</div>
              <p>{testimonials[currentIndex].feedback}</p>
            </div>
          </motion.div>
        </div>

        {/* Right Arrow */}
        <motion.button
          className="nav-arrow right-arrow"
          onClick={nextSlide}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          &#8594;
        </motion.button>
      </div>

      {/* Navigation Dots */}
      <div className="dots">
        {testimonials.map((_, index) => (
          <motion.span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            data-index={index}
            initial={{ scale: 0.8 }}
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
          ></motion.span>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
