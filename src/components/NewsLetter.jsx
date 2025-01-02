import { useState } from "react";
import { motion } from "framer-motion"; // Import framer motion
import { useInView } from "react-intersection-observer"; // Import useInView
import "../styles/NewsLetter.css";

function NewsletterSubscription() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Intersection Observer hook
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation once when element comes into view
    threshold: 0.2, // Trigger when 20% of the element is in view
  });

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError(alert("please enter a valid email address!!"));
      return;
    }
    setError("");
    setIsSubmitting(true);

    // Simulate an API call
    setTimeout(() => {
      alert("Thank you for subscribing!");
      setIsSubmitting(false);
      setEmail(""); // Clear the input after submission
    }, 2000);
  };

  return (
    <motion.div
      className="newsletter-input"
      ref={ref} // Attach the observer to the wrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }} // Animate opacity based on visibility
      transition={{ duration: 0.6 }}
    >
      <motion.form
        onSubmit={handleSubmit}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: inView ? 0 : -20, opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-label="Email address"
        />
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {isSubmitting ? "Subscribing..." : "Subscribe"}
        </motion.button>
        {error && (
          <motion.p
            className="error-message"
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {error}
          </motion.p>
        )}
      </motion.form>

      {/* Social Media Icons */}
      <motion.div
        className="social-icons"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: inView ? 0 : -20, opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit our LinkedIn"
        >
          <img
            src="https://img.icons8.com/color/48/000000/linkedin.png"
            alt="LinkedIn"
          />
        </a>
          <a href="mailto:someone@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit our Mail">
            <img
              src="https://img.icons8.com/color/48/000000/email.png"
              alt="Email"
            />
          </a>
   
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit our Facebook"
        >
          <img
            src="https://img.icons8.com/color/48/000000/facebook.png"
            alt="Facebook"
          />
        </a>
      </motion.div>
    </motion.div>
  );
}

export default NewsletterSubscription;
