import React, { useState } from 'react';
import { motion } from 'framer-motion';  // Import Framer Motion
import '../styles/Faq.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: 'What file formats do you accept?',
      answer: 'We accept all major image file formats including JPEG, TIFF, and PNG. For special requests, please contact us.',
    },
    {
      question: 'How long does it take to complete a retouching project?',
      answer: 'The time required depends on the complexity of the project. We aim to complete most projects within 1-3 business days.',
    },
    {
      question: 'Can you handle large volumes of images?',
      answer: 'Yes, we specialize in handling large volumes of images with consistent quality and timely delivery.',
    },
    {
      question: 'Do you offer revisions?',
      answer: 'Yes, we offer a specified number of revisions based on the project requirements to ensure your satisfaction.',
    },
  ];

  return (
    <motion.div
      className="faq-container"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }} // Animation when 30% of the section is visible
    >
      <motion.h2
        className="faq-title"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Frequently Asked Questions
      </motion.h2>
      <motion.div
        className="faq-items"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {faqData.map((faq, index) => (
          <motion.div
            key={index}
            className="faq-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <div className="faq-left">
                <span className="faq-question-icon">?</span>
                <span className="faq-text">{faq.question}</span>
              </div>
              <span className="faq-icon">{openIndex === index ? '▲' : '▼'}</span>
            </div>
            {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default FAQ;
