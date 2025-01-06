import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import "../styles/Footer.css";
import NewsletterSubscription from "./NewsLetter";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Column */}
        <motion.div
          className="footer-column"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src="/images/logo.png"
            alt="logo"
            className="logo-img-foot"
          />
          <h3>My Jewelry Retouch</h3>
          <div className="contact-info">
            <div className="contact-item">
              <a
                href="https://www.google.com/maps?q=D+247/1,+Sector+63+Noida,+India+201301"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/location.png"
                  alt="Location Icon"
                  className="icon-img"
                />
              </a>
              <p>D 247/1, Sector 63 Noida, India 201301</p>
            </div>
            <div className="contact-item">
              <a href="tel:+910000000000">
                <img
                  src="/images/phone1.jpg"
                  alt="Phone Icon"
                  className="icon-img phone"
                />
              </a>
              <p>Phone: +91 - 00000 00000 , 0120-4558100</p>
            </div>
            <div className="contact-item">
              <a href="mailto:info@myjewelryretouch.com">
                <img
                  src="/images/emaill.jpg"
                  alt="Email Icon"
                  className="icon-img"
                />
              </a>
              <p>Email: info@myjewelryretouch6789.com</p>
            </div>
          </div>
        </motion.div>

        {/* Middle Column */}
        <motion.div
          className="footer-column quick"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>Quick Links</h3>
          <a href="#">Home</a>
          <a href="#photo">Solutions</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#pricing">Pricing</a>
          <a href="#get-in-touch">Contact</a>
        </motion.div>

        <motion.div
          className="footer-column news"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>Our Newsletter</h3>
          <p>
            Subscribe to our newsletter and receive the latest news about our
            products and services!
          </p>
          <NewsletterSubscription />
        </motion.div>
      </div>

      <motion.div
        className="footer-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        &copy; {new Date().getFullYear()} My Jewelry Retouch. All Rights
        Reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;
