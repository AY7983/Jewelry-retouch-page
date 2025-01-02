import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import "../styles/GetInTouch.css";

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    lastname: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // Validation functions
  const validatePhoneNumber = (phone) => {
    // Check if phone number is exactly 10 digits
    const phoneRegex = /^\d{10}$/; // Only digits, exactly 10 digits
    return phoneRegex.test(phone);
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validateName = (name) => {
    // Ensure the name doesn't contain special characters and is not longer than 255 characters
    const nameRegex = /^[A-Za-z\s]+$/; // Only alphabet characters and spaces allowed
    return nameRegex.test(name) && name.length <= 255;
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear the specific error when the user updates the field
    setErrors({ ...errors, [name]: '' });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!validatePhoneNumber(formData.phone)) {
      newErrors.phone = 'Phone number must be exactly 10 digits & only digits allowed.';
    }
    if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!validateName(formData.fullname)) {
      newErrors.fullname = 'Full name must not contain special characters and should not exceed 255 characters.';
    }
    if (!formData.fullname.trim()) {
      newErrors.fullname = 'Full name is required.';
    }
    if (!formData.lastname.trim()) {
      newErrors.lastname = 'Last name is required.';
    }
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_USER_ID
      );

      alert('Message sent successfully!');
      setFormData({
        fullname: '',
        lastname: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      alert('Error sending message. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.section
      id="get-in-touch"
      className="get-in-touch"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.3 }} // Animation when 30% of the section is visible
    >
      <div className="container-get">
        <div className="contact-header">
          <h1>Get in Touch</h1>
          <p>
            Ready to elevate your jewelry images? Contact us today for inquiries or to discuss your project!
          </p>
        </div>
        <form className="contact-form" onSubmit={sendEmail}>
          <motion.div
            className="form-group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <input
              type="text"
              id="fullname"
              name="fullname"
              value={formData.fullname}
              onChange={handleInputChange}
              placeholder="Enter Full Name"
              className={errors.fullname ? 'input-error' : ''}
              required
            />
            {errors.fullname && <p className="error">{errors.fullname}</p>}
          </motion.div>
          <motion.div
            className="form-group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <input
              type="text"
              id="lastname"
              name="lastname"
              value={formData.lastname}
              onChange={handleInputChange}
              placeholder="Enter Last Name"
              className={errors.lastname ? 'input-error' : ''}
              required
            />
            {errors.lastname && <p className="error">{errors.lastname}</p>}
          </motion.div>
          <motion.div
            className="form-group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter Email"
              className={errors.email ? 'input-error' : ''}
              required
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </motion.div>
          <motion.div
            className="form-group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Enter Phone Number"
              className={errors.phone ? 'input-error' : ''}
              required
            />
            {errors.phone && <p className="error">{errors.phone}</p>}
          </motion.div>
          <motion.div
            className="form-group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder="Subject"
              className={errors.subject ? 'input-error' : ''}
              required
            />
            {errors.subject && <p className="error">{errors.subject}</p>}
          </motion.div>
          <motion.div
            className="form-group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <textarea
              rows="5"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Description"
              className={errors.message ? 'input-error' : ''}
              required
            ></textarea>
            {errors.message && <p className="error">{errors.message}</p>}
          </motion.div>
          <button type="submit" className="submit-button" disabled={isLoading}>
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </motion.section>
  );
};

export default GetInTouch;
