import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import "../styles/ContactForm.css";

const ContactUs = () => {
  return (
    <section id="contact-us" className="contact-us">
      <div className="container-contact">
        <h1>Contact Us</h1>
        <div className="contact-cards">
          {/* Office Address Card */}
          <motion.div
            className="contact-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <a href="https://www.google.com/maps/place/D-267,+Sector+63+Noida,+India+201301" target="_blank" rel="noopener noreferrer">
              <div className="icon-container">
                <img src="https://img.icons8.com/ios-filled/50/FFFFFF/home.png" alt="Office Icon" />
              </div>
            </a>
            <div className="contact-info">
              <h3>Office Address</h3>
              <p>D-267, Sector 63 Noida, India 201301</p>
            </div>
          </motion.div>

          {/* Email Address Card */}
          <motion.div
            className="contact-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <a href="mailto:info@yourcompanyname.com">
              <div className="icon-container">
                <img src="https://img.icons8.com/ios-filled/50/FFFFFF/email.png" alt="Email Icon" />
              </div>
            </a>
            <div className="contact-info">
              <h3>Email Address</h3>
              <p>info@yourcompanyname.com</p>
            </div>
          </motion.div>

          {/* Phone Number Card */}
          <motion.div
            className="contact-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <a href="tel:+0120-4558100">
              <div className="icon-container">
                <img src="https://img.icons8.com/ios-filled/50/FFFFFF/phone.png" alt="Phone Icon" />
              </div>
            </a>
            <div className="contact-info">
              <h3>Phone Number</h3>
              <p>+0120-4558100</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;